use anyhow::{Context, Result};
use std::process::{Command, Stdio};
use std::sync::Mutex;
use log::{info, error, warn};

pub struct LlamaManager {
    ollama_pid: Mutex<Option<u32>>,
}

impl LlamaManager {
    pub fn new() -> Self {
        LlamaManager {
            ollama_pid: Mutex::new(None),
        }
    }

    /// Check if Ollama is installed on the system
    pub fn check_ollama_installed(&self) -> Result<bool> {
        let output = Command::new("which")
            .arg("ollama")
            .output();

        match output {
            Ok(out) => {
                if out.status.success() {
                    println!("  ✓ Ollama found in system");
                    info!("Ollama found in system");
                    Ok(true)
                } else {
                    println!("  ✗ Ollama not found in system");
                    warn!("Ollama not found in system");
                    Ok(false)
                }
            }
            Err(e) => {
                error!("Error checking ollama: {}", e);
                Ok(false)
            }
        }
    }

    /// Check if Ollama server is already running
    pub fn check_ollama_running(&self) -> Result<bool> {
        let output = Command::new("pgrep")
            .arg("-f")
            .arg("ollama")
            .output();

        match output {
            Ok(out) => {
                let running = out.status.success() && !out.stdout.is_empty();
                if running {
                    println!("  ✓ Ollama is already running");
                    info!("Ollama is already running");
                } else {
                    println!("  • Ollama is not running, starting...");
                    info!("Ollama is not running");
                }
                Ok(running)
            }
            Err(e) => {
                warn!("Error checking if ollama is running: {}", e);
                Ok(false)
            }
        }
    }

    /// Start Ollama server
    pub fn start_ollama(&self) -> Result<()> {
        println!("  • Starting Ollama server...");
        info!("Starting Ollama server...");

        let child = Command::new("ollama")
            .arg("serve")
            .stdout(Stdio::null())
            .stderr(Stdio::null())
            .spawn()
            .context("Failed to start Ollama server")?;

        let pid = child.id();
        println!("  ✓ Ollama started with PID: {}", pid);
        info!("Ollama started with PID: {}", pid);

        // Store the PID so we can kill it later if needed
        let mut stored_pid = self.ollama_pid.lock().unwrap();
        *stored_pid = Some(pid);

        // Small pause to let the server initialize
        std::thread::sleep(std::time::Duration::from_secs(2));

        Ok(())
    }

    /// Stop Ollama server if it was started by us
    pub fn cleanup(&self) {
        let mut pid_guard = self.ollama_pid.lock().unwrap();

        if let Some(pid) = pid_guard.take() {
            println!("  • Stopping Ollama server (PID: {})...", pid);
            info!("Stopping Ollama server started by this application");

            // Kill the process using system commands
            #[cfg(unix)]
            {
                match Command::new("kill")
                    .arg(pid.to_string())
                    .status()
                {
                    Ok(status) => {
                        if status.success() {
                            println!("  ✓ Ollama server stopped successfully");
                            info!("Ollama server stopped successfully");
                        } else {
                            println!("  ✗ Failed to stop Ollama");
                            error!("Failed to stop Ollama server");
                        }
                    }
                    Err(e) => {
                        println!("  ✗ Failed to stop Ollama: {}", e);
                        error!("Failed to stop Ollama server: {}", e);
                    }
                }
            }

            #[cfg(windows)]
            {
                match Command::new("taskkill")
                    .args(&["/PID", &pid.to_string(), "/F"])
                    .status()
                {
                    Ok(status) => {
                        if status.success() {
                            println!("  ✓ Ollama server stopped successfully");
                            info!("Ollama server stopped successfully");
                        } else {
                            println!("  ✗ Failed to stop Ollama");
                            error!("Failed to stop Ollama server");
                        }
                    }
                    Err(e) => {
                        println!("  ✗ Failed to stop Ollama: {}", e);
                        error!("Failed to stop Ollama server: {}", e);
                    }
                }
            }
        }
    }

    /// Initialize Ollama (check and start if necessary)
    pub fn initialize(&self) -> Result<()> {
        // Check if it's installed
        if !self.check_ollama_installed()? {
            anyhow::bail!(
                "ERROR: Ollama is not installed on the system.\n\
                 Please install Ollama at https://ollama.ai/download\n\
                 Or use: curl -fsSL https://ollama.ai/install.sh | sh"
            );
        }

        // Check if it's already running
        if self.check_ollama_running()? {
            info!("Ollama is already running, no need to start again");
            return Ok(());
        }

        // Start Ollama
        self.start_ollama()?;

        Ok(())
    }
}

impl Drop for LlamaManager {
    fn drop(&mut self) {
        self.cleanup();
    }
}

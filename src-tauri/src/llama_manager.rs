use anyhow::{Context, Result};
use std::process::{Command, Stdio};
use log::{info, error, warn};

pub struct LlamaManager;

impl LlamaManager {
    pub fn new() -> Self {
        LlamaManager
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

        println!("  ✓ Ollama started with PID: {}", child.id());
        info!("Ollama started with PID: {}", child.id());

        // Small pause to let the server initialize
        std::thread::sleep(std::time::Duration::from_secs(2));

        Ok(())
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

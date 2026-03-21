mod llama_manager;

use llama_manager::LlamaManager;
use log::{info, error};

// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    // Initialize logger
    env_logger::init();

    println!("🚀 Starting CyberEgo...");
    info!("Starting CyberEgo...");

    // Initialize Ollama
    let llama_manager = LlamaManager::new();
    match llama_manager.initialize() {
        Ok(_) => {
            println!("✓ Ollama initialized successfully!");
            info!("Ollama initialized successfully!");
        }
        Err(e) => {
            println!("✗ Error initializing Ollama: {}", e);
            error!("Error initializing Ollama: {}", e);
            eprintln!("\n{}\n", e);
            std::process::exit(1);
        }
    }

    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

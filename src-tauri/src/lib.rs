mod llama_manager;

use llama_manager::LlamaManager;
use log::{info, error};
use std::sync::Arc;
use tauri::Manager;

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
    let llama_manager = Arc::new(LlamaManager::new());
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

    // Clone for window event handler
    let manager_for_window = Arc::clone(&llama_manager);

    let result = tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .setup(move |app| {
            // Setup window close handler
            if let Some(window) = app.get_webview_window("main") {
                window.on_window_event(move |event| {
                    if let tauri::WindowEvent::Destroyed = event {
                        println!("👋 Window closing, cleaning up...");
                        manager_for_window.cleanup();
                    }
                });
            }
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!());

    // Cleanup on normal exit
    println!("👋 Shutting down CyberEgo...");
    llama_manager.cleanup();

    if let Err(e) = result {
        eprintln!("Error running application: {}", e);
    }
}

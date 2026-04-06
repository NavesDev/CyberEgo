# 🤖 CyberEgo

> **A local-first AI interaction platform for philosophical debates, ethical dilemmas, and persona customization.**

CyberEgo is a desktop application built with Tauri that provides a privacy-focused environment for engaging with AI personas. All AI processing happens locally using Ollama, ensuring your conversations remain private and under your control.

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](CHANGELOG.md)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Tauri](https://img.shields.io/badge/Tauri-2.0-orange.svg)](https://tauri.app)
[![React](https://img.shields.io/badge/React-19.1-61dafb.svg)](https://react.dev)

## 🌐 Languages / Idiomas

- **English** (you are here)
- [Português (Brasil)](docs/README.pt.md)
- [Español](docs/README.es.md)

## ✨ Features

### 🎯 Current Features (v1.0)

- **🌐 Multi-language Support**: English, Portuguese (Brasil), and Spanish
- **🎨 Theme System**: Light, Dark, and System-adaptive themes
- **🔒 Privacy-First**: All AI processing runs locally via Ollama
- **⚡ Native Performance**: Built with Tauri for a lightweight, fast desktop experience
- **📦 Auto-managed Ollama**: Automatically initializes and manages Ollama server lifecycle

### 🚧 Coming Soon

- **🎭 Debate Arena**: Engage in philosophical debates with AI personas
- **🤔 Betrayal Dilemma**: Navigate moral dilemmas and ethical paradoxes
- **🧠 Personas Lab**: Create and customize AI personas with unique personalities

> 📋 See our [ROADMAP.md](ROADMAP.md) for detailed feature plans and timeline

## 🚀 Quick Start

### Prerequisites

- **Node.js** 20 LTS or higher
- **Rust** 1.94+ (via rustup)
- **Ollama** (for AI functionality)
- **System Dependencies** (Linux only):
  - `libwebkit2gtk-4.1-dev`
  - `build-essential`
  - `libssl-dev`
  - `libgtk-3-dev`
  - `libayatana-appindicator3-dev`
  - `librsvg2-dev`

### Installation

#### Automated Setup (Linux - Ubuntu/Debian)

```bash
# Clone the repository
git clone https://github.com/NavesDev/CyberEgo.git
cd CyberEgo

# Run the installation script
./install.sh
```

The script will automatically:
1. Install Node.js 20 LTS (if needed)
2. Install Rust via rustup (if needed)
3. Install system dependencies
4. Install npm packages
5. Fetch Rust dependencies
6. Configure your shell (bash/zsh)

#### Manual Setup

```bash
# Install Node.js dependencies
npm install

# Install Ollama (if not already installed)
curl -fsSL https://ollama.com/install.sh | sh

# Start the development server
npm run tauri dev
```

## 🎮 Usage

### Development Mode

```bash
npm run tauri dev
```

This will:
- Start Vite dev server on `http://localhost:1420`
- Launch the Tauri application
- Enable hot-reload for React components

### Build for Production

```bash
npm run tauri build
```

Generates optimized binaries in `src-tauri/target/release/bundle/`

## 🏗️ Project Structure

```
CyberEgo/
├── src/                    # React frontend
│   ├── components/         # React components
│   ├── contexts/           # React contexts (Theme, i18n)
│   ├── i18n/              # Internationalization
│   ├── utils/             # Utility functions
│   └── App.tsx            # Main React component
├── src-tauri/             # Rust backend
│   ├── src/
│   │   ├── main.rs        # Entry point
│   │   ├── lib.rs         # Core logic
│   │   └── llama_manager.rs  # Ollama integration
│   ├── Cargo.toml         # Rust dependencies
│   └── tauri.conf.json    # Tauri configuration
├── docs/                  # Documentation
│   ├── README.pt.md       # Portuguese README
│   └── README.es.md       # Spanish README
├── public/                # Static assets
├── install.sh            # Automated installation script
└── package.json          # Node.js dependencies
```

## 🛠️ Tech Stack

### Frontend
- **React 19.1** - UI framework
- **TypeScript 5.8** - Type safety
- **Vite 7.0** - Build tool and dev server
- **CSS Modules** - Scoped styling

### Backend
- **Tauri 2.0** - Desktop application framework
- **Rust 1.94** - Backend language
- **Ollama** - Local AI model runtime
- **Tokio** - Async runtime

### Key Dependencies
- `@tauri-apps/api` - Tauri frontend API
- `serde` - Rust serialization
- `anyhow` - Rust error handling
- `env_logger` - Rust logging

## 🌍 Supported Platforms

- ✅ **Linux** (Ubuntu/Debian tested)
- 🔄 **macOS** (should work, not tested)
- 🔄 **Windows** (should work, not tested)

## 📝 Configuration

### Change Language

Settings → Language → Select your preferred language

### Change Theme

Settings → Theme → Choose Light, Dark, or System

### Ollama Configuration

CyberEgo automatically manages Ollama server lifecycle. The application will:
1. Check if Ollama is installed
2. Start Ollama server if not running
3. Clean up on application exit

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Tauri](https://tauri.app)
- Powered by [Ollama](https://ollama.com)
- UI components inspired by modern design systems

## 📬 Contact

For questions or support, please open an issue on GitHub.

---

**Made with ❤️ for privacy-conscious AI enthusiasts**

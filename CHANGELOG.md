# Changelog

All notable changes to CyberEgo will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-04-06

### 🎉 Initial Release

The first public release of CyberEgo - a local-first AI interaction platform built with Tauri, React, and Ollama.

### ✨ Added

#### Core Features
- **Desktop Application**: Native desktop app built with Tauri 2.0
- **Initial Screen**: Animated welcome screen with cyberpunk aesthetic
- **Dashboard**: Main interface with sidebar navigation and mode selection
- **Settings Panel**: Configurable application settings

#### Internationalization (i18n)
- Multi-language support system using React Context
- **Supported Languages**:
  - 🇺🇸 English
  - 🇧🇷 Português (Brasil)
  - 🇪🇸 Español
- Language persistence across sessions
- Dynamic language switching without restart

#### Theme System
- Complete theme management using React Context
- **Theme Options**:
  - 🌞 Light mode
  - 🌙 Dark mode
  - 🖥️ System-adaptive (follows OS preference)
- Theme persistence in local storage
- Smooth theme transitions

#### UI Components
- **Sidebar**: Navigation menu with mode icons and settings button
- **Dashboard**: Placeholder for three main modes:
  - 🎭 Debate Arena (coming soon)
  - 🤔 Betrayal Dilemma (coming soon)
  - 🧠 Personas Lab (coming soon)
- **Settings Modal**: Configuration panel with theme and language selectors
- **Custom Icons**: SVG-based icon system for consistent visual language

#### Backend Integration
- **Ollama Manager**: Rust module for managing Ollama lifecycle
  - Automatic Ollama installation detection
  - Background server initialization
  - Process management and cleanup
  - Graceful shutdown on app exit
- **Tauri Commands**: Foundation for Rust-React communication
- **Logging System**: Comprehensive logging using `env_logger`

#### Developer Experience
- **Automated Installation Script** (`install.sh`):
  - Detects and installs Node.js 20 LTS
  - Installs Rust via rustup
  - Configures shell environment (bash/zsh)
  - Installs system dependencies (Linux)
  - Sets up npm and cargo dependencies
- **Hot Reload**: Vite dev server with React Fast Refresh
- **TypeScript**: Full type safety across the frontend

#### Storage & Persistence
- Local storage utilities for user preferences
- Settings persistence across application restarts

### 🏗️ Technical Stack

#### Frontend
- React 19.1.0
- TypeScript 5.8.3
- Vite 7.0.4
- CSS Modules for styling

#### Backend
- Tauri 2.0
- Rust 1.94+
- Tokio (async runtime)
- Serde (serialization)
- Anyhow (error handling)

#### Infrastructure
- Ollama integration for local AI
- Native system dialogs via Tauri
- Cross-platform desktop support

### 📦 Build & Distribution
- Tauri bundler configuration
- Icon set for multiple platforms
- Development and production build scripts

### 🔒 Privacy & Security
- Fully local AI processing (no cloud APIs)
- No telemetry or data collection
- User data stored locally only
- CSP (Content Security Policy) configured

### 📝 Documentation
- Comprehensive README with setup instructions
- Installation script with detailed output
- Code structure documentation
- Development guidelines

### 🎨 Design System
- Modern cyberpunk aesthetic
- Smooth animations and transitions
- Responsive layout system
- Consistent color palette
- Custom icon library

### Known Limitations
- Main features (Debate Arena, Betrayal Dilemma, Personas Lab) are placeholders
- Ollama must be installed separately (not bundled)
- Linux support is primary (macOS/Windows untested)
- Single window application

### 🔜 Coming Soon
- Full implementation of Debate Arena
- Betrayal Dilemma game mode
- Personas Lab for AI customization
- Chat interface with Ollama models
- Conversation history
- Multiple simultaneous AI personas
- Export/import functionality

---

## Release Notes

### Installation
Download the appropriate installer for your platform from the [Releases](https://github.com/NavesDev/CyberEgo/releases) page.

### Upgrade Instructions
This is the initial release - no upgrade path needed.

### Breaking Changes
None - initial release.

---

**Full Changelog**: https://github.com/NavesDev/CyberEgo/commits/v1.0.0

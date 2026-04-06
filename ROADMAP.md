# 🗺️ CyberEgo Roadmap

This roadmap outlines planned features and improvements for CyberEgo. Items are subject to change based on community feedback and development priorities.

---

## 🎯 Vision

Build a privacy-first, local AI interaction platform that enables philosophical exploration, ethical reasoning, and creative persona development without compromising user privacy.

---

## 📅 Release Timeline

### ✅ Version 1.0 - Foundation (Released 2026-04-06)

**Status:** 🟢 Shipped

Core infrastructure and UI foundation.

- [x] Desktop application with Tauri 2.0
- [x] Multi-language support (EN/PT/ES)
- [x] Theme system (Light/Dark/System)
- [x] Ollama integration and lifecycle management
- [x] Initial UI/UX with three mode placeholders
- [x] Settings panel
- [x] Local storage persistence

---

### 🚧 Version 1.1 - Debate Arena (Planned)

**Status:** 🟡 In Design  
**Target:** Q2 2026

First interactive AI mode implementation.

#### Features
- [ ] **Chat Interface**
  - Real-time conversation with Ollama models
  - Message history display
  - Typing indicators
  - Message timestamps
  
- [ ] **Debate Mode**
  - Topic selection interface
  - Multiple AI personas with different philosophical viewpoints
  - Turn-based debate structure
  - Argument tracking and scoring
  
- [ ] **Model Management**
  - List available Ollama models
  - Download/delete models from UI
  - Model switching during conversation
  
- [ ] **Conversation History**
  - Save debates locally
  - Search previous conversations
  - Export debates to markdown/JSON

#### Technical
- [ ] Rust-React bridge for streaming responses
- [ ] SQLite database for conversation storage
- [ ] Background task handling for long-running operations

---

### 🔮 Version 1.2 - Betrayal Dilemma (Planned)

**Status:** 🔵 Planned  
**Target:** Q3 2026

Game-like ethical decision-making experience.

#### Features
- [ ] **Dilemma Engine**
  - Pre-built ethical scenarios database
  - Dynamic scenario generation
  - Difficulty levels
  
- [ ] **Decision System**
  - Multiple choice with consequences
  - Branching narrative paths
  - Moral alignment tracking
  
- [ ] **AI Reactions**
  - AI personas react to user choices
  - Dynamic dialogue based on decisions
  - Relationship system with personas
  
- [ ] **Analytics**
  - Personal ethics profile
  - Decision patterns visualization
  - Comparison with anonymized community data (optional)

#### Technical
- [ ] State machine for scenario flow
- [ ] JSON-based scenario format
- [ ] Analytics dashboard with charts

---

### 🧪 Version 1.3 - Personas Lab (Planned)

**Status:** 🔵 Planned  
**Target:** Q4 2026

Create and customize AI personalities.

#### Features
- [ ] **Persona Builder**
  - Visual persona creation wizard
  - Personality trait sliders
  - Custom system prompts
  - Background/biography editor
  
- [ ] **Persona Library**
  - Save custom personas
  - Import/export personas
  - Community persona sharing (optional)
  - Preset persona templates
  
- [ ] **Testing Playground**
  - Test personas in isolated chat
  - Compare different personas side-by-side
  - A/B testing for prompt engineering
  
- [ ] **Advanced Configuration**
  - Temperature and parameter tuning
  - Token limits
  - Response format preferences

#### Technical
- [ ] Persona schema definition
- [ ] Template system for prompts
- [ ] Cloud sync option (end-to-end encrypted)

---

## 🚀 Future Considerations (v2.0+)

**Status:** 💭 Exploratory

Long-term vision items without concrete timelines.

### Advanced Features
- **Multi-Persona Debates**: Multiple AI personas debating simultaneously
- **Voice Interface**: Text-to-speech and speech-to-text integration
- **Custom Model Training**: Fine-tune local models on personal data
- **Collaborative Sessions**: Multi-user debates (local network)
- **Plugin System**: Community-built extensions and modes
- **Mobile Companion**: Read-only mobile app for conversation history

### Platform Expansion
- **macOS Native Build**: Optimize for Apple Silicon
- **Windows Native Build**: Test and optimize for Windows 11
- **Linux ARM Support**: Raspberry Pi and similar devices
- **Web Version**: Browser-based version with WebLLM

### Privacy & Security
- **Encrypted Storage**: Full disk encryption for conversations
- **Secure Vault**: Password-protected sensitive conversations
- **Privacy Audit Logs**: Track what data is stored locally
- **Data Export Tools**: Complete data portability

---

## 🎪 Community Requested Features

Vote on features via [GitHub Discussions](https://github.com/NavesDev/CyberEgo/discussions)

- **Markdown Support in Chat**: Render formatted text in conversations
- **Code Syntax Highlighting**: Better display for code snippets
- **Image Generation**: Integrate with Stable Diffusion for visual content
- **Document Analysis**: Upload PDFs/documents for AI analysis
- **Browser Extension**: Quick access to CyberEgo from browser
- **API Access**: REST API for third-party integrations

---

## 📊 Feature Request Process

1. **Check Existing Issues**: Search if the feature is already requested
2. **Open Discussion**: Create a discussion in GitHub Discussions
3. **Community Voting**: Use 👍 reactions to show interest
4. **Review Cycle**: Team reviews monthly
5. **Roadmap Addition**: Popular requests added to roadmap
6. **Implementation**: Features developed based on priority

---

## 🛠️ How to Contribute

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed contribution guidelines.

**Quick Links:**
- [Report a Bug](https://github.com/NavesDev/CyberEgo/issues/new?template=bug_report.md)
- [Request a Feature](https://github.com/NavesDev/CyberEgo/discussions/new?category=ideas)
- [Join Discussions](https://github.com/NavesDev/CyberEgo/discussions)

---

## 📝 Legend

- 🟢 **Shipped** - Released and available
- 🟡 **In Design** - Actively being designed
- 🟠 **In Development** - Currently being built
- 🔵 **Planned** - Committed to building
- 💭 **Exploratory** - Under consideration
- ❌ **Deprecated** - No longer planned

---

## 📢 Stay Updated

- **GitHub Releases**: Watch this repository for release notifications
- **Changelog**: Check [CHANGELOG.md](CHANGELOG.md) for detailed changes
- **Discussions**: Join conversations in GitHub Discussions

---

**Last Updated:** 2026-04-06  
**Maintainer:** @NavesDev

---

*This roadmap is a living document and subject to change. Features may be added, removed, or delayed based on technical constraints, community feedback, and development resources.*

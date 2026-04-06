# 🤖 CyberEgo

> **Uma plataforma de interação com IA local para debates filosóficos, dilemas éticos e personalização de personas.**

CyberEgo é uma aplicação desktop construída com Tauri que fornece um ambiente focado em privacidade para interagir com personas de IA. Todo o processamento de IA acontece localmente usando Ollama, garantindo que suas conversas permaneçam privadas e sob seu controle.

[![Versão](https://img.shields.io/badge/versão-1.0.0-blue.svg)](../CHANGELOG.md)
[![Licença](https://img.shields.io/badge/licença-MIT-green.svg)](../LICENSE)
[![Tauri](https://img.shields.io/badge/Tauri-2.0-orange.svg)](https://tauri.app)
[![React](https://img.shields.io/badge/React-19.1-61dafb.svg)](https://react.dev)

## 🌐 Idiomas

- [English](../README.md)
- **Português** (você está aqui)
- [Español](README.es.md)

## ✨ Funcionalidades

### 🎯 Funcionalidades Atuais (v1.0)

- **🌐 Suporte Multi-idioma**: Inglês, Português (Brasil) e Espanhol
- **🎨 Sistema de Temas**: Temas Claro, Escuro e Adaptativo ao Sistema
- **🔒 Privacidade em Primeiro Lugar**: Todo processamento de IA roda localmente via Ollama
- **⚡ Performance Nativa**: Construído com Tauri para uma experiência desktop leve e rápida
- **📦 Ollama Auto-gerenciado**: Inicializa e gerencia automaticamente o ciclo de vida do servidor Ollama

### 🚧 Em Breve

- **🎭 Arena de Debate**: Participe de debates filosóficos com personas de IA
- **🤔 Dilema da Traição**: Navegue por dilemas morais e paradoxos éticos
- **🧠 Lab de Personas**: Crie e customize personas de IA com personalidades únicas

> 📋 Veja nosso [ROADMAP.md](../ROADMAP.md) para planos detalhados de funcionalidades e cronograma

## 🚀 Início Rápido

### Pré-requisitos

- **Node.js** 20 LTS ou superior
- **Rust** 1.94+ (via rustup)
- **Ollama** (para funcionalidade de IA)
- **Dependências do Sistema** (apenas Linux):
  - `libwebkit2gtk-4.1-dev`
  - `build-essential`
  - `libssl-dev`
  - `libgtk-3-dev`
  - `libayatana-appindicator3-dev`
  - `librsvg2-dev`

### Instalação

#### Instalação Automatizada (Linux - Ubuntu/Debian)

```bash
# Clone o repositório
git clone https://github.com/NavesDev/CyberEgo.git
cd CyberEgo

# Execute o script de instalação
./install.sh
```

O script irá automaticamente:
1. Instalar Node.js 20 LTS (se necessário)
2. Instalar Rust via rustup (se necessário)
3. Instalar dependências do sistema
4. Instalar pacotes npm
5. Buscar dependências Rust
6. Configurar seu shell (bash/zsh)

#### Instalação Manual

```bash
# Instalar dependências do Node.js
npm install

# Instalar Ollama (se ainda não estiver instalado)
curl -fsSL https://ollama.com/install.sh | sh

# Iniciar o servidor de desenvolvimento
npm run tauri dev
```

## 🎮 Uso

### Modo Desenvolvimento

```bash
npm run tauri dev
```

Isso irá:
- Iniciar o servidor dev Vite em `http://localhost:1420`
- Lançar a aplicação Tauri
- Habilitar hot-reload para componentes React

### Build para Produção

```bash
npm run tauri build
```

Gera binários otimizados em `src-tauri/target/release/bundle/`

## 🏗️ Estrutura do Projeto

```
CyberEgo/
├── src/                    # Frontend React
│   ├── components/         # Componentes React
│   ├── contexts/           # Contextos React (Tema, i18n)
│   ├── i18n/              # Internacionalização
│   ├── utils/             # Funções utilitárias
│   └── App.tsx            # Componente React principal
├── src-tauri/             # Backend Rust
│   ├── src/
│   │   ├── main.rs        # Ponto de entrada
│   │   ├── lib.rs         # Lógica principal
│   │   └── llama_manager.rs  # Integração Ollama
│   ├── Cargo.toml         # Dependências Rust
│   └── tauri.conf.json    # Configuração Tauri
├── docs/                  # Documentação
│   ├── README.pt.md       # README em Português
│   └── README.es.md       # README em Espanhol
├── public/                # Assets estáticos
├── install.sh            # Script de instalação automatizado
└── package.json          # Dependências Node.js
```

## 🛠️ Stack Tecnológico

### Frontend
- **React 19.1** - Framework UI
- **TypeScript 5.8** - Segurança de tipos
- **Vite 7.0** - Ferramenta de build e servidor dev
- **CSS Modules** - Estilização com escopo

### Backend
- **Tauri 2.0** - Framework de aplicações desktop
- **Rust 1.94** - Linguagem backend
- **Ollama** - Runtime de modelo de IA local
- **Tokio** - Runtime assíncrono

### Dependências Principais
- `@tauri-apps/api` - API frontend do Tauri
- `serde` - Serialização Rust
- `anyhow` - Tratamento de erros Rust
- `env_logger` - Sistema de logs Rust

## 🌍 Plataformas Suportadas

- ✅ **Linux** (Ubuntu/Debian testado)
- 🔄 **macOS** (deve funcionar, não testado)
- 🔄 **Windows** (deve funcionar, não testado)

## 📝 Configuração

### Alterar Idioma

Configurações → Idioma → Selecione seu idioma preferido

### Alterar Tema

Configurações → Tema → Escolha Claro, Escuro ou Sistema

### Configuração do Ollama

O CyberEgo gerencia automaticamente o ciclo de vida do servidor Ollama. A aplicação irá:
1. Verificar se o Ollama está instalado
2. Iniciar o servidor Ollama se não estiver rodando
3. Limpar recursos ao sair da aplicação

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor, sinta-se à vontade para enviar um Pull Request.

1. Faça um fork do repositório
2. Crie sua branch de feature (`git checkout -b feature/RecursoIncrivel`)
3. Commit suas mudanças (`git commit -m 'Adiciona algum RecursoIncrivel'`)
4. Push para a branch (`git push origin feature/RecursoIncrivel`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](../LICENSE) para detalhes.

## 🙏 Agradecimentos

- Construído com [Tauri](https://tauri.app)
- Powered by [Ollama](https://ollama.com)
- Componentes UI inspirados em sistemas de design modernos

## 📬 Contato

Para dúvidas ou suporte, por favor abra uma issue no GitHub.

---

**Feito com ❤️ para entusiastas de IA conscientes da privacidade**

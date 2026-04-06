# 🤖 CyberEgo

> **Una plataforma de interacción con IA local para debates filosóficos, dilemas éticos y personalización de personas.**

CyberEgo es una aplicación de escritorio construida con Tauri que proporciona un entorno centrado en la privacidad para interactuar con personas de IA. Todo el procesamiento de IA ocurre localmente usando Ollama, garantizando que tus conversaciones permanezcan privadas y bajo tu control.

[![Versión](https://img.shields.io/badge/versión-1.0.0-blue.svg)](../CHANGELOG.md)
[![Licencia](https://img.shields.io/badge/licencia-MIT-green.svg)](../LICENSE)
[![Tauri](https://img.shields.io/badge/Tauri-2.0-orange.svg)](https://tauri.app)
[![React](https://img.shields.io/badge/React-19.1-61dafb.svg)](https://react.dev)

## 🌐 Idiomas

- [English](../README.md)
- [Português](README.pt.md)
- **Español** (estás aquí)

## ✨ Características

### 🎯 Características Actuales (v1.0)

- **🌐 Soporte Multi-idioma**: Inglés, Portugués (Brasil) y Español
- **🎨 Sistema de Temas**: Temas Claro, Oscuro y Adaptativo al Sistema
- **🔒 Privacidad Primero**: Todo el procesamiento de IA se ejecuta localmente vía Ollama
- **⚡ Rendimiento Nativo**: Construido con Tauri para una experiencia de escritorio ligera y rápida
- **📦 Ollama Auto-gestionado**: Inicializa y gestiona automáticamente el ciclo de vida del servidor Ollama

### 🚧 Próximamente

- **🎭 Arena de Debate**: Participa en debates filosóficos con personas de IA
- **🤔 Dilema de la Traición**: Navega por dilemas morales y paradojas éticas
- **🧠 Lab de Personas**: Crea y personaliza personas de IA con personalidades únicas

> 📋 Consulta nuestro [ROADMAP.md](../ROADMAP.md) para planes detallados de características y cronograma

## 🚀 Inicio Rápido

### Requisitos Previos

- **Node.js** 20 LTS o superior
- **Rust** 1.94+ (vía rustup)
- **Ollama** (para funcionalidad de IA)
- **Dependencias del Sistema** (solo Linux):
  - `libwebkit2gtk-4.1-dev`
  - `build-essential`
  - `libssl-dev`
  - `libgtk-3-dev`
  - `libayatana-appindicator3-dev`
  - `librsvg2-dev`

### Instalación

#### Instalación Automatizada (Linux - Ubuntu/Debian)

```bash
# Clonar el repositorio
git clone https://github.com/NavesDev/CyberEgo.git
cd CyberEgo

# Ejecutar el script de instalación
./install.sh
```

El script automáticamente:
1. Instalará Node.js 20 LTS (si es necesario)
2. Instalará Rust vía rustup (si es necesario)
3. Instalará dependencias del sistema
4. Instalará paquetes npm
5. Descargará dependencias Rust
6. Configurará tu shell (bash/zsh)

#### Instalación Manual

```bash
# Instalar dependencias de Node.js
npm install

# Instalar Ollama (si aún no está instalado)
curl -fsSL https://ollama.com/install.sh | sh

# Iniciar el servidor de desarrollo
npm run tauri dev
```

## 🎮 Uso

### Modo Desarrollo

```bash
npm run tauri dev
```

Esto:
- Iniciará el servidor dev Vite en `http://localhost:1420`
- Lanzará la aplicación Tauri
- Habilitará hot-reload para componentes React

### Build para Producción

```bash
npm run tauri build
```

Genera binarios optimizados en `src-tauri/target/release/bundle/`

## 🏗️ Estructura del Proyecto

```
CyberEgo/
├── src/                    # Frontend React
│   ├── components/         # Componentes React
│   ├── contexts/           # Contextos React (Tema, i18n)
│   ├── i18n/              # Internacionalización
│   ├── utils/             # Funciones utilitarias
│   └── App.tsx            # Componente React principal
├── src-tauri/             # Backend Rust
│   ├── src/
│   │   ├── main.rs        # Punto de entrada
│   │   ├── lib.rs         # Lógica principal
│   │   └── llama_manager.rs  # Integración Ollama
│   ├── Cargo.toml         # Dependencias Rust
│   └── tauri.conf.json    # Configuración Tauri
├── docs/                  # Documentación
│   ├── README.pt.md       # README en Portugués
│   └── README.es.md       # README en Español
├── public/                # Assets estáticos
├── install.sh            # Script de instalación automatizado
└── package.json          # Dependencias Node.js
```

## 🛠️ Stack Tecnológico

### Frontend
- **React 19.1** - Framework UI
- **TypeScript 5.8** - Seguridad de tipos
- **Vite 7.0** - Herramienta de build y servidor dev
- **CSS Modules** - Estilización con ámbito

### Backend
- **Tauri 2.0** - Framework de aplicaciones de escritorio
- **Rust 1.94** - Lenguaje backend
- **Ollama** - Runtime de modelo de IA local
- **Tokio** - Runtime asíncrono

### Dependencias Principales
- `@tauri-apps/api` - API frontend de Tauri
- `serde` - Serialización Rust
- `anyhow` - Manejo de errores Rust
- `env_logger` - Sistema de logs Rust

## 🌍 Plataformas Soportadas

- ✅ **Linux** (Ubuntu/Debian probado)
- 🔄 **macOS** (debería funcionar, no probado)
- 🔄 **Windows** (debería funcionar, no probado)

## 📝 Configuración

### Cambiar Idioma

Configuración → Idioma → Selecciona tu idioma preferido

### Cambiar Tema

Configuración → Tema → Elige Claro, Oscuro o Sistema

### Configuración de Ollama

CyberEgo gestiona automáticamente el ciclo de vida del servidor Ollama. La aplicación:
1. Verificará si Ollama está instalado
2. Iniciará el servidor Ollama si no está ejecutándose
3. Limpiará recursos al salir de la aplicación

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Por favor, siéntete libre de enviar un Pull Request.

1. Haz un fork del repositorio
2. Crea tu rama de característica (`git checkout -b feature/CaracteristicaIncreible`)
3. Haz commit de tus cambios (`git commit -m 'Añade alguna CaracteristicaIncreible'`)
4. Haz push a la rama (`git push origin feature/CaracteristicaIncreible`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT - consulta el archivo [LICENSE](../LICENSE) para más detalles.

## 🙏 Agradecimientos

- Construido con [Tauri](https://tauri.app)
- Powered by [Ollama](https://ollama.com)
- Componentes UI inspirados en sistemas de diseño modernos

## 📬 Contacto

Para preguntas o soporte, por favor abre una issue en GitHub.

---

**Hecho con ❤️ para entusiastas de IA conscientes de la privacidad**

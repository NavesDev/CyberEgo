#!/bin/bash
set -e

echo "=== Instalando dependências para CyberEgo (Tauri) ==="
echo ""

# Cores para output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 1. Instalar Node.js 20 LTS
echo -e "${BLUE}[1/5] Instalando Node.js 20 LTS...${NC}"
if ! command -v node &> /dev/null; then
    curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
    sudo apt-get install -y nodejs
    echo -e "${GREEN}✓ Node.js instalado${NC}"
else
    echo -e "${GREEN}✓ Node.js já instalado: $(node --version)${NC}"
fi

# 2. Instalar Rust
echo -e "${BLUE}[2/5] Instalando Rust...${NC}"
if ! command -v cargo &> /dev/null; then
    curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
    source $HOME/.cargo/env
    
    # Adicionar Rust ao PATH permanentemente em bash e zsh
    RUST_ENV_LINE='. "$HOME/.cargo/env"'
    
    # Configurar .bashrc se existir
    if [ -f ~/.bashrc ] && ! grep -q "/.cargo/env" ~/.bashrc; then
        echo '' >> ~/.bashrc
        echo '# Rust cargo environment' >> ~/.bashrc
        echo "$RUST_ENV_LINE" >> ~/.bashrc
        echo -e "${GREEN}✓ Rust adicionado ao .bashrc${NC}"
    fi
    
    # Configurar .zshrc se existir
    if [ -f ~/.zshrc ] && ! grep -q "/.cargo/env" ~/.zshrc; then
        echo '' >> ~/.zshrc
        echo '# Rust cargo environment' >> ~/.zshrc
        echo "$RUST_ENV_LINE" >> ~/.zshrc
        echo -e "${GREEN}✓ Rust adicionado ao .zshrc${NC}"
    fi
    
    echo -e "${GREEN}✓ Rust instalado${NC}"
else
    # Mesmo se já estiver instalado, garantir que está no PATH
    source $HOME/.cargo/env 2>/dev/null || true
    echo -e "${GREEN}✓ Rust já instalado: $(rustc --version)${NC}"
fi

# 3. Instalar dependências do sistema para Tauri
echo -e "${BLUE}[3/5] Instalando dependências do sistema para Tauri...${NC}"
sudo apt update
sudo apt install -y \
    libwebkit2gtk-4.1-dev \
    build-essential \
    curl \
    wget \
    file \
    libssl-dev \
    libgtk-3-dev \
    libayatana-appindicator3-dev \
    librsvg2-dev
echo -e "${GREEN}✓ Dependências do sistema instaladas${NC}"

# 4. Instalar dependências do Node.js
echo -e "${BLUE}[4/5] Instalando dependências do Node.js...${NC}"
cd "$(dirname "$0")"
npm install
echo -e "${GREEN}✓ Dependências do Node.js instaladas${NC}"

# 5. Compilar dependências Rust (primeiro build)
echo -e "${BLUE}[5/5] Compilando dependências Rust (pode levar alguns minutos)...${NC}"
cd src-tauri
cargo fetch
echo -e "${GREEN}✓ Dependências Rust baixadas${NC}"

echo ""
echo -e "${GREEN}=== ✓ Todas as dependências instaladas com sucesso! ===${NC}"
echo ""
echo "Para executar o projeto:"
echo "  ${BLUE}cd ~/Projetos/CyberEgo${NC}"
echo "  ${BLUE}npm run tauri dev${NC}"
echo ""
echo "Nota: Se Rust foi instalado agora, recarregue o shell:"
echo "  Bash: ${BLUE}source ~/.bashrc${NC}"
echo "  Zsh:  ${BLUE}source ~/.zshrc${NC}"
echo "  Ou simplesmente abra um novo terminal"

#!/bin/bash
# Tea CLI garantili kurulum scripti
export PATH="$HOME/.tea/tea.xyz/v*/bin:$PATH"
if ! command -v tea &> /dev/null; then
  echo "Tea CLI bulunamadı, kurulum yapılıyor..."
  sh -c "$(curl -fsSL https://tea.xyz/install.sh)"
  source ~/.bashrc
fi

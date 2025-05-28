#!/bin/bash
# Tea CLI kesin doğrulama scripti
TEA_PATH="/usr/local/tea/tea.xyz/v*/bin/tea"

if ! $TEA_PATH --version >/dev/null 2>&1; then
  echo "Tea CLI kurulu değil, kurulum yapılıyor..."
  curl -fsSL https://tea.xyz/install.sh | sh -s -- --yes --prefix=/usr/local
  exit $?
fi

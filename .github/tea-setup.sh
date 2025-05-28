#!/bin/bash
# Tea CLI kurulum scripti
export PATH="$HOME/.tea/tea.xyz/v*/bin:$PATH"
if ! command -v tea &> /dev/null; then
  curl -fsS https://tea.xyz/install.sh | sh
fi

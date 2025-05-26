# TeaTest 🍵

Modern, cross-platform package manager built with Go. Manage dependencies effortlessly across Linux, macOS, and Windows.

[![GitHub Release](https://img.shields.io/github/v/release/esduez/TeaTest)](https://github.com/esduez/TeaTest/releases)
[![NPM Version](https://img.shields.io/npm/v/teatest)](https://www.npmjs.com/package/teatest)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

<p align="center">
  <img src="https://user-images.githubusercontent.com/.../teatest-demo.gif" width="600" alt="TeaTest Demo">
</p>

## 🌟 Features
- ✅ **One-command installation**
- 🔒 **SHA256 checksum verification**
- 🖥️ **Cross-platform support** (Linux/macOS/Windows)
- ⚡ **Fast dependency resolution**
- 📦 **NPM integration**

## 🚀 Installation

### Method 1: NPM (Recommended)
```bash
npm install -g teatest

### Method 2: Direct Binary Download

# Linux/macOS

curl -L https://github.com/esduez/TeaTest/releases/latest/download/teatest-$(uname -s | tr '[:upper:]' '[:lower:]') -o /usr/local/bin/teatest
chmod +x /usr/local/bin/teatest

# Windows (PowerShell)
iwr -useb https://github.com/esduez/TeaTest/releases/latest/download/teatest-windows.exe -OutFile $env:APPDATA\teatest\teatest.exe

<#
.SYNOPSIS
TeaTest Windows Installer v2.1
#>

$ErrorActionPreference = "Stop"

# Ayarlar
$installDir = "$env:APPDATA\teatest"
$binPath = "$installDir\teatest.exe"

# İndirme
Write-Host "🍵 TeaTest Kurulumu Başlıyor..." -ForegroundColor Cyan
New-Item -ItemType Directory -Force -Path $installDir | Out-Null

Invoke-WebRequest "https://github.com/teatestdev/teatest/releases/latest/download/teatest-windows-amd64.exe" -OutFile $binPath

# PATH güncelleme
$path = [Environment]::GetEnvironmentVariable("PATH", "User")
if ($path -notlike "*$installDir*") {
    [Environment]::SetEnvironmentVariable("PATH", "$path;$installDir", "User")
}

Write-Host "✅ Kurulum Tamamlandı! 'teatest' komutunu kullanabilirsiniz." -ForegroundColor Green

<#
.SYNOPSIS
TeaTest Servis Yöneticisi v2.2
#>

param(
    [ValidateSet("install","uninstall","start","stop")]
    [string]$Action = "install"
)

# Log ayarları
$logDir = "$env:APPDATA\teatest\logs"
New-Item -ItemType Directory -Force -Path $logDir | Out-Null
Start-Transcript -Path "$logDir\service_$(Get-Date -Format 'yyyyMMdd').log" -Append

# Servis işlemleri
switch ($Action) {
    "install" {
        New-Service -Name "TeaTestDaemon" `
                   -BinaryPathName "$env:APPDATA\teatest\teatest.exe run --daemon" `
                   -DisplayName "TeaTest Arka Plan Servisi" `
                   -StartupType Automatic
        Start-Service "TeaTestDaemon"
        Write-Host "✅ Servis kuruldu ve başlatıldı" -ForegroundColor Green
    }
    "uninstall" {
        Stop-Service "TeaTestDaemon" -Force
        sc.exe delete "TeaTestDaemon"
        Write-Host "✅ Servis kaldırıldı" -ForegroundColor Yellow
    }
    "start" { Start-Service "TeaTestDaemon" }
    "stop" { Stop-Service "TeaTestDaemon" }
}

Stop-Transcript

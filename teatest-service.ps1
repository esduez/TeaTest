<#
.SYNOPSIS
TeaTest Windows Service Manager v2.3
#>

param(
    [ValidateSet("install", "uninstall", "start", "stop", "status")]
    [string]$Action = "install"
)

$ErrorActionPreference = "Stop"

# Configuration
$serviceName = "TeaTestDaemon"
$logDir = "$env:APPDATA\teatest\logs"
$logFile = "$logDir\service_$(Get-Date -Format 'yyyyMMdd').log"

# Ensure directories exist
New-Item -ItemType Directory -Force -Path $logDir | Out-Null
Start-Transcript -Path $logFile -Append

function Get-ServiceStatus {
    try {
        $status = (Get-Service $serviceName -ErrorAction Stop).Status
        Write-Host "Service status: $status" -ForegroundColor Cyan
        return $status
    } catch {
        Write-Host "Service not installed" -ForegroundColor Yellow
        return $null
    }
}

switch ($Action) {
    "install" {
        if (Get-ServiceStatus) {
            Write-Host "Service already exists" -ForegroundColor Yellow
            break
        }

        New-Service -Name $serviceName `
                   -BinaryPathName "$env:APPDATA\teatest\teatest.exe run --daemon" `
                   -DisplayName "TeaTest Background Service" `
                   -StartupType Automatic `
                   -Description "TeaTest package manager background service"

        Start-Service $serviceName
        Write-Host "✅ Service installed and started" -ForegroundColor Green
    }
    
    "uninstall" {
        $status = Get-ServiceStatus
        if ($status -eq "Running") {
            Stop-Service $serviceName -Force
        }
        
        if ($status) {
            sc.exe delete $serviceName
            Write-Host "✅ Service uninstalled" -ForegroundColor Green
        }
    }
    
    "start" { Start-Service $serviceName }
    "stop" { Stop-Service $serviceName }
    "status" { Get-ServiceStatus }
}

Stop-Transcript

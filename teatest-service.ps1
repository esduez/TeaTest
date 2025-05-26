<#
.SYNOPSIS
TeaTest Windows Service Manager v3.0
#>

# Log ayarları
$logDir = "$env:APPDATA\teatest\logs"
$logFile = "$logDir\service_$(Get-Date -Format 'yyyyMMdd').log"
New-Item -ItemType Directory -Force -Path $logDir | Out-Null
Start-Transcript -Path $logFile -Append

# Servis işlemleri
try {
    switch ($Action) {
        "install" {
            # ... (mevcut kurulum kodu)
            Write-Output "[$(Get-Date)] Service installed" | Out-File $logFile -Append
        }
        # ... (diğer case'ler)
    }
} catch {
    Write-Output "[$(Get-Date)] ERROR: $_" | Out-File $logFile -Append
    throw $_
} finally {
    Stop-Transcript
}

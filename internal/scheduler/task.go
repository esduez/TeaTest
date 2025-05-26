package scheduler

import (
	"os/exec"
	"runtime"
)

func RegisterAutoUpdate() error {
	if runtime.GOOS != "windows" {
		return nil // Sadece Windows'ta çalışır
	}

	cmd := exec.Command("powershell", "-Command", `
		$action = New-ScheduledTaskAction -Execute "$env:APPDATA\teatest\teatest.exe" -Argument "update --silent"
		$trigger = New-ScheduledTaskTrigger -Daily -At 3am
		Register-ScheduledTask -TaskName "TeaTestAutoUpdate" -Action $action -Trigger $trigger -RunLevel Highest
	`)
	return cmd.Run()
}

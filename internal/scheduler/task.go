package scheduler

import (
	"fmt"
	"os/exec"
	"runtime"
)

func RegisterAutoUpdateTask() error {
	if runtime.GOOS != "windows" {
		return fmt.Errorf("scheduler only supported on Windows")
	}

	cmd := exec.Command("powershell", "-Command", `
		$action = New-ScheduledTaskAction -Execute "$env:APPDATA\teatest\teatest.exe" -Argument "update --silent"
		$trigger = New-ScheduledTaskTrigger -Daily -At 3am
		$settings = New-ScheduledTaskSettingsSet -StartWhenAvailable -DontStopOnIdleEnd
		Register-ScheduledTask -TaskName "TeaTestAutoUpdater" -Action $action -Trigger $trigger -Settings $settings -RunLevel Highest -Force
	`)
	output, err := cmd.CombinedOutput()
	if err != nil {
		return fmt.Errorf("failed to register task: %s - %v", string(output), err)
	}
	return nil
}

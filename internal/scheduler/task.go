package scheduler

import (
	"os/exec"
)

func RegisterTask() error {
	cmd := exec.Command("powershell", `
		$action = New-ScheduledTaskAction -Execute "$env:APPDATA\teatest\teatest.exe" -Argument "update"
		$trigger = New-ScheduledTaskTrigger -Daily -At 3am
		Register-ScheduledTask -TaskName "TeaTestAutoUpdate" -Action $action -Trigger $trigger
	`)
	return cmd.Run()
}

package main

import (
	"github.com/esduez/TeaTest/internal/commands"
	"github.com/spf13/cobra"
)

func main() {
	cmd := &cobra.Command{
		Use:   "teatest",
		Short: "TeaTest CLI",
	}
	
	cmd.AddCommand(commands.NewInstallCmd())
	cmd.AddCommand(commands.NewSchedulerCmd())
	
	if err := cmd.Execute(); err != nil {
		panic(err)
	}
}

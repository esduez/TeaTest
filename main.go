package main

import (
	"github.com/esduez/TeaTest/internal/commands"
	"github.com/spf13/cobra"
)

func main() {
	cmd := &cobra.Command{
		Use:   "teatest",
		Short: "TeaTest Package Manager",
	}

	cmd.AddCommand(commands.NewInstallCmd())
	cmd.AddCommand(commands.NewListCmd())

	if err := cmd.Execute(); err != nil {
		panic(err)
	}
}

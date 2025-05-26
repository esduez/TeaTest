package main

import (
	"os"
	"teatest/internal/commands"
	
	"github.com/spf13/cobra"
)

func main() {
	rootCmd := &cobra.Command{
		Use:   "teatest",
		Short: "TeaTest Paket Yöneticisi",
	}

	rootCmd.AddCommand(commands.NewInstallCmd())
	rootCmd.AddCommand(commands.NewListCmd())
	rootCmd.AddCommand(commands.NewSchedulerCmd())
	rootCmd.AddCommand(commands.NewHashCmd())

	if err := rootCmd.Execute(); err != nil {
		os.Exit(1)
	}
}

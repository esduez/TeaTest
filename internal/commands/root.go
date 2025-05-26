package commands

import (
	"github.com/spf13/cobra"
)

func NewRootCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "teatest",
		Short: "Modern package manager",
	}
	
	cmd.AddCommand(NewInstallCmd())
	cmd.AddCommand(NewListCmd())
	cmd.AddCommand(NewSchedulerCmd())
	return cmd
}

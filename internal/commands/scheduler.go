package commands

import (
	"fmt"
	"github.com/esduez/TeaTest/internal/scheduler"
	"github.com/spf13/cobra"
)

func NewSchedulerCmd() *cobra.Command {
	return &cobra.Command{
		Use:   "scheduler",
		Short: "Manage scheduled tasks",
		Run: func(cmd *cobra.Command, args []string) {
			fmt.Println("Managing scheduler...")
			scheduler.Run()
		},
	}
}

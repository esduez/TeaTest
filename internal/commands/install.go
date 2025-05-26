package commands

import (
	"fmt"
	"github.com/esduez/TeaTest/internal/downloader"
	"github.com/spf13/cobra"
)

func NewInstallCmd() *cobra.Command {
	return &cobra.Command{
		Use:   "install",
		Short: "Install packages",
		Run: func(cmd *cobra.Command, args []string) {
			fmt.Println("Installing...")
			downloader.Download()
		},
	}
}

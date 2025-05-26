package commands

import (
	"fmt"
	"teatest/internal/scheduler"

	"github.com/spf13/cobra"
)

func NewSchedulerCmd() *cobra.Command {
	return &cobra.Command{
		Use:   "scheduler",
		Short: "Zamanlanmış görevleri yönet",
		Run: func(cmd *cobra.Command, args []string) {
			if err := scheduler.RegisterTask(); err != nil {
				fmt.Printf("❌ Hata: %v\n", err)
			} else {
				fmt.Println("✅ Görev planlayıcı ayarlandı")
			}
		},
	}
}

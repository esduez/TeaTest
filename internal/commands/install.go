package commands

import (
	"fmt"
	"teatest/internal/downloader"

	"github.com/spf13/cobra"
)

func NewInstallCmd() *cobra.Command {
	return &cobra.Command{
		Use:   "install <paket>",
		Short: "Paket yükle",
		Args:  cobra.ExactArgs(1),
		Run: func(cmd *cobra.Command, args []string) {
			pkg := args[0]
			fmt.Printf("📦 %s paketi indiriliyor...\n", pkg)
			
			// İndirme işlemi
			if err := downloader.DownloadPackage(pkg); err != nil {
				fmt.Printf("❌ Hata: %v\n", err)
				return
			}
			
			fmt.Println("✅ Başarıyla yüklendi")
		},
	}
}

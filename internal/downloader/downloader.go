package downloader

import (
	"fmt"
	"io"
	"net/http"
	"os"
)

func DownloadPackage(pkg string) error {
	url := GetPackageURL(pkg)
	resp, err := http.Get(url)
	if err != nil {
		return fmt.Errorf("indirme hatası: %v", err)
	}
	defer resp.Body.Close()

	out, err := os.Create(fmt.Sprintf("./packages/%s.zip", pkg))
	if err != nil {
		return err
	}
	defer out.Close()

	_, err = io.Copy(out, resp.Body)
	return err
}

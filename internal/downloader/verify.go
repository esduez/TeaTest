package downloader

import (
	"crypto/sha256"
	"encoding/hex"
	"io"
	"os"
)

func VerifyFile(path, expectedHash string) error {
	file, err := os.Open(path)
	if err != nil {
		return err
	}
	defer file.Close()

	hasher := sha256.New()
	if _, err := io.Copy(hasher, file); err != nil {
		return err
	}

	actualHash := hex.EncodeToString(hasher.Sum(nil))
	if actualHash != expectedHash {
		return fmt.Errorf("checksum uyumsuz: beklenen %s, alınan %s", expectedHash, actualHash)
	}
	return nil
}

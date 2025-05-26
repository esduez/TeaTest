package downloader

import (
	"crypto/sha256"
	"encoding/hex"
	"io"
	"os"
)

func GenerateChecksum(filePath string) (string, error) {
	file, err := os.Open(filePath)
	if err != nil {
		return "", err
	}
	defer file.Close()

	hasher := sha256.New()
	if _, err := io.Copy(hasher, file); err != nil {
		return "", err
	}

	return hex.EncodeToString(hasher.Sum(nil)), nil
}

func VerifyChecksum(filePath, expectedHash string) error {
	actualHash, err := GenerateChecksum(filePath)
	if err != nil {
		return err
	}

	if actualHash != expectedHash {
		return ErrChecksumMismatch
	}
	return nil
}

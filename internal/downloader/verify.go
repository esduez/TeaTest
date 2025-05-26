package downloader

import (
	"crypto/sha256"
	"encoding/hex"
	"errors"
	"io"
	"os"
)

var (
	ErrChecksumMismatch = errors.New("checksum does not match")
)

func VerifyFile(filePath, expectedHash string) error {
	file, err := os.Open(filePath)
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
		return ErrChecksumMismatch
	}
	return nil
}

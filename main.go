package main

import (
	"os"
	"teatest/internal/commands"
)

func main() {
	cmd := commands.NewRootCmd()
	if err := cmd.Execute(); err != nil {
		os.Exit(1)
	}
}

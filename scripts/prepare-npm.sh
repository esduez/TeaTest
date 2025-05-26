#!/bin/bash
# Go binary'lerini npm için paketler
for PLATFORM in linux darwin windows; do
  GOOS=$PLATFORM GOARCH=amd64 go build -o bin/teatest-$PLATFORM
  tar czf teatest-$PLATFORM.tar.gz -C bin teatest-$PLATFORM
done

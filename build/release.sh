#!/bin/bash

set -e

VERSION=$(git describe --tags)
mkdir -p release

PLATFORMS=(
  "windows/amd64"
  "linux/amd64"
  "darwin/arm64"
)

for PLATFORM in "${PLATFORMS[@]}"; do
  GOOS=${PLATFORM%/*}
  GOARCH=${PLATFORM#*/}
  OUTPUT="release/teatest-$VERSION-$GOOS-$GOARCH"

  if [ "$GOOS" = "windows" ]; then
    OUTPUT+=".exe"
  fi

  echo "Building for $GOOS/$GOARCH..."
  GOOS=$GOOS GOARCH=$GOARCH go build -o "$OUTPUT" .
done

./build/generate_checksum.sh

#!/bin/bash

# Çapraz derleme scripti
VERSION=$(git describe --tags)
PLATFORMS=("windows/amd64" "linux/amd64" "darwin/arm64")

mkdir -p release

for PLATFORM in "${PLATFORMS[@]}"; do
    GOOS=${PLATFORM%/*}
    GOARCH=${PLATFORM#*/}
    OUTPUT="release/teatest-$VERSION-$GOOS-$GOARCH"

    echo "🛠️  Derleniyor: $GOOS/$GOARCH"
    GOOS=$GOOS GOARCH=$GOARCH go build -o $OUTPUT .
    
    # Checksum oluştur
    ./build/generate_checksum.sh $OUTPUT
done

echo "🚀 Sürüm $VERSION için binary'ler hazır!"

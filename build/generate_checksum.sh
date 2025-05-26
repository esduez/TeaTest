#!/bin/bash

# Checksum üretme scripti
INPUT_FILE=$1
OUTPUT_FILE="${INPUT_FILE}.sha256"

if [ -z "$INPUT_FILE" ]; then
    echo "Kullanım: $0 <dosya>"
    exit 1
fi

echo "🔍 Checksum hesaplanıyor: $INPUT_FILE"
sha256sum $INPUT_FILE | awk '{print $1}' > $OUTPUT_FILE
echo "✅ Checksum kaydedildi: $(cat $OUTPUT_FILE)"

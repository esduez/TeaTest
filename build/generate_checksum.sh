#!/bin/bash
# release/ dizinindeki tüm dosyalar için checksum üretir

for file in release/*; do
  if [[ $file != *.sha256 ]]; then
    echo "Generating SHA256 for $(basename $file)"
    shasum -a 256 "$file" > "$file.sha256"
  fi
done

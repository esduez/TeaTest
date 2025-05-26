#!/bin/bash

for file in release/*; do
  if [[ $file != *.sha256 ]]; then
    echo "Generating checksum for $file"
    sha256sum "$file" > "$file.sha256"
  fi
done

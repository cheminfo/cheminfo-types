#!/bin/bash/sh
for filename in json/*/*.json; do
    file=${filename/json/}
    echo $file
    echo $filename
    generate-schema-doc --config-file "docs/config.yml" "$filename" "docs${file/.json/.html}"
done

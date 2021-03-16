#!/bin/bash/sh
for filename in ../json/*/*.json; do
    file=${filename/..\/json/.}
    echo $filename
    generate-schema-doc --config-file "config.yml" "$filename" ${file/.json/.html}
done

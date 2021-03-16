#!/bin/bash/sh
for filename in ../ts/*/*.d.ts; do
    file=${filename/..\/ts/.}
    echo $file
    typescript-json-schema "$filename" "*" -o ${file/.d.ts/.json}
done

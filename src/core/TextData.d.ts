/**
 * When importing text files containing experimental data depending the
 * case we may have a text, ArrayBuffer or Uint8Array
 * This type is used by the package `ensure-string` to ensure that the data
 * is actually a string.
 * This is very useful in the packages like `jcampconverter` or `xy-parser`
 */

export type TextData = string | BinaryData;

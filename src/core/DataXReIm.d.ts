import { NumberArray } from './NumberArray';

export interface DataXReIm<ArrayType extends NumberArray = NumberArray> {
  /** Array of x values */
  x: ArrayType;

  /** Array of re values */
  re: ArrayType;

  /** Array of im values */
  im: ArrayType;
}

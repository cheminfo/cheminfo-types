import type { NumberArray } from './NumberArray';

/**
 * Many spectra sharing one x-axis, as returned by the alignment methods
 */
export interface DataXYs<DataType extends NumberArray = NumberArray> {
  /**
   * Array of numbers on x-axis
   */
  x: DataType;
  /**
   * One array of numbers on y-axis per spectrum, each as long as `x`
   */
  ys: DataType[];
}

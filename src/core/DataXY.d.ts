import { NumberArray } from './NumberArray';

export interface DataXY<DataType extends NumberArray = NumberArray> {
  /**
   * Array of numbers on x-axis
   */
  x: DataType;
  /**
   * Array of numbers on y-axis
   */
  y: DataType;
}

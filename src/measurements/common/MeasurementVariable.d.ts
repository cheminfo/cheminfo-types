import { DoubleArray } from '../../core/DoubleArray';
import { OneLetter } from '../../core/OneLetter';

/**
 * Describe a variable that can only contains as data an array of number
 */
export interface MeasurementVariable<
  DataType extends DoubleArray = DoubleArray,
> {
  /**
   * Unit of the data in the column
   * @TJS-examples ["Pa", "kg"]
   */
  units?: string;
  /**
   * Long name of the column
   *@TJS-examples ["absolute pressure"]
   */
  label: string;
  /**
   *
   */
  isDependent?: boolean;
  /**
   * An array containing numerical data
   */
  data: DataType;
  /** One letter that allows to define the variable */
  symbol?: OneLetter;
  /** If defined contain the minimal value of the data */
  min?: number;
  /** If defined contain the maximal value of the data */
  max?: number;
  /**
   * If defined indicates if the data series is monotonic.
   * `1` means that the data is increasing.
   * `-1` means that the data is decreasing.
   * `0` means that the data is not monotonic.
   */
  isMonotonic?: -1 | 0 | 1;
}

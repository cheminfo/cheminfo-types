import { DoubleArray } from '../../core/DoubleArray';
import { OneLetter } from '../../core/OneLetter';



/**
 * Describe a variable that can only contains as data an array of number
 */
export interface MeasurementVariable<
  DataType = DoubleArray,
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
  symbol?: string;
  /** If defined contain the minimal value of the data */
  min?: number;
  /** If defined contain the maximal value of the data */
  max?: number;
  /** If defined indicates (true or false) if the data series is monotone  */
  isMonotone?: boolean;
  /** If defined indicates the number of times to multiply the data */
  factor?: number;
}

import { DoubleArray } from '../../core/DoubleArray';
import { Instrument } from '../../core/Instrument.d';

import { MeasurementXYVariables } from './MeasurementXYVariables';

export interface MeasurementXY<DataType extends DoubleArray = DoubleArray> {
  /**
   * A unique identifier for the measurement, preferably a UUID.
   */
  id?: string;
  /**
   * Variables containing the data of the measurement.
   * It must contain at least the variable `x` and `y`
   */
  variables: MeasurementXYVariables<DataType>;
  /**
   * Short description about the result of the measurement
   */
  description?: string;
  /**
   * May contain the type of data. This is practical when you have a bunch of data
   * of different types
   */
  dataType?: string;
  settings?: {
    instrument?: Instrument;
    [key: string]: any;
  };
  meta?: Record<string, any>;
  derived?: Record<string, any>;
}

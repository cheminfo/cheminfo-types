import { DoubleArray } from './DoubleArray';
import { SpectrumVariables } from './SpectrumVariables';

export interface MeasurementXY<DataType extends DoubleArray = DoubleArray> {
  variables: SpectrumVariables<DataType>;
  description?: string;
  settings?: Record<string, any>;
  meta?: Record<string, any>;
}

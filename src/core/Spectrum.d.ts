import { SpectrumVariables } from './SpectrumVariables.d';
import { DoubleArray } from './DoubleArray';

export interface Spectrum<DataType extends DoubleArray = DoubleArray> {
  variables: SpectrumVariables<DataType>;
  title?: string;
  dataType?: string;
  setup?: Record<string, any>;
  meta?: Record<string, any>;
}

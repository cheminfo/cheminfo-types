import { QuantitativeValue } from '../general/QuantitativeValue';
import { MeasurementResult } from '../spectra/core/MeasurementResult';

/**
 * boiling point
 */
export interface BoilingPoint extends MeasurementResult {
  temperature: QuantitativeValue;
  pressure: QuantitativeValue;
}

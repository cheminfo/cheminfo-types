import { Value } from '../general/Value';
import { MeasurementResult } from '../spectra/core/MeasurementResult';

/**
 * boiling point
 */
export interface BoilingPoint extends MeasurementResult {
  temperature: Value;
  pressure: Value;
}

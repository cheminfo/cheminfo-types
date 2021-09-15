import { Value } from '../general/Value';
import { Range } from '../general/Range';
import { MeasurementResult } from '../spectra/core/MeasurementResult';

/**
 * boiling point
 */
export interface BoilingPoint extends MeasurementResult {
  temperature: Value | Range;
  pressure: Value | Range;
}

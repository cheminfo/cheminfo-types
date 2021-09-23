import { Value } from '../general/Value';
import { Range } from '../general/Range';
import { MeasurementResult } from '../core/MeasurementResult';

/**
 * boiling point
 */
export interface BoilingPoint extends MeasurementResult {
  temperature: Value | Range;
  pressure: Value | Range;
}

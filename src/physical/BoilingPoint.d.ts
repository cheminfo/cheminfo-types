import { QuantitytWithUnit } from '../general/Quantity';
import { MeasurementResult } from '../spectra/MeasurementResult';

/**
 * boiling point
 */
export interface BoilingPoint extends MeasurementResult {
  temperature: QuantitytWithUnit;
  pressure: QuantitytWithUnit;
}

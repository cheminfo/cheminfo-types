import { MeasurementResult, JCAMP, DataColumn } from "./measurementResult";
import { PositiveQuantitytWithUnit, PositiveNumber } from "../general/quantity";

/**
 * Metadata for thermogravimetric analysis.
 * CHMO:0000690
 */
export interface TGA extends MeasurementResult {
  /** Initial mass of sample used in the measurement
   * IUPAC: M03709
   * @TJS-examples [{value: 10, unit: 'g'}]
   */
  sampleMass: PositiveQuantitytWithUnit;
}

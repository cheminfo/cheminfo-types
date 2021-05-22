import { PositiveQuantitativeValue } from '../../general/PositiveQuantitativeValue';
import { MeasurementResult } from '../core/MeasurementResult';
import { Peak } from '../core/Peak';

/**
 * Metadata for thermogravimetric analysis.
 * CHMO:0000690
 */
export interface ThermoGravimetricAnalysis extends MeasurementResult {
  /** Initial mass of sample used in the measurement
   * IUPAC: M03709
   * @TJS-examples [{value: 10, unit: 'g'}]
   */
  sampleMass: QuantitativeValue;
  peaks?: Array<Peak>;
}

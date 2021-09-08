import { Value } from '../../general/Value';
import { MeasurementResult } from '../core/MeasurementResult';


/**
 * Metadata for thermogravimetric analysis.
 * CHMO:0000690
 */
export interface TGA extends MeasurementResult {
  /** Initial mass of sample used in the measurement
   * IUPAC: M03709
   * @TJS-examples [{value: 10, units: 'g'}]
   */
  sampleMass: Value;
  peaks?: Array<Peak>;
}

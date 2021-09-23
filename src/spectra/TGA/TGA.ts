import { MeasurementResult } from '../../core/MeasurementResult';
import { TGASettings } from './TGASettings';
import { TGAZone } from './TGAZone';
import { Variable } from '../../core/SpectrumVariable';
import { BaseDerivedProperty } from '../core/BaseDerivedProperty';

/**
 * Metadata for thermogravimetric analysis.
 * CHMO:0000690
 */
export interface TGA extends MeasurementResult {
  /** Initial mass of sample used in the measurement
   * IUPAC: M03709
   * @TJS-examples [{value: 10, units: 'g'}]
   */
  settings?: TGASettings;
  derived?: {
    zones?: Array<TGAZone>;
    meta?: Record<string, BaseDerivedProperty>; //  TodDo: properly define derived property, e.g., should always have a technique
  };

  variables: {
    p: Variable; // programmed temperature
    t: Variable; // time
    x: Variable; // measured temperature
    y: Variable; // weight or percent weight
  };
}

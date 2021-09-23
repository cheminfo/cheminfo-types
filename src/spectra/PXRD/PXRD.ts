import { Attachment } from '../../general/Attachment';
import { Value } from '../../general/Value';
import { MeasurementResult } from '../../core/MeasurementResult';
import { Variable } from '../../core/SpectrumVariable';

/**
 * Metadata for powder X-ray diffraction
 * CHMO:0000158
 */
export interface PXRD extends MeasurementResult {
  /** temperature at which the measurement was performed (short form for thermodynamic, Celsius or Fahrenheit temperature)
   * IUPAC: T06261
   * @TS-examples: [{value: 100, units: 'K}]
   */
  temperature?: Value;
  cif?: Attachment;
  method?: string;
  /**Type of the sample holder
   * @TS-examples ['capillary', 'acetate foil']
   */
  sampleHolder?: string;
  anode:
    | 'CuKa'
    | 'CuKa2'
    | 'CuKa1'
    | 'CuKb1'
    | 'MoKa'
    | 'MoKa2'
    | 'MoKa1'
    | 'MoKb1'
    | 'CrKa'
    | 'CrKa2'
    | 'CrKa1'
    | 'CrKb1'
    | 'FeKa'
    | 'FeKa2'
    | 'FeKa1'
    | 'FeKb1'
    | 'CoKa'
    | 'CoKa1'
    | 'CoKa2'
    | 'CoKb1'
    | 'AgKa'
    | 'AgKa1'
    | 'AgKa2'
    | 'AgKb1';
  jcamp: PxrdJCAMP;
  peaks?: Array<Peak>;
}

import { MeasurementResult } from '../core/MeasurementResult';

import { IRSpectroscopyPeak } from './IRSpectroscopyPeak';
import { IRSpectroscopySettings } from './IRSpectroscopySettings';
import {IRSpectroscopyVariables} from './IRSpectroscopyVariables'

/**
 * Metadata for infrared spectroscopy. Groups absorption, emission,
 * transmission, and reflectance
 * CHMO:0000630, 0002290, 0000649, 0000643
 */
export interface InfraredSpectroscopy extends MeasurementResult {
  variables: IRSpectroscopyVariables,
  /** Array of peaks
   */
  peaks?: Array<IRSpectroscopyPeak>;

  settings?: IRSpectroscopySettings;
}
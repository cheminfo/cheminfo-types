import { Compound } from '../../general/Compound';
import { Value } from '../../general/Value';

import { MeasurementResult } from '../core/MeasurementResult';
import { Peak } from '../core/Peak';

/**
 * Metadata for infrared spectroscopy. Groups absorption, emission,
 * transmission, and reflectance
 * CHMO:0000630, 0002290, 0000649, 0000643
 */
export interface InfraredSpectroscopy extends MeasurementResult { 
	variables.w; 
	variables.a:



   meta?: Object;

  /** temperature at which the measurement was performed (short form for thermodynamic, Celsius or Fahrenheit temperature)
   * IUPAC: T06261
   * @TS-examples: [{value: 100, unit: 'K}]
   */
  temperature?: Value;
  /** measurement principle
   * @TS-examples: [{value: 100, unit: 'K}]
   */
  principle?: 'adsorption' | 'emission' | 'transmission' | 'reflectance';
  /**
   * Solvent used to dissolve, if measurement in solution
   * @TJS-examples [{'mf': 'CH3OH', 'smiles': 'CCO'}]
   */
  solvent?: Compound;
  /** Array of peaks
   */
  peaks?: Array<IRPeak>;
}

/**
derivedProperties: {
	peakPicking: [{
		processingSteps: Array<ProcessingStep>
		peaks: Array<IRPeak>
	}]
}
*/

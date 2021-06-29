import { Compound } from '../../general/Compound';
import { Value } from "../../general/Value";

export interface IRSpectroscopySettings {
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
}
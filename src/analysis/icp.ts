import { Value } from '../core/Value.d';

export interface ICPResult {
  element: string;
  wavelength: Value;
  experimentalConcentration: Value;
  dilutionFactor: number;
  solvent: string;
  sampleConcentration: Value;
}

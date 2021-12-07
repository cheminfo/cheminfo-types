import { Value } from '../core/Value.d';

export interface ICPDilution {
  factor?: number;
  solvent?: string;
}

export interface ICPResult {
  element: string;
  wavelength?: Value;
  experimentalConcentration?: Value;
  dilution?: ICPDilution;
  sampleConcentration?: Value;
}

import { MolecularAssignment } from './core/MolecularAssignment';

interface IRPeak {
  wavenumber: number;
  absorbance: number;
  assignment?: MolecularAssignment;
  annotation?: string;
}

import { BaseDerivedProperty } from '../core/BaseDerivedProperty';
import { MolecularAssignment } from '../core/MolecularAssignment';

/**PeakPosition is characterised by independent coordinates (e.g., ppm on 2 axis in 2D NMR, angle in Xray diffraction, wavenumber in IR)
 * and might also have dependent values in one (e.g., transmission, absorption) or multple (e.g., weight loss and temperature for TGA) dimensions. The choice of "independent" and "dependent"  is because this seems to be general to all measurement techniques: we vary something and observer changes somewhere else. But it is not general that it is x/y/z (which might imply Euclidean coordinates, but the data might be better presented in spherical coordinates) and we do not know in general how many dependent/independent coodinates we have.
 *
 * It might have an assignment and the form of the assignment will depend on the technique. For organic chemistry/molecular structure elucidation, the typical form of assignment will be a MolecularAssignment with SMILES and atom indices, where the SMILES is repeated in every `Assignment` to avoid errors due to wrong interpretation of some molfile.
 * For materials science techniques, the assignment might be something else, e.g., hkl indices for X-ray diffraction or some phase transition in TGA.
 *
 * A peak might also have an annotation which is usually derived from some interpretation. This could be the classification as
 *  "strong", "medium", "weak" in IR or some other custom note
 *
 * From the  `BaseDerivedProperty` type we get the slots to store some processing information (e.g., how the peak picking was done)
 */
interface IRSpectroscopyPeak extends BaseDerivedProperty{
  position: IRPeakPosition
  publicationAssignment?: string;
  assignment?: MolecularAssignment;
  kind?: string;
}

type IRPeakPosition = waPeakPosition | wtPeakPosition | wePeakPosition | wrPeakPosition | laPeakPosition | ltPeakPosition | lePeakPosition | lrPeakPosition

interface waPeakPosition {
  w: number;
  a: number;
}

interface wtPeakPosition {
  w: number;
  t: number;
}

interface wePeakPosition {
  w: number;
  e: number;
}

interface wrPeakPosition {
  w: number;
  r: number;
}



interface laPeakPosition {
  l: number;
  a: number;
}

interface ltPeakPosition {
  l: number;
  t: number;
}

interface lePeakPosition {
  l: number;
  e: number;
}

interface lrPeakPosition {
  l: number;
  r: number;
}
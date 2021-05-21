import { Ranges } from './Ranges';
import { Spectrum } from './Spectrum';
import { Data1D } from './Data1D';
import { Peaks } from './Peaks';
import { Integrals } from './Integrals';

export interface Spectrum1D extends Spectrum {
  data: Data1D;
  originalData?: Data1D;
  peaks: Peaks;
  integrals: Integrals;
  ranges: Ranges;
}

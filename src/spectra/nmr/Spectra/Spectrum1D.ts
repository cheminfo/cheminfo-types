import { Data1D } from '../Data1D';
import { Integral } from '../Integral';
import { Peak } from '../Peaks/Peak';
import { Range } from '../Ranges/Range';

import { Spectrum } from './Spectrum';

interface Ranges {
  values: Array<Range>;
  options?: any;
}

interface Peaks {
  values: Array<Partial<Peak>>;
  options: any;
}

export interface Spectrum1D extends Spectrum {
  [index: string]: Data1D | Peaks | Ranges | Integral[] | number | any | Array<any>;
  data: Data1D;
  peaks: Peaks;
  integrals: Integral[];
  ranges: Ranges;
  meta: any;
  info: any;
  filters: Array<any>;
}

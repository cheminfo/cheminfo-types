import { Data2D } from '../Data2D';
import { Info2D } from '../Info/Info2D';
import { Zone } from '../Zones/Zone';

import { Spectrum } from './Spectrum';

export interface Zones {
  values: Array<Zone>;
  options?: any;
}

export interface Spectrum2D extends Spectrum {
  [index: string]: Zones | Array<any> | any | Data2D | Partial<Info2D>;
  zones: Zones;
  meta: any;
  filters: Array<any>;
  data: Data2D;
  info: Info2D;
}

import { Info2D } from './Info2D';
import { Spectrum } from './Spectrum';
import { Zones } from './Zones';

export interface Spectrum2D extends Spectrum {
  zones: Zones;
  info: Partial<Info2D>;
  originalInfo?: Partial<Info2D>;
}

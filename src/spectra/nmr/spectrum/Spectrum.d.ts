import { Source } from './Source';
import { Display } from './Display';

export interface Spectrum {
  id: string | number;
  source: Partial<Source>;
  display: Partial<Display>;
  meta: any;
}

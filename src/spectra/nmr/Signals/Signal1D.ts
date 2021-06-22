import type { JCoupling } from '../JCoupling';
import type { Signal } from './Signal';
import type { Peak1D } from '../Peaks/Peak1D';

export interface Signal1D extends Signal {
  delta: number;
  diaID: Array<string>;
  originDelta?: number;
  multiplicity: string;
  j: JCoupling[];
  peak?: Peak1D[];
}

import type { Signal2D } from '../Signals/Signal2D';

interface RangeAxis {
  [axis: string]: number;
  to: number;
  from: number;
}

export interface Zone {
  [axis: string]: Partial<RangeAxis> | string | Array<Signal2D>;
  id: string;
  x: Partial<RangeAxis>;
  y: Partial<RangeAxis>;
  signal: Array<Signal2D>;
  kind: string;
}

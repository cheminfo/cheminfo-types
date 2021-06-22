import type { Peak2D } from '../Peaks/Peak2D';
import type { Signal } from './Signal';

interface SignalAxis {
  delta: number;
  diaID?: string[];
  originDelta: number;
}

export interface Signal2D extends Signal {
  [index: string]: string | number | SignalAxis | Peak2D[] | undefined;
  x: SignalAxis;
  y: SignalAxis;
  peak?: Peak2D[];
}

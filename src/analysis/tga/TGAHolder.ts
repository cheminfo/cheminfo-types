import type { Value } from '../../core/Value.d';

/** Holder (crucible) used in a TGA experiment. */
export interface TGAHolder {
  /** Type of holder (e.g., "Alumina 70ul"). */
  kind: string;
  /** Mass of the holder. */
  mass: Value;
  /** Material of the holder (e.g., "Ceramic"). */
  material?: string;
}

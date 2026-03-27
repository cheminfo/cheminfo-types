import type { Value } from '../../core/Value.d';

import type { TGAHolder } from './TGAHolder';
import type { TGAZone } from './TGAZone';

/**
 * Standardized TGA metadata.
 * CHMO: 0000690
 */
export interface TGAMeta {
  /** Measurement method name (e.g., "650 TGA/DSC", "Full"). */
  method?: string;
  /** Mass-loss zones extracted from the instrument software. */
  zones?: TGAZone[];
  /** Holder (crucible) information. */
  holder?: TGAHolder;
  /** Initial sample mass before the experiment. */
  initialValue?: Value;
  /** Sample mass. */
  sampleMass?: Value;
}

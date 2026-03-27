import type { Value } from '../../core/Value.d';

/**
 * A zone representing a mass-loss step in a TGA experiment.
 * Zones are typically extracted from instrument software output
 * (e.g., Mettler Toledo "Results" section).
 */
export interface TGAZone {
  /** Relative mass loss as a fraction (0 to 1). */
  relativeMassLoss: number;
  /** Absolute mass loss with units. */
  massLoss: Value;
  /** Start of the temperature range for this zone. */
  from?: Value;
  /** End of the temperature range for this zone. */
  to?: Value;
  /** Type of the zone (e.g., "horizontal", "Residual"). */
  kind: string;
  /** Temperature at the inflection point of the mass-loss curve. */
  inflectionPoint?: Value;
  /** Temperature at the midpoint of the mass-loss step. */
  middlePoint?: Value;
}

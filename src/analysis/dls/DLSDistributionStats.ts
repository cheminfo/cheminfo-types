import type { Value } from '../../core/Value.d';

/**
 * Statistical properties of a single distribution type for a detected
 * particle population (e.g. the intensity, volume, or number representation
 * of one peak).
 */
export interface DLSDistributionStats {
  /** Mean value in this distribution. */
  mean?: Value;
  /** Area of the peak as a percentage of the total distribution. */
  area?: Value;
  /** Standard deviation of the peak. */
  standardDeviation?: Value;
}

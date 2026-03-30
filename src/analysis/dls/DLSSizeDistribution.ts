import type { DLSDistributionStats } from './DLSDistributionStats';

/**
 * Size distribution properties across the three standard weighting types.
 */
export interface DLSSizeDistribution {
  /** Intensity-weighted size distribution properties. */
  intensity?: DLSDistributionStats;
  /** Volume-weighted size distribution properties. */
  volume?: DLSDistributionStats;
  /** Number-weighted size distribution properties. */
  number?: DLSDistributionStats;
}

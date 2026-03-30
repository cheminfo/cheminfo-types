import type { DLSDistributionStats } from './DLSDistributionStats';

/**
 * A single detected particle population with its properties expressed
 * across all available distribution types.
 */
export interface DLSDistribution {
  /** Intensity-weighted size distribution properties. */
  intensity?: DLSDistributionStats;
  /** Number-weighted size distribution properties. */
  number?: DLSDistributionStats;
  /** Volume-weighted size distribution properties. */
  volume?: DLSDistributionStats;
  /** Molecular weight distribution properties. */
  molecularWeight?: DLSDistributionStats;
  /** Diffusion coefficient distribution properties. */
  diffusionCoefficient?: DLSDistributionStats;
  /** Relaxation time distribution properties. */
  relaxationTime?: DLSDistributionStats;
}

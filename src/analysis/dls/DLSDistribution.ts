import type { DLSDistributionStats } from './DLSDistributionStats';
import type { DLSSizeDistribution } from './DLSSizeDistribution';

/**
 * A single detected particle population with its properties expressed
 * across all available distribution types.
 */
export interface DLSDistribution extends DLSSizeDistribution {
  /** Molecular weight distribution properties. */
  molecularWeight?: DLSDistributionStats;
  /** Diffusion coefficient distribution properties. */
  diffusionCoefficient?: DLSDistributionStats;
  /** Relaxation time distribution properties. */
  relaxationTime?: DLSDistributionStats;
}

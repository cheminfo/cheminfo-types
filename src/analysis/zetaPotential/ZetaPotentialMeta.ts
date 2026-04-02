import type { Value } from '../../core/Value.d';

/**
 * Standardized zeta potential metadata from electrophoretic light scattering
 * (ELS) measurements.
 */
export interface ZetaPotentialMeta {
  /** Mean zeta potential from the distribution. */
  zetaPotential?: Value;
  /** Standard deviation of the zeta potential distribution. */
  zetaDeviation?: Value;
  /** Electrophoretic mobility. */
  mobility?: Value;
  /** Sample conductivity. */
  conductivity?: Value;
  /** Derived mean count rate. */
  derivedMeanCountRate?: Value;
  /** Mean count rate. */
  meanCountRate?: Value;
  /** Quality factor of the measurement. */
  qualityFactor?: number;
}

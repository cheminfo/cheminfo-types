import type { Value } from '../../core/Value.d';

import type { DLSDistribution } from './DLSDistribution';

/**
 * Standardized DLS (Dynamic Light Scattering) metadata.
 * CHMO: 0000120
 */
export interface DLSMeta {
  /** Z-average hydrodynamic diameter (cumulants mean). */
  zAverage?: Value;
  /** Polydispersity index from cumulants analysis. */
  polydispersityIndex?: number;
  /** Derived mean count rate. */
  derivedMeanCountRate?: Value;
  /** Intercept of the correlation function. */
  intercept?: number;
  /** Measured baseline of the correlation function. */
  measuredBaseline?: number;
  /** Fit error of the cumulants analysis. */
  fitError?: number;
  /** First cumulant (mean decay rate). */
  firstCumulant?: number;
  /** Second cumulant (variance of decay rate). */
  secondCumulant?: number;
  /** Detected particle populations, each with properties across all distribution types. */
  distributions?: DLSDistribution[];
}

import { MeasurementResult } from '../../core/MeasurementResult';

import { GasAdsorptionIsothermSettings } from './GasAdsorptionIsothermSettings';

/** Isotherm describing adsorption or desorption of the sample component on the surface of the stationary phase from the mobile phase.
 * CHMO: 0001992
 * IUPAC: AT06934
 */
export interface Isotherm extends MeasurementResult {
  settings: GasAdsorptionIsothermSettings;
  variables: GasAdsorptionIsothermVariables;
}

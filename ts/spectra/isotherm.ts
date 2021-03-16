import { PositiveQuantitytWithUnit } from "../general/quantity";
import { Compound } from "../general/chemical";
import { MeasurementResult } from "./measurementResult";
/** The material that is present in one or other (or both) of the bulk phases and capable of being adsorbed.
 * IUPAC: A00166
 */
export interface Adsorptive extends Compound {
  molarFraction: number;
}

/** Mixture of adsorptives
 */
export interface AdsorptiveMixture {
  adsorptives: Array<Adsorptive>;
  saturationPressure: PositiveQuantitytWithUnit;
}

/** Properties derived from the analysis of an isotherm
 */
export interface DerivedIsothermProperties {
  henryCoefficient: PositiveQuantitytWithUnit;
  saturationLoading: PositiveQuantitytWithUnit;
}

/** Isotherm describing adsorption or desorption of the sample component on the surface of the stationary phase from the mobile phase.
 * CHMO: 0001992
 * IUPAC: AT06934
 */
export interface Isotherm extends MeasurementResult {
  temperature: PositiveQuantitytWithUnit;
  adsorptives: AdsorptiveMixture;
  derivedProperties: DerivedIsothermProperties;
}

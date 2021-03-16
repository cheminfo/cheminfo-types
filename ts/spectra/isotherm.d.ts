import { PositiveQuantitytWithUnit, PositiveNumber } from "../general/quantity";
import { Compound } from "../general/compound";
import { MeasurementResult, JCAMP, DataColumn } from "./measurementResult";
/** The material that is present in one or other (or both) of the bulk phases and capable of being adsorbed.
 * IUPAC: A00166
 */
export interface Adsorptive extends Compound {
  /**Amount of a constituent divided by the total amount of all constituents in the mixture. It is also called mole fraction. Amount fraction is equal to the number fraction: the number of entities of one constituent divided by the total number of entities in the mixture.
   * IUPAC: A00296
   */
  molarFraction: PositiveNumber;
}

/** Mixture of adsorptives
 * CHEBI:60004
 */
export interface AdsorptiveMixture {
  adsorptives: Array<Adsorptive>;
  /**The pressure exerted by a pure substance (at a given temperature) in a system containing only the vapour and condensed phase (liquid or solid) of the substance.
   * IUPAC: S05479
   */
  saturationPressure: PositiveQuantitytWithUnit;
}

/** Properties derived from the analysis of an isotherm
 */
export interface DerivedIsothermProperties {
  henryCoefficient?: PositiveQuantitytWithUnit;
  saturationLoading?: PositiveQuantitytWithUnit;
}

/** Defines the required columns in an isotherm JCAMP file */
export interface IsothermJCAMP extends JCAMP {
  /**
   *@default require('./__examples__/isotherm.example').IsothermDefaultColumns
   */
  columns: Array<DataColumn>;
}

/** Isotherm describing adsorption or desorption of the sample component on the surface of the stationary phase from the mobile phase.
 * CHMO: 0001992
 * IUPAC: AT06934
 */
export interface Isotherm extends MeasurementResult {
  /** temperature at which the measurement was performed (short form for thermodynamic, Celsius or Fahrenheit temperature)
   * IUPAC: T06261
   * @TS-examples: [{value: 100, unit: 'K}]
   */
  temperature: PositiveQuantitytWithUnit;
  /** mobile phase composition */
  adsorptives: AdsorptiveMixture;
  /** Properties derived from the analysis of an isotherm */
  derivedProperties?: DerivedIsothermProperties;
  /** Measurement principle with which the gas adsorption/desorption isotherm was measured. */
  method: "gravimetric" | "volumetric";
  /** Data attached as JCAMP file */
  jcamp: IsothermJCAMP;
  /** Mass of sample used in the measurement
   * IUPAC: M03709
   * @TJS-examples [{value: 10, unit: 'g'}]
   */
  sampleMass: PositiveQuantitytWithUnit;
}

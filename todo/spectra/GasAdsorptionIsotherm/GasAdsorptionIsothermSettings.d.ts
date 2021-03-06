import { Compound } from '../../general/Compound';
import { Value } from '../../general/Value';



/** The material that is present in one or other (or both) of the bulk phases and capable of being adsorbed.
 * IUPAC: A00166
 */
export interface Adsorptive extends Compound {
  /**Amount of a constituent divided by the total amount of all constituents in the mixture. It is also called mole fraction. Amount fraction is equal to the number fraction: the number of entities of one constituent divided by the total number of entities in the mixture.
   * IUPAC: A00296
   */
  molarFraction: Value;
}

/** Mixture of adsorptives
 * CHEBI:60004
 */
export interface AdsorptiveMixture {
  adsorptives: Array<Adsorptive>;
  /**The pressure exerted by a pure substance (at a given temperature) in a system containing only the vapour and condensed phase (liquid or solid) of the substance.
   * IUPAC: S05479
   */
  saturationPressure: Value;
}


export interface GasAdsorptionIsothermSettings {
    /** temperature at which the measurement was performed (short form for thermodynamic, Celsius or Fahrenheit temperature)
   * IUPAC: T06261
   * @TS-examples: [{value: 100, units: 'K}]
   */
  temperature: Value;
  /** mobile phase composition */
  adsorptives: AdsorptiveMixture;
  /** Measurement principle with which the gas adsorption/desorption isotherm was measured. */
  method: 'gravimetric' | 'volumetric';
  /** Data attached as JCAMP file */
  /** Mass of sample used in the measurement
   * IUPAC: M03709
   * @TJS-examples [{value: 10, units: 'g'}]
   */
  sampleMass: Value;
}
/**Schema based on ISO-14976-1998 and example files used in practice*/
import { PositiveQuantitytWithUnit, NegativeQuantityWithUnit, QuantitytWithUnit } from "../general/quantity";
import { MeasurementResult, JCAMP, DataColumn } from "./measurementResult";


/** Defines the required columns in an XPS JCAMP file */
export interface XPSJcamp extends JCAMP {
  /**
   *@default require('./__examples__/xps.example').XPSDefaultColumns
   */
  columns: Array<DataColumn>;
}

export interface XPSRegion {
  /**
   * Label for the region 
   * @TJS-examples ['wide', 'Auger', 'Cu LMM', 'Fermi Edge', 'C1s']
   */
  label: string
}

/**
 * Describes the fitted XPS components, usually done with CASA XPS and stored as comment block in the vamas file 
 */
export interface XPSComponents {  
  /**
   * Binding energy of this peak
   * @TJS-examples [{value: 10, unit: eV}]
   */
  bindingEnergy: NegativeQuantityWithUnit
  /**
   * Area of the peak, usally measured in counts per second * eV
   * @TJS-examples [{value: 10, unit: 'CPS s'}]
   */
  area: PositiveQuantitytWithUnit
}

export interface XPSAnalysisSource {
  /** Source label
   * @TJS-examples ['Al']
   */
  label: string
  /** Power employed in the xray source 
   * @TJS-examples [{value: 200, unit: 'W'}]
   */
  xrayPower: PositiveQuantitytWithUnit
  /** Current run through the xray source 
   * @TJS-examples [{value: 200, unit: 'A'}]
   */
  emissionCurrent: PositiveQuantitytWithUnit
   /** Characteristic energy of the xray source 
   * @TJS-examples [{value: 1486.69, unit: 'eV'}]
   */
  characteristicEnergy: PositiveQuantitytWithUnit
  /**
   * @TJS-examples [{value: 20, unit:'deg'}]
   */
  angle: QuantitytWithUnit
  /**
   * Width at the sample in the plane perpendicular to the source beam 
   * @TJS-examples [{value: 10, unit: 'um'}]
   */
  beamWidthX: PositiveQuantitytWithUnit
    /**
   * Width at the sample in the plane perpendicular to the source beam 
   * @TJS-examples [{value: 10, unit: 'um'}]
   */
  beamWidthY: PositiveQuantitytWithUnit
}


export interface XPS extends MeasurementResult {
  /** temperature at which the measurement was performed (short form for thermodynamic, Celsius or Fahrenheit temperature)
   * IUPAC: T06261
   * @TS-examples: [{value: 100, unit: 'K'}]
   */
  temperature: PositiveQuantitytWithUnit;
  /** Data attached as JCAMP file */
  jcamp: XPSJcamp;
  source: XPSAnalysisSource
  /**
   * Often in XPS, a scan is part of a mapping experiment. In this case, scanMode is set to map.
   * Map is a spectrum which refers to a specific point in a regular 2D spatial array
   * MAPDP is a spectrum which refers to a specific point in a regular 2D spatial array and to a specific layer in a depth profile 
   * MAPSVDP is a complete set of single values of a fixed number of variables for every point in a regular two-dimensional array for one layer in a depth profile. Sucessive blocks refer to successive layers in the depth profile.
   * NORM Either independent data or data which refers to a specific set of single values of one or more experimental variables. The data may be spectral or non-spectral. 
   * SDP is a spectrum which refers to a specific layer in a depth profile 
   * SDPSV is a complete set of single values of a fixed number of variables for every layer in a depth profile 
   * SEM is an electron emission intensity for every point in a regular two-dimensional spatial array
   * @TJS-examples ['map', 'regular']
   */
  scanMode: 'map|mapdp|mapsv|mapsvdp|norm|sdp|sdpsv|sem'
  experiment: 'auger|xps'
  /**Indicates if charge neutralization was employed 
   * @TJS-examples [true]
   */
  chargeNeutralizer: boolean;
  /**
   * @TJS-examples [{value: 100, unit:'eV'}]
   */
  workFunction: PositiveQuantitytWithUnit
  /**
   * Describes the "resolution" of the experiment
   * @TJS-examples [{value: 20, unit:'eV'}]
   */
  passEnergy: PositiveQuantitytWithUnit
}

import { MeasurementResult, JCAMP, DataColumn } from "./measurementResult";
import { Attachment } from "../general/attachment";
import { PositiveQuantitytWithUnit, PositiveNumber } from "../general/quantity";

/** Defines the required columns in an PXRD JCAMP file */
export interface PxrdJCAMP extends JCAMP {
  /**
   *@default require('./__examples__/pxrd.example').PxrdDefaultColumns
   */
  columns: Array<DataColumn>;
}

/**
 * Metadata for powder X-ray diffraction
 * CHMO:0000158
 */
export interface PXRD extends MeasurementResult {
  /** temperature at which the measurement was performed (short form for thermodynamic, Celsius or Fahrenheit temperature)
   * IUPAC: T06261
   * @TS-examples: [{value: 100, unit: 'K}]
   */
  temperature?: PositiveQuantitytWithUnit;
  cif?: Attachment;
  method?: string;
  /**Type of the sample holder
   * @TS-examples ['capillary', 'acetate foil']
   */
  sampleHolder?: string;
  anode:
    | "CuKa"
    | "CuKa2"
    | "CuKa1"
    | "CuKb1"
    | "MoKa"
    | "MoKa2"
    | "MoKa1"
    | "MoKb1"
    | "CrKa"
    | "CrKa2"
    | "CrKa1"
    | "CrKb1"
    | "FeKa"
    | "FeKa2"
    | "FeKa1"
    | "FeKb1"
    | "CoKa"
    | "CoKa1"
    | "CoKa2"
    | "CoKb1"
    | "AgKa"
    | "AgKa1"
    | "AgKa2"
    | "AgKb1";
  jcamp: PxrdJCAMP;
}

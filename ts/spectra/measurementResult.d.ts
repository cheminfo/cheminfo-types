import { Instrument } from "../general/instrument";
import { HTMLString } from "../general/htmlString";
import { PositiveNumber } from "../general/quantity";
import { Attachment } from "../general/attachment";
import { DataSource } from "../general/source";
/**Generic type for the result of a measurement, e.g., a spectrum or result from a crysallographic experiment */
export interface MeasurementResult {
  /**Instrument that was used to perform the measurement */
  instrument: Instrument;
  /**Results obtained from analysing the data */
  derivedProperties?: Object;
  /**Comments on the measurement */
  remarks?: HTMLString;
  /** Description of the source of the data*/
  dataSource?: DataSource;
}

export interface DataColumn {
  /* one letter shortcut for the column name in the JCAMP
   *@TJS-examples ['x', 'y', 'p']
   **/
  abbreviation: string;
  /**
   * Unit of the data in the column
   * @TJS-examples ["Pa", "kg"]
   */
  unit: string;
  /**Long name of the column
   *@TJS-examples ["absolute pressure"]
   */
  name: string;
  /**variable type, used to indicate whether the variable was changed in an experiment via the instrument/experimentator (e.g., the pressure for isotherms or the angle for xray diffraction) for if the variable depends on the changed variable */
  variableType: "DEPENDENT" | "INDEPENDENT";
  /**typescript type of the value
   * @TJS-examples [PositiveNumber]
   */
  valueType?: number | string | PositiveNumber;
}

/**
 * Specifies an attached [JCAMP-DX file](http://www.jcamp-dx.org/drafts/JCAMP6_2b%20Draft.pdf)
 */
export interface JCAMP extends DataFile {}

/**
 * Specifies metadata about an attached data file
 */
export interface DataFile extends Attachment {
  /**
   * Specifies the data class that is used for the labeled data records in the JCAMP
   */
  dataClass?:
    | "XYDATA"
    | "XYPOINTS"
    | "PEAKTABLE"
    | "ASSIGNMENTS"
    | "RADATA"
    | "NTUPLES";
  /**
   * specifies the columns and their abbreviations
   * @minItems 1
   */
  columns?: Array<DataColumn>;
}

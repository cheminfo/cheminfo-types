import { HTMLString } from "../general/HtmlString";
import { Instrument } from "../general/Instrument";
import { DataSource } from "../general/Source";
/**Generic type for the result of a measurement, e.g., a spectrum or result from a crysallographic experiment */
export interface MeasurementResult {
  /**Instrument that was used to perform the measurement */
  instrument: Instrument;
  /**Results obtained from analysing the data */
  derivedProperties?: Array<Record<string, string|number>>; //  TodDo: properly define derived propery, e.g., should always have a technique
  /**Comments on the measurement */
  remarks?: HTMLString;
  /** Description of the source of the data*/
  dataSource?: DataSource;
}

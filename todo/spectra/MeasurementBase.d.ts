import { DataSource } from '../general/DataSource';
import { HTMLString } from '../general/HtmlString';
import { Instrument } from '../general/Instrument';

/** Generic type for the result of a measurement, e.g., a spectrum or result from a crystallographic experiment */
export interface MeasurementBase {
  /** Instrument that was used to perform the measurement */
  instrument: Instrument;
  /** Description of the source of the data*/
  dataSource?: DataSource;
  /** Results obtained from analyzing the data */
  remarks?: HTMLString;
}

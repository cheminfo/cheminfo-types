import { DataSource } from '../../general/DataSource';
import { HTMLString } from '../../general/HtmlString';
import { Instrument } from '../../general/Instrument';

import { BaseDerivedProperty } from './BaseDerivedProperty';

/**Generic type for the result of a measurement, e.g., a spectrum or result from a crystallographic experiment */
export interface MeasurementResult {
  /**Instrument that was used to perform the measurement */
  instrument: Instrument;
  /**Results obtained from analysing the data */
  remarks?: HTMLString;
  /** Description of the source of the data*/
  dataSource?: DataSource;
}

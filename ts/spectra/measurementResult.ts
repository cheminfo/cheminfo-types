import { Instrument } from "../general/instrument";
import { HTMLString } from "../general/htmlString";
export interface MeasurementResult {
  instrument: Instrument;
  derivedProperties: Object;
  remarks: HTMLString;
}

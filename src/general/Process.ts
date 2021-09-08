import { Instrument } from './Instrument';
import { SoftwareApplication } from './SoftwareApplication';

export interface Process {
  description: string;
  instrument?: Instrument;
  software?: SoftwareApplication;
}

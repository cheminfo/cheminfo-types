import { Attachment } from '../../general/Attachment';

import { Variable } from './Variable';

/**
 * Specifies metadata about an attached data file
 */
export interface DataFile extends Attachment {
  /**
   * Specifies the data class that is used for the labeled data records in the JCAMP
   */
  dataClass?:
    | 'XYDATA'
    | 'XYPOINTS'
    | 'PEAKTABLE'
    | 'ASSIGNMENTS'
    | 'RADATA'
    | 'NTUPLES';
  /**
   * specifies the columns and their abbreviations
   * @minItems 1
   */
  columns?: Array<Variable>;
}

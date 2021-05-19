import { Process } from '../../general/Process';

/**
 * The purpose of this type is to allow to store some basic processing for provenance steps
 *
 * @export
 * @interface BaseDerivedProperty
 */
export interface BaseDerivedProperty {
  method?: string;
  processingSteps?: Array<Process>; // we could store here a simple description of the steps or the function calls
}

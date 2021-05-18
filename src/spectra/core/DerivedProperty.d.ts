import { Process } from '../../general/Process';
import { QuantitativeValue } from '../../general/QuantitativeValue';

export interface DerivedProperty {
  method?: string;
  processingSteps?: Array<Process>; // we could store here a simple description of the steps or the function calls
  value: QuantitativeValue;
}

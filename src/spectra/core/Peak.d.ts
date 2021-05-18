import {QuantitativeValue} from '../../general/QuantitativeValue'

import {Assignment} from './Assignment'

/**Peak extends QuantitativeValue as it is usually due to one unique transition, i.e., there is a value and we have some uncertainty as broadening */
interface Peak extends QuantitativeValue {
    assignment: Assignment;
    annotation: string
}
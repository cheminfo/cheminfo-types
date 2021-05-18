import {QuantitativeValue} from './QuantitativeValue'
export interface PositiveQuantitativeValue extends QuantitativeValue {
    /** The value of the quantitative value or property value node.
     * @TJS-examples [0, 1000, 1345.24456]
     * @minimum 0
     */
    value: number;
  }
  
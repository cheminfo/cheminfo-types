/** Value with units as https://schema.org/QuantitativeValue */
export interface QuantitytWithUnit {
  /** The value of the quantitative value or property value node.
   * @TJS-examples [0, 1000, 1345.24456, -10, -100]
   */
  value: number;
  /** The unit of the value
   * @TJS-examples ["g/mL", "Pa", "m^3"]
   */
  unit: string;
  /** The lower value of some characteristic or property.*/
  minValue: number;
  /** The upper value of some characteristic or property.*/
  maxValue: number;
}

/** Positive number with unit */
export interface PositiveQuantitytWithUnit extends QuantitytWithUnit {
  /** The value of the quantitative value or property value node.
   * @TJS-examples [0, 1000, 1345.24456]
   * @minimum 0
   */
  value: number;
}

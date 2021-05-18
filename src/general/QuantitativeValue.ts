
/** Value with units as https://schema.org/QuantitativeValue */
export interface QuantitativeValue {
  /** The value of the quantitative value or property value node.
   * @TJS-examples [0, 1000, 1345.24456, -10, -100]
  */
  value: number;
  /** The lower value of some uncertainty distribution of a characteristic or property.*/
  minValue?: number;
  /** The upper value of some uncertainty distribution of a characteristic or property.*/
  maxValue?: number;
  /** The standard of some uncertainty distribution of a characteristic or property.*/
  standardDeviation?: number;
  /**A string or text indicating the unit of measurement. Useful if you cannot provide a standard unit code for unitCode. */
  unitText?: string; // ToDo I would like to enforce that we either need unitText or unitCode and set it explicelty to no unit (e.g., empty string) if there is no unit
  /**The unit of measurement given using the UN/CEFACT Common Code (3 characters) or a URL. Other codes than the UN/CEFACT Common Code may be used with a prefix followed by a colon. */
  unitCode?: string;
}


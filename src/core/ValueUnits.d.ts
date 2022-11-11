/** Value with units */
export interface ValueUnits {
  /** The value of the quantitative value or property value node.
   * @TJS-examples [0, 1000, 1345.24456, -10, -100]
   */
  value: number;
  /** Number of significative digits */
  precision?: number;
  /**A string or text indicating the unit of measurement. The unit could be validated in the input form based on the UN/CEFACT Common Code list */
  units?: string;
}

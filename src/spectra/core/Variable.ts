export interface Variable {
  /**
   * Unit of the data in the column
   * @TJS-examples ["Pa", "kg"]
   */
  units: string;
  /**Long name of the column
   *@TJS-examples ["absolute pressure"]
   */
  label: string;
  /**variable type, used to indicate whether the variable was changed in an experiment via the instrument/experimentator (e.g., the pressure for isotherms or the angle for xray diffraction) for if the variable depends on the changed variable */
  variableType: 'DEPENDENT' | 'INDEPENDENT';
  /**typescript type of the value
   * @TJS-examples [PositiveNumber]
   */
  valueType?: number | string;
}

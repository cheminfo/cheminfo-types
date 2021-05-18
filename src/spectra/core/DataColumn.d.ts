import { PositiveQuantitativeValue } from '../../general/PositiveQuantitativeValue';

export interface DataColumn {
  /* one letter shortcut for the column name in the JCAMP
   *@TJS-examples ['x', 'y', 'p']
   **/
  abbreviation: string;
  /**
   * Unit of the data in the column
   * @TJS-examples ["Pa", "kg"]
   */
  unit: string;
  /**Long name of the column
   *@TJS-examples ["absolute pressure"]
   */
  name: string;
  /**variable type, used to indicate whether the variable was changed in an experiment via the instrument/experimentator (e.g., the pressure for isotherms or the angle for xray diffraction) for if the variable depends on the changed variable */
  variableType: 'DEPENDENT' | 'INDEPENDENT';
  /**typescript type of the value
   * @TJS-examples [PositiveNumber]
   */
  valueType?: number | string | PositiveQuantitativeValue;
}

import { Variable } from '../core/Variable';

export const IsothermDefaultColumns: Array<Variable> = [
  {
    abbreviation: 'x',
    unit: 'Pa',
    /**IUPAC P04819*/
    name: 'absolute pressure',
    variableType: 'INDEPENDENT',
  },
  {
    abbreviation: 'y',
    unit: 'g/kg',
    name: 'excess uptake',
    variableType: 'DEPENDENT',
  },
  {
    abbreviation: 'p',
    unit: '',
    name: 'relative pressure',
    variableType: 'INDEPENDENT',
  },
];

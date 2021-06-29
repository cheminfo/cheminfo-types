import { Variable } from '../core/Variable';

export const PxrdDefaultColumns: Array<Variable> = [
  {
    abbreviation: 'x',
    unit: '°',
    /**twice the Bragg angle*/
    name: '2θ',
    variableType: 'INDEPENDENT',
  },
  {
    abbreviation: 'y',
    unit: '',
    name: 'intensity',
    variableType: 'DEPENDENT',
  },
];

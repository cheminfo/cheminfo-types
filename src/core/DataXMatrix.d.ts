import type { NumberArray } from './NumberArray';
import type { NumberMatrix } from './NumberMatrix';

export interface DataXMatrix<
  DataType extends NumberArray = NumberArray,
  MatrixType extends NumberMatrix = NumberMatrix,
> {
  x: DataType;
  matrix: MatrixType;
}

// import type { RegressionScore } from 'ml-regression-base';
import { CalculationLimits } from "./CalculationLimits";

interface RegressionScore {
  r: number;
  r2: number;
  chi2: number;
  rmsd: number;
}

export interface Slope extends CalculationLimits {
  slope: number;
  score: RegressionScore;
  units?: string;
}

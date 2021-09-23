import { Variable } from '../../core/SpectrumVariable';

interface relativePressureUptake {
  r: Variable;
  u: Variable;
}

interface absolutePressureUptake {
  p: Variable;
  u: Variable;
}

export type GasAdsorptionIsothermVariables =
  | relativePressureUptake
  | absolutePressureUptake;

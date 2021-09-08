import {Variable} from '../core/Variable'

interface relativePressureUptake {
    r: Variable;
    u: Variable;
}

interface absolutePressureUptake {
    p: Variable;
    u: Variable;
}

export type GasAdsorptionIsothermVariables = relativePressureUptake | absolutePressureUptake
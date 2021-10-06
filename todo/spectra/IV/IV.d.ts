import { MeasurementBase } from '../MeasurementBase';
import { MeasurementVariable, Value } from '../../../src'
import { BaseDerivedProperty } from '../core/BaseDerivedProperty';
import { ValueXY } from '../../general/ValueXY';
import { Slope } from '../../general/Slope';
import { Integral } from '../../general/Integral';
import { VariablesRecord } from '../../utils/VariablesRecord';

export interface IV extends MeasurementBase {
  settings?: {
    /** Area to calculate the density values */
    surfaceArea?: Value
  }
  derived?: {
    thresholdVoltage?: ValueXY;
    subthresholdSlope?: Slope;
    resistanceOn?: Slope;
    capacitanceIntegral?: Integral;
    meta?: Record<string, BaseDerivedProperty>;
  };

  variables: VariablesRecord<MeasurementVariable>;
}

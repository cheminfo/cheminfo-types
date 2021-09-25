import { Value } from '../../general/Value';
import { BaseDerivedProperty } from '../core/BaseDerivedProperty';
export interface TGASettings {
  sampleHolder: {
    kind: string;
    mass: Value;
    material?: string;
  };
  sampleMass: Value;
  meta?: Record<string, BaseDerivedProperty>; //  TodDo: properly define derived property, e.g., should always have a technique
}

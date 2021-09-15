import { Value } from '../../general/Value';

export interface TGAZone {
  /** a positive value that corresponds to the fraction of the weigth that is loss in the zone */
  relativeWeightLoss?: number;
  /** a positive value that corresponds to the absolute weigth that is loss in the zone */
  weightLoss?: Value;
  from: { x: Value; y: Value; t: Value; p: Value };
  to: { x: Value; y: Value; t: Value; p: Value };
  inflectionPoint?: { x: Value; y: Value; t: Value; p: Value };
  middlePoint?: { x: Value; y: Value; t: Value; p: Value };
}

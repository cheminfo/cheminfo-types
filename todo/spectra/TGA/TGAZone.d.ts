import { Value } from '../../general/Value';

export interface TGAZone {
  /** a positive value that corresponds to the fraction of the weigth that is loss in the zone */
  relativeMassLoss?: number;
  /** a positive value that corresponds to the absolute weigth that is loss in the zone */
  massLoss?: Value;
  from: { x: Value; y: Value; t: Value; p: Value; index: number };
  to: { x: Value; y: Value; t: Value; p: Value; index: number };
  inflectionPoint?: { x: Value; y: Value; t: Value; p: Value; index: number };
  middlePoint?: { x: Value; y: Value; t: Value; p: Value; index: number };
}

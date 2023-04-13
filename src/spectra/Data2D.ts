export interface MinMaxContent {
  z: Float64Array[];
  minZ: number;
  maxZ: number;
  minY: number;
  maxY: number;
  minX: number;
  maxX: number;
}

export type Data2D =  Data2DFid | Data2DFt;

export interface Data2DFid {
  re: MinMaxContent;
  im?: MinMaxContent;
}

export interface Data2DFt {
  rr: MinMaxContent;
  ri?: MinMaxContent;
  ir?: MinMaxContent;
  ii?: MinMaxContent;
}
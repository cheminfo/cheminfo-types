export interface NmrData2DContent {
  z: Float64Array[];
  minZ: number;
  maxZ: number;
  minY: number;
  maxY: number;
  minX: number;
  maxX: number;
}

export type NmrData2D = NmrData2DFid | NmrData2DFt;

export interface NmrData2DFidReIm {
  re: NmrData2DContent;
  im: NmrData2DContent;
}

export interface NmrData2DFid {
  re: NmrData2DContent;
  im?: NmrData2DContent;
}

export interface NmrData2DFt {
  rr: NmrData2DContent;
  ri?: NmrData2DContent;
  ir?: NmrData2DContent;
  ii?: NmrData2DContent;
}

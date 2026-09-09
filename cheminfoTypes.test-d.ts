import { pino } from 'pino';
import { expectAssignable } from 'tsd';

import type { Logger, DataXY, DataXYs } from '.';

expectAssignable<Logger>(pino());

expectAssignable<DataXY>({
  x: new Float32Array(),
  y: new Float32Array(),
});

expectAssignable<DataXYs>({
  x: new Float64Array(),
  ys: [new Float64Array(), new Float64Array()],
});

expectAssignable<DataXYs<number[]>>({
  x: [1, 2],
  ys: [
    [1, 2],
    [3, 4],
  ],
});

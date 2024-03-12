import { pino } from 'pino';
import { expectAssignable } from 'tsd';

import type { Logger, DataXY } from '.';

expectAssignable<Logger>(pino());

expectAssignable<DataXY>({
  x: new Float32Array(),
  y: new Float32Array(),
});

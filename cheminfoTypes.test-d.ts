import { pino } from 'pino';
import { expectAssignable } from 'tsd';

import type { Logger } from '.';

expectAssignable<Logger>(pino());

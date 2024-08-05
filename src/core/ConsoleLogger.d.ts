import { Logger } from './Logger';

/**
 * Many libraries use a logger interface to log information about the processing.
 * This logger is expected to be compatible not only with the one from the `pino` library but
 * also with the default `console`.
 * This means that the library can output logs by default to the console and the user can
 * replace it with a custom logger that implements this interface.
 */
export type ConsoleLogger = {
  [K in keyof Console & keyof Logger]: Console[K] | Logger[K];
};

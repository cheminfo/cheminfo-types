import { LightLogger } from './LightLogger';

/**
 * Many libraries use a logger interface to log information about the processing.
 * This logger is expected to be compatible with the one from the `pino` library
 */
export interface Logger extends LightLogger {
  child(bindings?: Record<string, any>): Logger;

  fatal(obj: Record<string, unknown>, message: string): void;
  fatal(message: string): void;
  fatal(error: Error): void;
  fatal(value: unknown, message?: string): void;
}

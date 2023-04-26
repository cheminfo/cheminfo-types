/**
 * Many libraries use a logger interface to log information about the processing
 * This logger is expected to be compatible with the one from the `pino` library
 */

export interface Logger {
  child(bindings?: Record<string, any>): Logger;

  trace(obj: Record<string, unknown>, message: string): void;
  trace(message: string): void;
  trace(error: Error): void;
  trace(value: unknown, message?: string): void;

  debug(obj: Record<string, unknown>, message: string): void;
  debug(message: string): void;
  debug(error: Error): void;
  debug(value: unknown, message?: string): void;

  info(obj: Record<string, unknown>, message: string): void;
  info(message: string): void;
  info(error: Error): void;
  info(value: unknown, message?: string): void;

  warn(obj: Record<string, unknown>, message: string): void;
  warn(message: string): void;
  warn(error: Error): void;
  warn(value: unknown, message?: string): void;

  error(obj: Record<string, unknown>, message: string): void;
  error(message: string): void;
  error(error: Error): void;
  error(value: unknown, message?: string): void;

  fatal(obj: Record<string, unknown>, message: string): void;
  fatal(message: string): void;
  fatal(error: Error): void;
  fatal(value: unknown, message?: string): void;
}

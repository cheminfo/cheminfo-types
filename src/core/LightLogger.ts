/**
 * Many libraries use a logger interface to log information about the processing.
 * This logger is expected to be compatible not only with the one from the `pino` library but
 * also with the default `console`.
 * This means that the library can output logs by default to the console and the user can
 * replace it with a custom logger that implements this interface.
 */
export interface LightLogger {
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
}

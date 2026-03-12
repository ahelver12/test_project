export class Logger {
  static logInfo(message: string): void {
    console.log(`[INFO] ${new Date().toISOString()} - ${message}`);
  }

  static logError(message: string, error?: Error): void {
    console.error(`[ERROR] ${new Date().toISOString()} - ${message}`, error);
  }

  static logWarning(message: string): void {
    console.warn(`[WARN] ${new Date().toISOString()} - ${message}`);
  }

  static logDebug(message: string): void {
    console.debug(`[DEBUG] ${new Date().toISOString()} - ${message}`);
  }
}

export class WaitUtil {
  static async wait(milliseconds: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  }

  static async waitForCondition(
    condition: () => boolean | Promise<boolean>,
    timeout: number = 5000,
    pollInterval: number = 500
  ): Promise<boolean> {
    const startTime = Date.now();

    while (Date.now() - startTime < timeout) {
      try {
        const result = await Promise.resolve(condition());
        if (result) return true;
      } catch {
        // Continue waiting
      }
      await this.wait(pollInterval);
    }

    return false;
  }
}

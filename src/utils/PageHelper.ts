import { Page, Locator } from '@playwright/test';
import { TIMEOUTS } from './Constants';

export class PageHelper {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async selectDropdownOption(selectLocator: string | Locator, option: string): Promise<void> {
    const locator = typeof selectLocator === 'string' ? this.page.locator(selectLocator) : selectLocator;
    await locator.selectOption(option);
  }

  async selectDropdownByLabel(selectLocator: string | Locator, label: string): Promise<void> {
    const locator = typeof selectLocator === 'string' ? this.page.locator(selectLocator) : selectLocator;
    await locator.selectOption({ label });
  }

  async selectDropdownByValue(selectLocator: string | Locator, value: string): Promise<void> {
    const locator = typeof selectLocator === 'string' ? this.page.locator(selectLocator) : selectLocator;
    await locator.selectOption({ value });
  }

  async getSelectedDropdownValue(selectLocator: string | Locator): Promise<string> {
    const locator = typeof selectLocator === 'string' ? this.page.locator(selectLocator) : selectLocator;
    return await locator.inputValue();
  }

  async uploadFile(inputLocator: string | Locator, filePath: string): Promise<void> {
    const locator = typeof inputLocator === 'string' ? this.page.locator(inputLocator) : inputLocator;
    await locator.setInputFiles(filePath);
  }

  async uploadMultipleFiles(inputLocator: string | Locator, filePaths: string[]): Promise<void> {
    const locator = typeof inputLocator === 'string' ? this.page.locator(inputLocator) : inputLocator;
    await locator.setInputFiles(filePaths);
  }

  async switchToFrame(frameSelector: string): Promise<void> {
    // Note: For frame interaction, use page.frameLocator() for queries
    // This method exists for reference but modern Playwright queries work directly on frameLocator
    const frameLocator = this.page.frameLocator(frameSelector);
    await frameLocator.locator('body').waitFor();
  }

  async acceptDialog(): Promise<void> {
    this.page.once('dialog', (dialog) => dialog.accept());
  }

  async dismissDialog(): Promise<void> {
    this.page.once('dialog', (dialog) => dialog.dismiss());
  }

  async getDialogMessage(): Promise<string> {
    let message = '';
    this.page.once('dialog', (dialog) => {
      message = dialog.message();
      dialog.dismiss();
    });
    return message;
  }

  async getClipboardText(): Promise<string> {
    // @ts-ignore - navigator exists in browser context
    return await this.page.evaluate(() => navigator.clipboard.readText());
  }

  async copyToClipboard(text: string): Promise<void> {
    await this.page.evaluate((data) => {
      // @ts-ignore - navigator exists in browser context
      navigator.clipboard.writeText(data);
    }, text);
  }

  async scrollToElement(selector: string | Locator): Promise<void> {
    const locator = typeof selector === 'string' ? this.page.locator(selector) : selector;
    await locator.scrollIntoViewIfNeeded();
  }

  async scrollToTop(): Promise<void> {
    // @ts-ignore - window exists in browser context
    await this.page.evaluate(() => window.scrollTo(0, 0));
  }

  async scrollToBottom(): Promise<void> {
    // @ts-ignore - window and document exist in browser context
    await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  }

  async getPageHeight(): Promise<number> {
    // @ts-ignore - document exists in browser context
    return await this.page.evaluate(() => document.body.scrollHeight);
  }

  async getPageWidth(): Promise<number> {
    // @ts-ignore - document exists in browser context
    return await this.page.evaluate(() => document.body.scrollWidth);
  }

  async executeScript(script: string, args?: unknown[]): Promise<unknown> {
    return await this.page.evaluate(script, args);
  }

  async waitForFunction(fn: () => boolean, timeout: number = TIMEOUTS.LONG): Promise<void> {
    await this.page.waitForFunction(fn, { timeout });
  }

  async getLocalStorage(key: string): Promise<string | null> {
    // @ts-ignore - localStorage exists in browser context
    return await this.page.evaluate((k) => localStorage.getItem(k), key);
  }

  async setLocalStorage(key: string, value: string): Promise<void> {
    // @ts-ignore - localStorage exists in browser context
    await this.page.evaluate(({ k, v }) => localStorage.setItem(k, v), { k: key, v: value });
  }

  async clearLocalStorage(): Promise<void> {
    // @ts-ignore - localStorage exists in browser context
    await this.page.evaluate(() => localStorage.clear());
  }

  async getCookie(name: string): Promise<string | undefined> {
    const cookies = await this.page.context().cookies();
    const cookie = cookies.find((c) => c.name === name);
    return cookie?.value;
  }

  async setCookie(name: string, value: string): Promise<void> {
    await this.page.context().addCookies([
      {
        name,
        value,
        url: this.page.url(),
      },
    ]);
  }

  async clearCookies(): Promise<void> {
    await this.page.context().clearCookies();
  }
}

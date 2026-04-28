import { Page, Locator } from '@playwright/test';
import { testUrls } from '../fixtures/testData';

export class BasePage {
  readonly page: Page;
  readonly logoLabel: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logoLabel = this.page.locator('#logo .sr-only');
  }

  async navigate(destination: 'home' | string): Promise<void> {
    const url = destination === 'home' ? testUrls.abebooksBaseUrl : destination;
    await this.page.goto(url);
  }

  async getTitle(): Promise<string> {
    return await this.page.title();
  }

  async getUrl(): Promise<string> {
    return this.page.url();
  }

  async isOpened(): Promise<boolean> {
    return this.page.url().startsWith('https://www.abebooks.co.uk');
  }

  async getLabelText(): Promise<string> {
    return (await this.getText(this.logoLabel)).trim();
  }

  private getLocator(selector: string | Locator): Locator {
    return typeof selector === 'string' ? this.page.locator(selector) : selector;
  }

  private async actionOnElement<T>(selector: string | Locator, action: (loc: Locator, ...args: any[]) => Promise<T>, ...args: any[]): Promise<T> {
    const loc = this.getLocator(selector);
    return await action(loc, ...args);
  }

  async getAttribute(selector: string | Locator, attribute: string): Promise<string | null> {
    return this.actionOnElement(selector, (loc, attr) => loc.getAttribute(attr), attribute);
  }

  async click(selector: string | Locator): Promise<void> {
    return this.actionOnElement(selector, (loc) => loc.click());
  }

  async fill(selector: string | Locator, text: string): Promise<void> {
    return this.actionOnElement(selector, (loc, txt) => loc.fill(txt), text);
  }

  async getText(selector: string | Locator): Promise<string> {
    return this.actionOnElement(selector, async (loc) => await loc.textContent() || '');
  }

  async isVisible(selector: string | Locator): Promise<boolean> {
    return this.actionOnElement(selector, (loc) => loc.isVisible());
  }

  async isEnabled(selector: string | Locator): Promise<boolean> {
    return this.actionOnElement(selector, (loc) => loc.isEnabled());
  }

  async waitForElement(selector: string | Locator, timeout: number = 5000): Promise<void> {
    return this.actionOnElement(selector, (loc, t) => loc.waitFor({ timeout: t }), timeout);
  }

  async screenshot(path: string): Promise<void> {
    await this.page.screenshot({ path });
  }

  async reload(): Promise<void> {
    await this.page.reload();
  }

  async goBack(): Promise<void> {
    await this.page.goBack();
  }

  async goForward(): Promise<void> {
    await this.page.goForward();
  }

  async switchToFrame(frameLocator: string): Promise<void> {
    // Note: For frame interaction, use page.frameLocator() for queries
    // This method exists for reference but modern Playwright queries work directly on frameLocator
    await this.page.frameLocator(frameLocator).locator('body').waitFor();
  }
}

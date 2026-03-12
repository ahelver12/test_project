import { Locator } from '@playwright/test';

export class BaseComponent {
  readonly locator: Locator;

  constructor(locator: Locator) {
    this.locator = locator;
  }

  async click(): Promise<void> {
    await this.locator.click();
  }

  async fill(text: string): Promise<void> {
    await this.locator.fill(text);
  }

  async getText(): Promise<string> {
    return await this.locator.textContent() || '';
  }

  async getInputValue(): Promise<string> {
    return await this.locator.inputValue();
  }

  async getAttribute(name: string): Promise<string | null> {
    return await this.locator.getAttribute(name);
  }

  async isVisible(): Promise<boolean> {
    return await this.locator.isVisible();
  }

  async isEnabled(): Promise<boolean> {
    return await this.locator.isEnabled();
  }

  async isChecked(): Promise<boolean> {
    return await this.locator.isChecked();
  }

  async check(): Promise<void> {
    await this.locator.check();
  }

  async uncheck(): Promise<void> {
    await this.locator.uncheck();
  }

  async hover(): Promise<void> {
    await this.locator.hover();
  }

  async focus(): Promise<void> {
    await this.locator.focus();
  }

  async press(key: string): Promise<void> {
    await this.locator.press(key);
  }

  async waitFor(timeout: number = 5000): Promise<void> {
    await this.locator.waitFor({ timeout });
  }

  async count(): Promise<number> {
    return await this.locator.count();
  }

  async screenshot(): Promise<void> {
    await this.locator.screenshot();
  }
}

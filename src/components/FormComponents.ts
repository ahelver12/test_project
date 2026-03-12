import { Locator } from '@playwright/test';
import { BaseComponent } from './BaseComponent';

export class Button extends BaseComponent {
  constructor(locator: Locator) {
    super(locator);
  }

  async clickButton(): Promise<void> {
    await this.click();
  }

  async isButtonEnabled(): Promise<boolean> {
    return await this.isEnabled();
  }

  async getButtonText(): Promise<string> {
    return await this.getText();
  }
}

export class TextField extends BaseComponent {
  constructor(locator: Locator) {
    super(locator);
  }

  async enterText(text: string): Promise<void> {
    await this.fill(text);
  }

  async getValue(): Promise<string> {
    return await this.getInputValue();
  }

  async clear(): Promise<void> {
    await this.fill('');
  }
}

export class Checkbox extends BaseComponent {
  constructor(locator: Locator) {
    super(locator);
  }

  async toggleCheckbox(): Promise<void> {
    await this.click();
  }

  async isCheckedStatus(): Promise<boolean> {
    return await this.isChecked();
  }
}

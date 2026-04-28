import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class SearchBooksPage extends BasePage {
  readonly logoLabel: Locator;

  constructor(page: Page) {
    super(page);
    this.logoLabel = this.page.locator('#logo .sr-only');
  }

  async openHome(): Promise<void> {
    await this.open('https://www.abebooks.co.uk/');
  }

  async isOpened(): Promise<boolean> {
    return (await this.getUrl()).startsWith('https://www.abebooks.co.uk');
  }

  async getLabelText(): Promise<string> {
    return (await this.getText(this.logoLabel)).trim();
  }
}

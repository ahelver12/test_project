import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class PreferencesPage extends BasePage {
  readonly declineButton = this.page.locator('button:has-text("Decline")');

  constructor(page: Page) {
    super(page);
  }

  async clickDecline(): Promise<void> {
    await this.click(this.declineButton);
  }
}
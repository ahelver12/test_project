import { test as baseTest, Page } from '@playwright/test';
import { BasePage } from './src/pages/BasePage';

type TestFixtures = {
  basePage: BasePage;
};

export const test = baseTest.extend<TestFixtures>({
  basePage: async ({ page }, use) => {
    const basePage = new BasePage(page);
    await use(basePage);
  },
});

export { expect } from '@playwright/test';

export class BaseTest {
  protected page!: Page;
  protected basePage!: BasePage;

  async beforeEach(): Promise<void> {
    // Common setup logic
  }

  async afterEach(): Promise<void> {
    // Common teardown logic
  }

  protected async waitForNavigation(): Promise<void> {
    await this.page.waitForNavigation();
  }

  protected async getPageTitle(): Promise<string> {
    return await this.page.title();
  }

  protected async takeScreenshot(fileName: string): Promise<void> {
    await this.page.screenshot({ path: `screenshots/${fileName}.png` });
  }
}

import { Page, expect } from '@playwright/test';

export class AssertUtil {
  static async assertUrlContains(page: Page, text: string): Promise<void> {
    expect(page.url()).toContain(text);
  }

  static async assertUrlEquals(page: Page, url: string): Promise<void> {
    expect(page.url()).toBe(url);
  }

  static async assertPageTitle(page: Page, title: string): Promise<void> {
    expect(await page.title()).toBe(title);
  }

  static async assertPageTitleContains(page: Page, text: string): Promise<void> {
    const pageTitle = await page.title();
    expect(pageTitle).toContain(text);
  }

  static async assertElementVisible(page: Page, selector: string): Promise<void> {
    const element = page.locator(selector);
    await expect(element).toBeVisible();
  }

  static async assertElementHidden(page: Page, selector: string): Promise<void> {
    const element = page.locator(selector);
    await expect(element).toBeHidden();
  }

  static async assertElementEnabled(page: Page, selector: string): Promise<void> {
    const element = page.locator(selector);
    await expect(element).toBeEnabled();
  }

  static async assertElementDisabled(page: Page, selector: string): Promise<void> {
    const element = page.locator(selector);
    await expect(element).toBeDisabled();
  }

  static async assertTextContent(page: Page, selector: string, text: string): Promise<void> {
    const element = page.locator(selector);
    await expect(element).toContainText(text);
  }

  static async assertTextEquals(page: Page, selector: string, text: string): Promise<void> {
    const element = page.locator(selector);
    expect(await element.textContent()).toBe(text);
  }

  static async assertInputValue(page: Page, selector: string, value: string): Promise<void> {
    const element = page.locator(selector);
    expect(await element.inputValue()).toBe(value);
  }

  static async assertChecked(page: Page, selector: string): Promise<void> {
    const element = page.locator(selector);
    await expect(element).toBeChecked();
  }

  static async assertUnchecked(page: Page, selector: string): Promise<void> {
    const element = page.locator(selector);
    const isChecked = await element.isChecked();
    expect(isChecked).toBe(false);
  }

  static async assertElementCount(page: Page, selector: string, count: number): Promise<void> {
    const elements = page.locator(selector);
    expect(await elements.count()).toBe(count);
  }
}

import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class DashboardPage extends BasePage {
  readonly welcomeMessage = this.page.locator('h1:has-text("Welcome")');
  readonly userGreeting = this.page.locator('[data-testid="user-greeting"]');
  readonly logoutButton = this.page.locator('button:has-text("Logout")');
  readonly settingsButton = this.page.locator('button[aria-label="Settings"]');
  readonly profileMenu = this.page.locator('[data-testid="profile-menu"]');
  readonly navigationMenu = this.page.locator('nav');

  constructor(page: Page) {
    super(page);
  }

  async isWelcomeMessageDisplayed(): Promise<boolean> {
    return await this.isVisible(this.welcomeMessage);
  }

  async getWelcomeMessage(): Promise<string> {
    return await this.getText(this.welcomeMessage);
  }

  async getUserGreeting(): Promise<string> {
    return await this.getText(this.userGreeting);
  }

  async logout(): Promise<void> {
    await this.click(this.logoutButton);
  }

  async openSettings(): Promise<void> {
    await this.click(this.settingsButton);
  }

  async openProfileMenu(): Promise<void> {
    await this.click(this.profileMenu);
  }

  async isLogoutButtonVisible(): Promise<boolean> {
    return await this.isVisible(this.logoutButton);
  }

  async isNavigationMenuVisible(): Promise<boolean> {
    return await this.isVisible(this.navigationMenu);
  }

  async navigateTo(menuItem: string): Promise<void> {
    const menuLocator = this.page.locator(`[data-testid="nav-${menuItem}"]`);
    await this.click(menuLocator);
  }
}

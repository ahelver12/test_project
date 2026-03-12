import { test, expect } from '../../BaseTest';
import { DashboardPage } from '../../src/pages/DashboardPage';
import { testUrls } from '../../src/fixtures/testData';
import { Logger } from '../../src/utils/Logger';
import { AssertUtil } from '../../src/utils/AssertUtil';

test.describe('Dashboard Tests', () => {
  let dashboardPage: DashboardPage;

  test.beforeEach(async ({ page }: { page: any }) => {
    dashboardPage = new DashboardPage(page);
    await dashboardPage.goto(testUrls.dashboardUrl);
    Logger.logInfo('Navigated to dashboard');
  });

  test('should display dashboard with welcome message', async () => {
    Logger.logInfo('Starting dashboard display test');
    
    const isWelcomeDisplayed = await dashboardPage.isWelcomeMessageDisplayed();
    expect(isWelcomeDisplayed).toBe(true);
    
    const welcomeText = await dashboardPage.getWelcomeMessage();
    expect(welcomeText.length).toBeGreaterThan(0);
    
    Logger.logInfo('Dashboard display test passed');
  });

  test('should show user greeting on dashboard', async () => {
    Logger.logInfo('Starting user greeting test');
    
    const greeting = await dashboardPage.getUserGreeting();
    expect(greeting).toBeTruthy();
    
    Logger.logInfo('User greeting test passed');
  });

  test('should display logout button', async () => {
    Logger.logInfo('Starting logout button test');
    
    const isLogoutVisible = await dashboardPage.isLogoutButtonVisible();
    expect(isLogoutVisible).toBe(true);
    
    Logger.logInfo('Logout button test passed');
  });

  test('should display navigation menu', async () => {
    Logger.logInfo('Starting navigation menu test');
    
    const isNavVisible = await dashboardPage.isNavigationMenuVisible();
    expect(isNavVisible).toBe(true);
    
    Logger.logInfo('Navigation menu test passed');
  });

  test('should navigate to different sections', async ({ page }: { page: any }) => {
    Logger.logInfo('Starting navigation test');
    
    await dashboardPage.navigateTo('profile');
    await page.waitForURL('**/profile');
    
    const currentUrl = dashboardPage.getUrl();
    expect(currentUrl).toContain('profile');
    
    Logger.logInfo('Navigation test passed');
  });
});

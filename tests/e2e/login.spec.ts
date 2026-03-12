import { test, expect } from '../../BaseTest';
import { LoginPage } from '../../src/pages/LoginPage';
import { testUsers, testUrls } from '../../src/fixtures/testData';
import { Logger } from '../../src/utils/Logger';

test.describe('Login Tests', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }: { page: any }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto(testUrls.loginUrl);
    Logger.logInfo('Navigated to login page');
  });

  test('should successfully login with valid credentials', async ({ page }: { page: any }) => {
    Logger.logInfo('Starting valid login test');
    
    await loginPage.login(testUsers.validUser.username, testUsers.validUser.password);
    await page.waitForURL(testUrls.dashboardUrl);
    
    const currentUrl = loginPage.getUrl();
    expect(currentUrl).toContain('dashboard');
    
    Logger.logInfo('Valid login test passed');
  });

  test('should display error message with invalid credentials', async () => {
    Logger.logInfo('Starting invalid credentials test');
    
    await loginPage.login(testUsers.invalidUser.username, testUsers.invalidUser.password);
    
    const isErrorVisible = await loginPage.isErrorDisplayed();
    expect(isErrorVisible).toBe(true);
    
    Logger.logInfo('Invalid credentials error test passed');
  });

  test('should have login button disabled before filling form', async () => {
    Logger.logInfo('Starting button state test');
    
    const isButtonDisabled = !(await loginPage.isEnabled(loginPage.loginButton));
    expect(isButtonDisabled).toBe(true);
    
    Logger.logInfo('Button state test passed');
  });
});

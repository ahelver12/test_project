import { test, expect } from '../../BaseTest';
import { BasePage } from '../../src/pages/BasePage';
import { Button, TextField, Checkbox } from '../../src/components/FormComponents';
import { Logger } from '../../src/utils/Logger';
import { TestDataGenerator } from '../../src/utils/TestDataGenerator';

test.describe('Form Component Tests', () => {
  let basePage: BasePage;

  test.beforeEach(async ({ page }: { page: any }) => {
    basePage = new BasePage(page);
    Logger.logInfo('Test setup completed');
  });

  test('should interact with text field component', async ({ page }: { page: any }) => {
    Logger.logInfo('Starting text field interaction test');
    
    const textFieldLocator = page.locator('input[type="text"]');
    const textField = new TextField(textFieldLocator);
    
    const randomText = TestDataGenerator.generateRandomString();
    await textField.enterText(randomText);
    
    const value = await textField.getValue();
    expect(value).toBe(randomText);
    
    Logger.logInfo('Text field interaction test passed');
  });

  test('should interact with button component', async ({ page }: { page: any }) => {
    Logger.logInfo('Starting button interaction test');
    
    const buttonLocator = page.locator('button[type="submit"]');
    const button = new Button(buttonLocator);
    
    const isEnabled = await button.isButtonEnabled();
    expect(isEnabled).toBe(true);
    
    const buttonText = await button.getButtonText();
    expect(buttonText.length).toBeGreaterThan(0);
    
    Logger.logInfo('Button interaction test passed');
  });

  test('should interact with checkbox component', async ({ page }: { page: any }) => {
    Logger.logInfo('Starting checkbox interaction test');
    
    const checkboxLocator = page.locator('input[type="checkbox"]');
    const checkbox = new Checkbox(checkboxLocator);
    
    await checkbox.toggleCheckbox();
    
    const isChecked = await checkbox.isCheckedStatus();
    expect(isChecked).toBe(true);
    
    Logger.logInfo('Checkbox interaction test passed');
  });
});

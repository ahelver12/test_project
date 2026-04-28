# QA Automation Framework

A comprehensive test automation framework built with Playwright and JavaScript/TypeScript following Page Object and Component Object patterns.

## Project Structure

```
├── src/
│   ├── pages/
│   │   ├── BasePage.ts           # Base class for all page objects
│   │   ├── SearchBooksPage.ts    # AbeBooks search page object
│   │   └── PreferencesPage.ts    # Cookie preferences page object
│   ├── components/
│   │   ├── BaseComponent.ts      # Base class for all components
│   │   └── FormComponents.ts     # Reusable form components (Button, TextField, Checkbox)
│   ├── utils/
│   │   ├── Logger.ts             # Logging utility
│   │   ├── WaitUtil.ts           # Wait and polling utility
│   │   └── TestDataGenerator.ts  # Test data generation utility
│   └── fixtures/
│       └── testData.ts           # Test data and constants
├── tests/
│   └── e2e/
│       └── searchBooks.spec.ts    # AbeBooks homepage smoke test
├── BaseTest.ts                   # Base test class with fixtures
├── playwright.config.ts          # Playwright configuration
├── package.json                  # Dependencies and scripts
└── README.md                     # This file
```

## Features

- **Page Object Pattern**: Encapsulates page elements and actions
- **Component Pattern**: Reusable component objects for common UI elements
- **Base Classes**: Centralized methods for common operations
- **Utilities**: Logger, wait functions, and test data generation
- **Fixtures**: Pre-defined test data and constants
- **Multi-browser**: Configured for Chromium, Firefox, WebKit, and Mobile Chrome
- **Screenshots & Videos**: Automatic capture on failures
- **HTML Reporting**: Detailed test reports
- **Parallel Execution**: Tests run in parallel for faster execution

## Installation

```bash
npm install
```

## Configuration

Edit `playwright.config.ts` to customize:
- Base URL (update `baseURL` in the `use` configuration)
- Browser types and devices
- Retry strategy
- Reporter options
- Web server settings

## Running Tests

```bash
# Run all tests
npm test

# Run tests in headed mode (visible browser)
npm run test:headed

# Run tests with UI mode
npm run test:ui

# Run tests in debug mode
npm run test:debug

# Run E2E tests only
npm run test:e2e

# Generate test code
npm run codegen
```

## Writing Tests

### Example Page Object

```typescript
import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class MyPage extends BasePage {
  readonly myButton = this.page.locator('button:has-text("My Button")');
  
  constructor(page: Page) {
    super(page);
  }
  
  async clickMyButton(): Promise<void> {
    await this.click(this.myButton);
  }
}
```

### Example Test

```typescript
import { test, expect } from '../BaseTest';
import { MyPage } from '../src/pages/MyPage';

test.describe('My Tests', () => {
  let myPage: MyPage;

  test.beforeEach(async ({ page }) => {
    myPage = new MyPage(page);
    await myPage.goto('https://example.com');
  });

  test('should perform action', async () => {
    await myPage.clickMyButton();
    expect(true).toBe(true);
  });
});
```

## Naming Conventions

- **Classes**: PascalCase (e.g., `SearchBooksPage`, `TextField`, `Logger`)
- **Methods**: camelCase (e.g., `clickButton()`, `fillForm()`)
- **Variables**: camelCase (e.g., `testUser`, `loginUrl`)
- **Constants**: UPPER_SNAKE_CASE (in fixtures)

## Best Practices

1. **Use Page Objects**: Don't hardcode selectors in tests
2. **Use Components**: Create reusable components for common UI patterns
3. **DRY Principle**: Use base classes to avoid code duplication
4. **Waits**: Use explicit waits instead of hard delays
5. **Logging**: Use Logger utility for debugging
6. **Test Data**: Use fixtures and TestDataGenerator for test data
7. **Assertions**: Keep assertions clear and focused
8. **Setup/Teardown**: Use beforeEach/afterEach for common operations

## Utilities

### Logger
```typescript
import { Logger } from '../src/utils/Logger';

Logger.logInfo('Test information');
Logger.logError('Error message', error);
Logger.logWarning('Warning message');
Logger.logDebug('Debug message');
```

### WaitUtil
```typescript
import { WaitUtil } from '../src/utils/WaitUtil';

await WaitUtil.wait(2000); // Wait 2 seconds
await WaitUtil.waitForCondition(() => someCondition, 5000);
```

### TestDataGenerator
```typescript
import { TestDataGenerator } from '../src/utils/TestDataGenerator';

const email = TestDataGenerator.generateRandomEmail();
const password = TestDataGenerator.generateRandomPassword(16);
const username = TestDataGenerator.generateRandomUsername('test');
```

## Troubleshooting

- **Tests fail to find elements**: Check selectors and wait times
- **Timeout errors**: Increase timeout in playwright.config.ts or use WaitUtil
- **Flaky tests**: Use explicit waits and avoid hard delays
- **Memory issues**: Reduce workers count in playwright.config.ts

## Resources

- [Playwright Documentation](https://playwright.dev)
- [Playwright API Reference](https://playwright.dev/docs/api/class-playwright)
- [Best Practices](https://playwright.dev/docs/best-practices)

## License

ISC

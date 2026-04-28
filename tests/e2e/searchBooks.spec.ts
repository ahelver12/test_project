import { test, expect } from '../../BaseTest';
import { SearchBooksPage } from '../../src/pages/SearchBooksPage';
import { testUrls, testLabels } from '../../src/fixtures/testData';

test.describe('AbeBooks Homepage', () => {
  let searchBooksPage: SearchBooksPage;

  test.beforeEach(async ({ page }: { page: any }) => {
    searchBooksPage = new SearchBooksPage(page);
    await searchBooksPage.open(testUrls.abebooksBaseUrl);
  });

  test('The user should open AbeBooks homepage and verify the AbeBooks label', async () => {
    expect(await searchBooksPage.isOpened()).toBe(true);
    expect(await searchBooksPage.getTitle()).toContain('AbeBooks');
    expect(await searchBooksPage.getLabelText()).toContain(testLabels.abebooksLogoText);
  });
});

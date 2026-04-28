import { test, expect } from '../../BaseTest';
import { SearchBooksPage } from '../../src/pages/SearchBooksPage';
import { PreferencesPage } from '../../src/pages/PreferencesPage';

test.describe('AbeBooks Tests', () => {
  let searchBooksPage: SearchBooksPage;
  let preferencesPage: PreferencesPage;

  test.beforeEach(async ({ page }: { page: any }) => {
    searchBooksPage = new SearchBooksPage(page);
    preferencesPage = new PreferencesPage(page);
  });

  test('The user should open AbeBooks homepage and verify it is opened', async () => {
    await searchBooksPage.navigate('home');
    await preferencesPage.clickDecline();
    expect(await searchBooksPage.isOpened()).toBe(true);
  });

  test('The user should find a book by search', async () => {
    await searchBooksPage.navigate('home');
    await preferencesPage.clickDecline();
    expect(await searchBooksPage.isOpened()).toBe(true);
    await searchBooksPage.fillAuthor('Arthur Conan Doyle');
    await searchBooksPage.fillTitle('The Lost World');
    await searchBooksPage.clickSearch();
    await searchBooksPage.page.waitForSelector('text=The Lost World and Other Stories (Wordsworth Classics)', { timeout: 10000 });
    expect(await searchBooksPage.page.locator('text=The Lost World and Other Stories (Wordsworth Classics)').isVisible()).toBe(true);
  });
});

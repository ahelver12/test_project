import { test, expect } from '../../BaseTest';
import { SearchBooksPage } from '../../src/pages/SearchBooksPage';
import { PreferencesPage } from '../../src/pages/PreferencesPage';

test.describe('AbeBooks Tests', () => {
  let searchBooksPage: SearchBooksPage;
  let preferencesPage: PreferencesPage;

  test.beforeEach(async ({ page }: { page: any }) => {
    searchBooksPage = new SearchBooksPage(page);
    preferencesPage = new PreferencesPage(page);
    await searchBooksPage.openHomeAndDeclinePreferences(preferencesPage);
  });

  test('The user should open AbeBooks homepage and verify it is opened', async () => {
    expect(await searchBooksPage.isOpened()).toBe(true);
  });

  test('The user should verify homepage navigation labels are shown', async () => {
    expect(await searchBooksPage.isOpened()).toBe(true);
    const visibility = await searchBooksPage.getHomePageLabelsVisibility();
    expect(visibility).toEqual({
      advancedSearch: true,
      browseCollections: true,
      rareBooks: true,
      artCollectables: true,
      textbooks: true,
      sellers: true,
      startSelling: true,
    });
  });

  test('The user should find a book by search', async () => {
    expect(await searchBooksPage.isOpened()).toBe(true);
    await searchBooksPage.performSearch('Arthur Conan Doyle', 'The Lost World');
    await searchBooksPage.page.waitForSelector('text=The Lost World and Other Stories (Wordsworth Classics)', { timeout: 10000 });
    expect(await searchBooksPage.page.locator('text=The Lost World and Other Stories (Wordsworth Classics)').isVisible()).toBe(true);
  });

  test('The user should navigate to Sellers page and verify it', async () => {
    await searchBooksPage.clickOnSellers();
    expect(await searchBooksPage.verifySellersPageOpened()).toBe(true);
    expect(await searchBooksPage.verifySellersPageLabel()).toBe(true);
  });
});

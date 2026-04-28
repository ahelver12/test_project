import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';
import { testUrls } from '../fixtures/testData';
import { PreferencesPage } from './PreferencesPage';

export class SearchBooksPage extends BasePage {
  readonly authorInput: Locator;
  readonly titleInput: Locator;
  readonly keywordInput: Locator;
  readonly searchButton: Locator;
  readonly advancedSearchLabel: Locator;
  readonly browseCollectionsLabel: Locator;
  readonly rareBooksLabel: Locator;
  readonly artCollectablesLabel: Locator;
  readonly textbooksLabel: Locator;
  readonly sellersLabel: Locator;
  readonly startSellingLabel: Locator;

  constructor(page: Page) {
    super(page);
    this.authorInput = this.page.locator('input[name="an"]');
    this.titleInput = this.page.locator('input[name="tn"]');
    this.keywordInput = this.page.locator('input[name="kn"]');
    this.searchButton = this.page.locator("//button[@type='submit' and @class='button-primary']");
    const headerSection = this.page.locator('[data-test-id="header"]');
    this.advancedSearchLabel = headerSection.locator("//li[@class='search-entry']");
    this.browseCollectionsLabel = headerSection.locator("//li[@class='collections-link']");
    this.rareBooksLabel = headerSection.locator("//li[@id='rare-books']");
    this.artCollectablesLabel = headerSection.locator("//li[@id='hdr-nbc']");
    this.textbooksLabel = headerSection.locator("//li[@id='text-books']");
    this.sellersLabel = headerSection.locator("//li[@id='hdr-sellers']");
    this.startSellingLabel = headerSection.locator("//li[@id='hdr-sell']");
  }

  async fillAuthor(text: string): Promise<void> {
    await this.fill(this.authorInput, text);
  }

  async fillTitle(text: string): Promise<void> {
    await this.fill(this.titleInput, text);
  }

  async fillKeyword(text: string): Promise<void> {
    await this.fill(this.keywordInput, text);
  }

  async clickSearch(): Promise<void> {
    await this.click(this.searchButton);
  }

  async goToAdvancedSearch(): Promise<void> {
    await this.navigate(testUrls.abebooksAdvancedSearch);
  }

  async openHomeAndDeclinePreferences(preferencesPage: PreferencesPage): Promise<void> {
    await this.navigate('home');
    await preferencesPage.clickDecline();
  }

  async performSearch(author: string, title: string): Promise<void> {
    await this.fillAuthor(author);
    await this.fillTitle(title);
    await this.clickSearch();
  }

  async getHomePageLabelsVisibility(): Promise<Record<string, boolean>> {
    return {
      advancedSearch: await this.isVisible(this.advancedSearchLabel),
      browseCollections: await this.isVisible(this.browseCollectionsLabel),
      rareBooks: await this.isVisible(this.rareBooksLabel),
      artCollectables: await this.isVisible(this.artCollectablesLabel),
      textbooks: await this.isVisible(this.textbooksLabel),
      sellers: await this.isVisible(this.sellersLabel),
      startSelling: await this.isVisible(this.startSellingLabel),
    };
  }
}


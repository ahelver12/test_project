import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';
import { testUrls } from '../fixtures/testData';
import { PreferencesPage } from './PreferencesPage';

export class SearchBooksPage extends BasePage {
  readonly authorInput: Locator;
  readonly titleInput: Locator;
  readonly keywordInput: Locator;
  readonly searchButton: Locator;

  constructor(page: Page) {
    super(page);
    this.authorInput = this.page.locator('input[name="an"]');
    this.titleInput = this.page.locator('input[name="tn"]');
    this.keywordInput = this.page.locator('input[name="kn"]');
    this.searchButton = this.page.locator("//button[@type='submit' and @class='button-primary']");
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
}

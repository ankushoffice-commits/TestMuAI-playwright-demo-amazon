import { BasePage } from './BasePage';

export class HomePage extends BasePage {

    async goto() {
        await this.browser.goto('https://www.amazon.in/');
    }

  welcomeText() {
    return this.browser.getByRole('link', { name: 'Amazon.in' });
  }

  searchBox() {
    return this.browser.getByPlaceholder('Search Amazon.in');
  }

  searchButton() {
    return this.browser.locator('#nav-search-submit-button');
  }
}
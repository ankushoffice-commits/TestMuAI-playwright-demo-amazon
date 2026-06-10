import { BasePage } from './BasePage';

export class SearchResults extends BasePage {

  ResultsText() {
    return this.browser.locator('h2', { hasText: 'Results'}).first();
  }

  firstResult(searchText: string) {
    return this.browser.getByRole('listitem').filter({ hasText: searchText }).first();
  }

  addToCartButton(searchText: string) {
    return this.firstResult(searchText).locator('[id^="a-autoid-"][id$="-announce"]');
  }

  navigateCart() {
    return this.browser.getByRole('link', { name: 'item in cart' });
  }

  subtotal() {
    return this.browser.locator('#sc-subtotal-amount-buybox');
  }
}
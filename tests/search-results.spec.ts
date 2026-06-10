import { HomePage } from '../pages/HomePage';
import { SearchResults } from '../pages/SearchResults';
import { expect, test } from '@playwright/test';

test('Test Case 1', async ({ browser }) => {


    const searchText = 'iPhone';

  const context = await browser.newContext();
  const screen = await context.newPage();
  const home = new HomePage(screen);
  await home.goto();

  await home.welcomeText().waitFor({ state: 'visible' });

    // await home.waitforNetworkIdle();

  const visible = await home.welcomeText().isVisible();
  expect(visible).toBe(true);
    await home.searchBox().fill(searchText);
    await home.searchButton().click();

    const search = new SearchResults(screen);

    await search.ResultsText().waitFor({ state: 'visible' });

    await search.firstResult(searchText).waitFor({ state: 'visible' });

    const firstResultVisible = await search.firstResult(searchText).isVisible();
    expect(firstResultVisible).toBe(true);

    await search.addToCartButton(searchText).click();

    await search.navigateCart().click();

    const price = await search.subtotal().innerText();

    console.log('The price of the iPhone is: ' + price);

});

test('Test Case 2', async ({ browser }) => {


    const searchText = 'Galaxy';

  const context = await browser.newContext();
  const screen = await context.newPage();
  const home = new HomePage(screen);
  await home.goto();

  await home.welcomeText().waitFor({ state: 'visible' });

    // await home.waitforNetworkIdle();

  const visible = await home.welcomeText().isVisible();
  expect(visible).toBe(true);
    await home.searchBox().fill(searchText);
    await home.searchButton().click();

    const search = new SearchResults(screen);

    await search.ResultsText().waitFor({ state: 'visible' });

    await search.firstResult(searchText).waitFor({ state: 'visible' });

    const firstResultVisible = await search.firstResult(searchText).isVisible();
    expect(firstResultVisible).toBe(true);
    
    await search.addToCartButton(searchText).waitFor({ state: 'visible' });

    await search.addToCartButton(searchText).click({ delay: 1000 });

    await search.navigateCart().dblclick();

    const price = await search.subtotal().innerText();

    console.log('The price of the Galaxy is: ' + price);

});
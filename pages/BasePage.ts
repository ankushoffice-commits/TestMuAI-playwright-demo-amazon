export class BasePage {
  readonly browser: any;
  constructor(browser: any) {
    this.browser = browser;
  }

  async waitForVisible(text: string) {
    await this.browser.getByText(text).waitFor({ state: 'visible' });
  }

  async waitforNetworkIdle() {
    await this.browser.waitForLoadState('networkidle');
  }
}

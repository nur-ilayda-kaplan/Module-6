const { browser } = require('@wdio/globals');
const Logger = require('../utils/Logger');

/**
 * Base Page Object class that provides common functionality
 * for all page objects. This is part of the core layer and
 * is not project-specific.
 */
class BasePage {
  /**
   * Opens a sub page of the page
   * @param {string} path - path of the sub page (e.g. /path/to/page.html)
   * @returns {Promise<void>}
   */
  async open(path) {
    const url = `https://the-internet.herokuapp.com/${path}`;
    Logger.info(`Navigating to: ${url}`);
    return browser.url(url);
  }

  /**
   * Gets the current page URL
   * @returns {Promise<string>}
   */
  async getCurrentUrl() {
    return browser.getUrl();
  }

  /**
   * Gets the page title
   * @returns {Promise<string>}
   */
  async getTitle() {
    return browser.getTitle();
  }

  /**
   * Waits for page to load
   * @param {number} timeout - timeout in milliseconds
   * @returns {Promise<void>}
   */
  async waitForPageLoad(timeout = 10000) {
    await browser.waitUntil(
      async () => {
        const state = await browser.execute(() => document.readyState);
        return state === 'complete';
      },
      {
        timeout,
        timeoutMsg: 'Page did not load within timeout'
      }
    );
  }

  /**
   * Checks if current URL contains the given path
   * @param {string} path - path to check
   * @returns {Promise<boolean>}
   */
  async isUrlContaining(path) {
    const currentUrl = await this.getCurrentUrl();
    return currentUrl.includes(path);
  }
}

module.exports = BasePage;


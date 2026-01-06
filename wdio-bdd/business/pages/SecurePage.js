const { $ } = require('@wdio/globals');
const BasePage = require('../../core/base/BasePage');
const Logger = require('../../core/utils/Logger');

/**
 * Secure Page Object that extends BasePage.
 * This is part of the business layer and contains
 * functionality specific to the secure area page.
 */
class SecurePage extends BasePage {
  /**
   * Define selectors using getter methods
   */
  get flashAlert() {
    return $('#flash');
  }

  get logoutButton() {
    return $('a[href="/logout"]');
  }

  /**
   * Gets the flash message text
   * @returns {Promise<string>}
   */
  async getFlashMessage() {
    Logger.debug('Getting flash message text');
    return this.flashAlert.getText();
  }

  /**
   * Checks if flash message contains the expected text
   * @param {string} expectedText - expected text to check
   * @returns {Promise<boolean>}
   */
  async isFlashMessageContaining(expectedText) {
    const flashText = await this.getFlashMessage();
    return flashText.includes(expectedText);
  }

  /**
   * Performs logout action
   * @returns {Promise<void>}
   */
  async logout() {
    Logger.info('Logging out');
    await this.logoutButton.click();
  }
}

module.exports = new SecurePage();


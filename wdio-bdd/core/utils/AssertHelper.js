const { expect } = require('@wdio/globals');
const { assert, expect: chaiExpect } = require('chai');
const Logger = require('./Logger');

/**
 * Assert helper utility that provides common assertion methods.
 * This is part of the core layer and is not project-specific.
 */
class AssertHelper {
  /**
   * Asserts that element exists
   * @param {WebdriverIO.Element} element - element to check
   * @param {string} message - assertion message
   * @returns {Promise<void>}
   */
  static async assertElementExists(element, message = 'Element should exist') {
    Logger.debug(`Asserting element exists: ${message}`);
    await expect(element).toBeExisting();
    const exists = await element.isExisting();
    assert.isTrue(exists, message);
  }

  /**
   * Asserts that element is displayed
   * @param {WebdriverIO.Element} element - element to check
   * @param {string} message - assertion message
   * @returns {Promise<void>}
   */
  static async assertElementDisplayed(element, message = 'Element should be displayed') {
    Logger.debug(`Asserting element displayed: ${message}`);
    await expect(element).toBeDisplayed();
    const displayed = await element.isDisplayed();
    assert.isTrue(displayed, message);
  }

  /**
   * Asserts that element contains text
   * @param {WebdriverIO.Element} element - element to check
   * @param {string} expectedText - expected text
   * @param {string} message - assertion message
   * @returns {Promise<void>}
   */
  static async assertElementContainsText(element, expectedText, message = null) {
    const defaultMessage = `Element should contain text: ${expectedText}`;
    Logger.debug(`Asserting element contains text: ${defaultMessage}`);
    
    await expect(element).toHaveText(expect.stringContaining(expectedText));
    
    const actualText = await element.getText();
    chaiExpect(actualText).to.include(expectedText, message || defaultMessage);
  }

  /**
   * Asserts that URL contains the given path
   * @param {string} url - current URL
   * @param {string} path - path to check
   * @param {string} message - assertion message
   * @returns {Promise<void>}
   */
  static assertUrlContains(url, path, message = null) {
    const defaultMessage = `URL should contain '${path}', but got: ${url}`;
    Logger.debug(`Asserting URL contains path: ${defaultMessage}`);
    assert.include(url, path, message || defaultMessage);
  }

  /**
   * Asserts that a boolean value is true
   * @param {boolean} value - value to check
   * @param {string} message - assertion message
   * @returns {void}
   */
  static assertTrue(value, message = 'Value should be true') {
    Logger.debug(`Asserting true: ${message}`);
    assert.isTrue(value, message);
  }
}

module.exports = AssertHelper;


const Logger = require('../utils/Logger');

/**
 * Base Element wrapper class that provides common functionality
 * for web elements. This is part of the core layer and is not
 * project-specific.
 */
class BaseElement {
  /**
   * Creates a new BaseElement instance
   * @param {WebdriverIO.Element} element - WebdriverIO element
   */
  constructor(element) {
    this.element = element;
  }

  /**
   * Clicks on the element
   * @returns {Promise<void>}
   */
  async click() {
    Logger.debug(`Clicking on element: ${this.element.selector}`);
    await this.element.click();
  }

  /**
   * Sets a value in the element
   * @param {string} value - value to set
   * @returns {Promise<void>}
   */
  async setValue(value) {
    Logger.debug(`Setting value on element: ${this.element.selector}`);
    await this.element.setValue(value);
  }

  /**
   * Gets the text content of the element
   * @returns {Promise<string>}
   */
  async getText() {
    return this.element.getText();
  }

  /**
   * Checks if element is displayed
   * @returns {Promise<boolean>}
   */
  async isDisplayed() {
    return this.element.isDisplayed();
  }

  /**
   * Checks if element exists
   * @returns {Promise<boolean>}
   */
  async isExisting() {
    return this.element.isExisting();
  }

  /**
   * Waits for element to be displayed
   * @param {number} timeout - timeout in milliseconds
   * @returns {Promise<void>}
   */
  async waitForDisplayed(timeout = 10000) {
    Logger.debug(`Waiting for element to be displayed: ${this.element.selector}`);
    await this.element.waitForDisplayed({ timeout });
  }

  /**
   * Waits for element to exist
   * @param {number} timeout - timeout in milliseconds
   * @returns {Promise<void>}
   */
  async waitForExist(timeout = 10000) {
    Logger.debug(`Waiting for element to exist: ${this.element.selector}`);
    await this.element.waitForExist({ timeout });
  }

  /**
   * Gets the underlying WebdriverIO element
   * @returns {WebdriverIO.Element}
   */
  getElement() {
    return this.element;
  }
}

module.exports = BaseElement;


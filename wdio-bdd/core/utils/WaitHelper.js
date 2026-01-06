const { browser } = require('@wdio/globals');
const Logger = require('./Logger');

/**
 * Wait helper utility for common wait operations.
 * This is part of the core layer and is not project-specific.
 */
class WaitHelper {
  /**
   * Waits for a condition to be true
   * @param {Function} condition - condition function that returns a boolean
   * @param {number} timeout - timeout in milliseconds
   * @param {string} timeoutMsg - timeout message
   * @returns {Promise<void>}
   */
  static async waitForCondition(condition, timeout = 10000, timeoutMsg = 'Condition not met') {
    Logger.debug(`Waiting for condition with timeout: ${timeout}ms`);
    await browser.waitUntil(condition, { timeout, timeoutMsg });
  }

  /**
   * Waits for a specific amount of time
   * @param {number} ms - milliseconds to wait
   * @returns {Promise<void>}
   */
  static async wait(ms) {
    Logger.debug(`Waiting for ${ms}ms`);
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  /**
   * Waits for page to be loaded
   * @param {number} timeout - timeout in milliseconds
   * @returns {Promise<void>}
   */
  static async waitForPageLoad(timeout = 10000) {
    Logger.debug('Waiting for page to load');
    await this.waitForCondition(
      async () => {
        const state = await browser.execute(() => document.readyState);
        return state === 'complete';
      },
      timeout,
      'Page did not load within timeout'
    );
  }
}

module.exports = WaitHelper;


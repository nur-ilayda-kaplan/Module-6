const LoginPage = require('../pages/LoginPage');
const SecurePage = require('../pages/SecurePage');
const AssertHelper = require('../../core/utils/AssertHelper');
const Logger = require('../../core/utils/Logger');

/**
 * Login Actions class that contains business logic flows
 * for login-related operations. This is part of the business layer.
 */
class LoginActions {
  /**
   * Performs complete login flow
   * @param {string} username - username to login with
   * @param {string} password - password to login with
   * @returns {Promise<void>}
   */
  static async performLogin(username, password) {
    Logger.info(`Performing login action for user: ${username}`);
    
    // Verify login form is present
    const isFormPresent = await LoginPage.isLoginFormPresent();
    AssertHelper.assertTrue(isFormPresent, 'Login form should be present');
    
    // Perform login
    await LoginPage.login(username, password);
  }

  /**
   * Verifies flash message after login attempt
   * @param {string} expectedMessage - expected flash message
   * @returns {Promise<void>}
   */
  static async verifyFlashMessage(expectedMessage) {
    Logger.info(`Verifying flash message contains: ${expectedMessage}`);
    
    await AssertHelper.assertElementDisplayed(
      SecurePage.flashAlert,
      'Flash alert should be displayed'
    );
    
    await AssertHelper.assertElementContainsText(
      SecurePage.flashAlert,
      expectedMessage,
      `Flash message should contain: ${expectedMessage}`
    );
  }

  /**
   * Verifies that user is on login page
   * @returns {Promise<void>}
   */
  static async verifyOnLoginPage() {
    Logger.info('Verifying user is on login page');
    const currentUrl = await LoginPage.getCurrentUrl();
    AssertHelper.assertUrlContains(currentUrl, '/login', 'Should be on login page');
  }
}

module.exports = LoginActions;


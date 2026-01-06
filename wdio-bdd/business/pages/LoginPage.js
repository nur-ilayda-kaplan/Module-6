const { $ } = require('@wdio/globals');
const BasePage = require('../../core/base/BasePage');
const Logger = require('../../core/utils/Logger');

/**
 * Login Page Object that extends BasePage.
 * This is part of the business layer and contains
 * functionality specific to the login page.
 */
class LoginPage extends BasePage {
  /**
   * Define selectors using getter methods
   */
  get inputUsername() {
    return $('#username');
  }

  get inputPassword() {
    return $('#password');
  }

  get btnSubmit() {
    return $('button[type="submit"]');
  }

  /**
   * Performs login action with username and password
   * @param {string} username - username to login with
   * @param {string} password - password to login with
   * @returns {Promise<void>}
   */
  async login(username, password) {
    Logger.info(`Logging in with username: ${username}`);
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
  }

  /**
   * Opens the login page
   * @returns {Promise<void>}
   */
  async open() {
    return super.open('login');
  }

  /**
   * Verifies that login form elements are present
   * @returns {Promise<boolean>}
   */
  async isLoginFormPresent() {
    const usernameExists = await this.inputUsername.isExisting();
    const passwordExists = await this.inputPassword.isExisting();
    const submitExists = await this.btnSubmit.isExisting();
    
    return usernameExists && passwordExists && submitExists;
  }
}

module.exports = new LoginPage();


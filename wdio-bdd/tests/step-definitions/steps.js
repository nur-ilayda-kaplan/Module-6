const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../../../business/pages/LoginPage');
const SecurePage = require('../../../business/pages/SecurePage');
const LoginActions = require('../../../business/actions/LoginActions');
const AssertHelper = require('../../../core/utils/AssertHelper');

/**
 * Step definitions for Cucumber BDD tests.
 * This is part of the tests layer.
 */

Given(/^I am on the login page$/, async () => {
  await LoginPage.open();
  await LoginActions.verifyOnLoginPage();
});

When(/^I login with (.+) and (.+)$/, async (username, password) => {
  await LoginActions.performLogin(username, password);
});

Then(/^I should see a flash message saying (.+)$/, async (message) => {
  await LoginActions.verifyFlashMessage(message);
});


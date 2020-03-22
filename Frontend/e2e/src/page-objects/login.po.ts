/*
 * Use the Page Object pattern to define the page under test.
 * See docs/coding-guide/e2e-tests.md for more info.
 */

import { browser, element, by } from "protractor";

export class LoginPage {
  userNameField = element(by.css('input[formControlName="userName"]'));
  passwordField = element(by.css('input[formControlName="password"]'));
  loginButton = element(by.css('button[type="submit"]'));

  async login() {
    await this.userNameField.sendKeys("test");
    await this.passwordField.sendKeys("123");
    await this.loginButton.click();
  }
}

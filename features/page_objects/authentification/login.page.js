const BasePage = require('../base.page');
class LoginPage extends BasePage {
    constructor() {
        super();
    }

    get titleLogin() {
        return browser.$('//h1[text()="Login"]');
    }

    async waitForLoad() {
        await this.titleLogin.waitForDisplayed();
        await this.inputEmail.waitForDisplayed();
        await this.inputPassword.waitForDisplayed();
        await this.linkForgotPassword.waitForDisplayed();
        await this.buttonLogin.waitForDisplayed();
        await this.checkboxRememberMe.waitForDisplayed();
        await this.linkNewCustomer.waitForDisplayed();
    }

    get inputEmail() {
        return browser.$('//input[@id = "email"]');
    }

    get inputPassword() {
        return browser.$('//input[@id = "password"]');
    }

    get inputRepeatPassword() {
        return browser.$('//input[@id = "newPasswordRepeat"]');
    }

    get linkForgotPassword() {
        return browser.$('//a[@class="primary-link forgot-pw"]');
    }

    get inputSecurityAnswer() {
        return browser.$('//input[@id = "securityAnswer"]');
    }

    get inputNewPassword() {
        return browser.$('//input[@id = "newPassword"]');
    }

    get buttonChange() {
        return browser.$('//button[@id = "resetButton"]');
    }

    get buttonLogin() {
        return browser.$('//button[@id="loginButton"]');
    }
    
    get checkboxRememberMe() {
        return browser.$('//span[@class="mat-checkbox-label"]');
    }

    get linkNewCustomer() {
        return browser.$('//div[@id="newCustomerLink"]');
    }

    get textInvalidPassowrd() {
        return browser.$('//div[@class= "error ng-star-inserted"]');
    }

    get textPasswordChanged() {
        return browser.$('//div[@class = "confirmation"]');
    }

    async waitForLoad() {
        await this.titleLogin.waitForDisplayed();
        await this.inputEmail.waitForDisplayed();
        await this.inputPassword.waitForDisplayed();
        await this.linkForgotPassword.waitForDisplayed();
        await this.buttonLogin.waitForDisplayed();
        await this.checkboxRememberMe.waitForDisplayed();
        await this.linkNewCustomer.waitForDisplayed();
    }

    get buttonLogout() {
        return browser.$('//button[@id="navbarLogoutButton"]');
    }

    get inputSecurityQuestion() {
        return browser.$('//input[@id = "securityAnswer"]');
    }

    async securityQuestion(name) {
        return browser.$(`//*[@class = "mat-simple-snack-bar-content"][contains(text(), "${name}")][contains(text(), "to basket")]`);
    }

    async seeSecurityQuestion(question) {
        return browser.$(`//input[contains(@placeholder, "${question}")] `);
    }


    //mat-expansion-panel[contains(@class, "mat-expansion-panel")]//div[contains(@class, "mat-form-field-infix")]//input[@type = "text"]


}

module.exports = LoginPage;
const BasePage = require('../base.page');
class LoginPage extends BasePage {
    constructor() {
        super();
    }

    get titleLogin() {
        return browser.$('//h1[text()="Login"]');
    }

    get inputEmail() {
        return browser.$('//input[@id = "email"]');
    }

    get inputPassword() {
        return browser.$('//input[@id = "password"]');
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
        return browser.$('//button[@id = "resetButton"]'); //vajag apaksklasi
    }

    get buttonLogin() {
        return browser.$('//button[@id="loginButton"]');
    }

/*     get checkboxRememberMe() {
        // return browser.$('//label[@for="rememberMe-input"]'); // xpath
        return browser.$('label[for="rememberMe-input"]'); // css
    } */

    get linkNewCustomer() {
        return browser.$('//div[@id="newCustomerLink"]/a[@class="primary-link"]');
    }

    get textInvalidPassowrd() {
        return browser.$('//div[@class= "error ng-star-inserted"]');
    }

    async waitForLoad() {
        await this.title.waitForDisplayed();
        await this.inputEmail.waitForDisplayed();
        await this.inputPassword.waitForDisplayed();
        await this.linkForgotPassword.waitForDisplayed();
        await this.buttonLogin.waitForDisplayed();
        await this.checkboxRememberMe.waitForDisplayed();
        await this.linkRegister.waitForDisplayed();
    }

    get buttonLogout() {
        return browser.$('//button[@id="navbarLogoutButton"]');
    }

}

module.exports = LoginPage;
const BasePage = require('../base.page');

class RegisterPage extends BasePage {
    constructor() {
        super();
    }

    get titleUserRegistration() {
        return browser.$('//h1[text()="User Registration"]');
    }

    get newCustomer() {
        return browser.$('//div[@id="newCustomerLink"]');
    }

    get inputEmail() {
        return browser.$('//input[@id="emailControl"]');
    }

    get inputPassword() {
        return browser.$('//input[@id="passwordControl"]');
    }

    get inputPasswordConfirm() {
        return browser.$('//input[@id="repeatPasswordControl"]');
    }

    get switchShowPasswordAdvice() {
        return browser.$('//span[text()="Show password advice"]');
    }

    get selectionSecurityQuestion() {
        return browser.$('//mat-select[@name="securityQuestion"]');
    }

    async securityQuestionOption(question) { //function that allows to choose security question
        return browser.$(`//div[@role="listbox"]//span[@class= "mat-option-text"][contains(text(), "${question}")]`);
    }

    get inputAnswer() {
        return browser.$('//input[@id="securityAnswerControl"]');
    }

    get buttonRegister() {
        return browser.$('//button[@id="registerButton"]');
    }

    get textEmailMustBeUnique() {
        return browser.$('//div[@class="error"]');
    }
    
    get linkLogin() {
        return browser.$('//div[@id="alreadyACustomerLink"]//a[@href="#/login"]');
    }

    /* get questionAboutSiblings() {
        return browser.$('//span[text()=" Your eldest siblings middle name? "]');
    } */

    async waitForLoad() {
        await this.titleUserRegistration.waitForDisplayed();
        await this.inputEmail.waitForDisplayed();
        await this.inputPassword.waitForDisplayed();
        await this.inputPasswordConfirm.waitForDisplayed();
        await this.switchShowPasswordAdvice.waitForDisplayed();
        await this.selectionSecurityQuestion.waitForDisplayed();
        await this.inputAnswer.waitForDisplayed();
        await this.buttonRegister.waitForDisplayed();
        await this.linkLogin.waitForDisplayed();
    }
    
}

module.exports = RegisterPage;
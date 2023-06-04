const { Then } = require("@wdio/cucumber-framework");

Then(/^I press not yet a customer$/, async function() {
    await this.loginPage.linkNewCustomer.waitForDisplayed();
    await this.loginPage.linkNewCustomer.click();
});

Then(/^I am in register page$/, async function() {
    await this.registerPage.waitForLoad();
});

Then(/^I enter email address$/, async function() {
    await this.registerPage.inputEmail.waitForDisplayed();
    await this.registerPage.inputEmail.setValue(this.user.email);
});

Then(/^I enter password$/, async function() {
    await this.registerPage.inputPassword.waitForDisplayed();
    //this.user.password = "Parole123";
    await this.registerPage.inputPassword.setValue(this.user.password);
});

Then(/^I enter password reapeatedly$/, async function() {
    await this.registerPage.inputPasswordConfirm.waitForDisplayed();
    await this.registerPage.inputPasswordConfirm.setValue(this.user.password);
});

Then(/^I select security question about elder sibling$/, async function() {
    await this.registerPage.selectionSecurityQuestion.waitForDisplayed();
    await this.registerPage.selectionSecurityQuestion.click();
    let element = await this.registerPage.securityQuestionOption("eldest siblings middle name");
    await element.waitForDisplayed();
    await element.click();
});

Then(/^I enter answer$/, async function() {
    await this.registerPage.inputAnswer.waitForDisplayed();
    await this.registerPage.inputAnswer.setValue(this.user.securityAnswer);
});

Then(/^I press register button$/, async function() {
    await this.registerPage.buttonRegister.waitForDisplayed();
    await this.registerPage.buttonRegister.click();
});

Then(/^I see message about email must be unique$/, async function() {
    const element = await this.registerPage.textEmailMustBeUnique;
    await element.waitForDisplayed();
    await expect(element).toHaveText("Email must be unique");
});
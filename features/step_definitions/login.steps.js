const { Then } = require("@wdio/cucumber-framework");

Then(/^I have registered account$/, async function() {
    await this.basePage.buttonAccount.waitForDisplayed();
    await this.basePage.buttonAccount.click();
    await this.basePage.buttonLogin.waitForDisplayed();
    await this.basePage.buttonLogin.click();
    await this.loginPage.inputEmail.waitForDisplayed();
    await this.loginPage.inputEmail.setValue(this.user.email);
    await this.loginPage.inputPassword.waitForDisplayed();
    await this.loginPage.inputPassword.setValue(this.user.password);
    await this.loginPage.buttonLogin.waitForDisplayed();
    await this.loginPage.buttonLogin.click();
    await this.loginPage.buttonBasket.waitForDisplayed();
});

Then(/^I have logged out$/, async function() {
    await this.basePage.buttonAccount.waitForDisplayed();
    await this.basePage.buttonAccount.click(); 
    await this.loginPage.buttonLogout.waitForDisplayed();
    await this.loginPage.buttonLogout.click(); 
    await this.basePage.buttonBasket.waitForDisplayed({ reverse: true });
});

Then(/^I am on login page$/, async function() {
    await this.loginPage.waitForLoad();
});

Then(/^I have logged in$/, async function() {
    await this.basePage.buttonAccount.waitForDisplayed();
    await this.basePage.buttonAccount.click();
    await this.basePage.buttonLogin.waitForDisplayed();
    await this.basePage.buttonLogin.click();
    await this.loginPage.inputEmail.waitForDisplayed();
    await this.loginPage.inputEmail.setValue(this.user.email); 
    await this.loginPage.inputPassword.waitForDisplayed();
    await this.loginPage.inputPassword.setValue(this.user.newPassword); 
    await this.loginPage.buttonLogin.waitForDisplayed();
    await this.loginPage.buttonLogin.click();
    await this.loginPage.buttonBasket.waitForDisplayed();
});


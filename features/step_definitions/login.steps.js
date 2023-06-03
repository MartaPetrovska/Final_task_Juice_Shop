const { Then } = require("@wdio/cucumber-framework");

Then(/^I have registered account$/, async function() {
    await this.basePage.buttonAccount.waitForDisplayed();
    await this.basePage.buttonAccount.click();
    await this.basePage.buttonLogin.waitForDisplayed();
    await this.basePage.buttonLogin.click();
    await this.loginPage.inputEmail.waitForDisplayed();
    await this.loginPage.inputEmail.setValue(this.user.email); //jane12doee@gmail.com
    await this.loginPage.inputPassword.waitForDisplayed();
    await this.loginPage.inputPassword.setValue(this.user.password); //Parole123
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
    await console.log("I am on login page");
});

Then(/^I press 'forgot password'$/, async function() {
    await console.log("I press 'forgot password'");
});

Then(/^I enter email in forgot email page$/, async function() {
    await console.log("I enter email in forgot email page");
});

Then(/^I click on security question field$/, async function() {
    await console.log("I click on security question field");
});

Then(/^I see security question$/, async function() {
    await console.log("I see security question");
});

Then(/^I enter security question$/, async function() {
    await console.log("I enter security question");
});

Then(/^I enter new password and confirm$/, async function() {
    await this.loginPage.inputNewPassword.waitForDisplayed();
    let curTime = new Date().valueOf();
    this.user.newPassword = `Parole${curTime}`;
    await this.loginPage.inputNewPassword.setValue(this.user.newPassword);
});

Then(/^I see message about succesfully changed password$/, async function() {
    await console.log("I see message about succesfully changed password");
});

Then(/^I have logged in$/, async function() {
    await console.log("I have logged in");
});


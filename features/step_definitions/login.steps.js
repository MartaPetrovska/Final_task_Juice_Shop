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
    await this.loginPage.waitForLoad();
});

Then(/^I press 'forgot password'$/, async function() {
    await browser.url('http://159.223.1.129/#/forgot-password'); //used workaround, as element was blocked
});

Then(/^I enter email in forgot email page$/, async function() {
    await this.loginPage.inputEmail.waitForDisplayed();
    await this.loginPage.inputEmail.setValue(this.user.email);
});

Then(/^I click on security question field$/, async function() {
    await this.loginPage.inputSecurityQuestion.waitForDisplayed();
    await this.loginPage.inputSecurityQuestion.waitForClickable();
    await this.loginPage.inputSecurityQuestion.click();
});


Then(/^I see security question$/, async function() {
    const element = await this.loginPage.seeSecurityQuestion("eldest siblings middle name");
    await element.isDisplayed();  
});


Then(/^I enter security question$/, async function() {
    await this.loginPage.inputSecurityAnswer.waitForDisplayed();
    await this.loginPage.inputSecurityQuestion.waitForClickable();
    await this.loginPage.inputSecurityAnswer.click();
    await this.loginPage.inputSecurityAnswer.setValue(this.user.securityAnswer);
});

Then(/^I enter new password and confirm$/, async function() {
    await this.loginPage.inputNewPassword.waitForDisplayed();
    let curTime = new Date().valueOf();
    this.user.newPassword = `Parole${curTime}`;
    this.user.password = this.user.newPassword
    await this.loginPage.inputNewPassword.setValue(this.user.password);
    await this.loginPage.inputRepeatPassword.waitForDisplayed();
    await this.loginPage.inputRepeatPassword.setValue(this.user.password);
    await this.loginPage.buttonChange.waitForDisplayed();
    await this.loginPage.buttonChange.click();
});

Then(/^I see message about succesfully changed password$/, async function() {
    const element = await this.loginPage.textPasswordChanged;
    await element.waitForDisplayed();
    await expect(element).toHaveText("Your password was successfully changed.")
});

Then(/^I have logged in$/, async function() {
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


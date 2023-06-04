const { Then } = require("@wdio/cucumber-framework");

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
    /* let curTime = new Date().valueOf(); // not sure why this does not assign new password to this.user.newPassword
    let newPassword = `Parole${curTime}`;
    this.user.newPassword = newPassword.toString();
    console.log(newPassword); */
    await this.loginPage.inputNewPassword.setValue(this.user.newPassword);
    await this.loginPage.inputRepeatPassword.waitForDisplayed();
    await this.loginPage.inputRepeatPassword.setValue(this.user.newPassword);
    await this.loginPage.buttonChange.waitForDisplayed();
    await this.loginPage.buttonChange.click();
});

Then(/^I see message about succesfully changed password$/, async function() {
    const element = await this.loginPage.textPasswordChanged;
    await element.waitForDisplayed();
    await expect(element).toHaveText("Your password was successfully changed.")
});
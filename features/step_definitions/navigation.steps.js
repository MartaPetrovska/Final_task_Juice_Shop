const { Then } = require("@wdio/cucumber-framework");

Then(/^I open landing page$/, async function() {
    await browser.url('');
    await this.basePage.buttonDismissCookies.waitForDisplayed();
    await this.basePage.buttonDismissCookies.click();
    await this.basePage.buttonDismissPopoup.waitForDisplayed();
    await this.basePage.buttonDismissPopoup.click();
    await this.basePage.popUpAfterLanguageChange.waitForDisplayed({ reverse: true });
});

Then(/^I press on Account button$/, async function() {
    await this.basePage.buttonAccount.waitForDisplayed();
    await this.basePage.buttonAccount.click();
});

Then(/^I press log in$/, async function() {
    await this.basePage.buttonLogin.waitForDisplayed();
    await this.basePage.buttonLogin.click();
});

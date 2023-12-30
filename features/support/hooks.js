const {Before} = require('@wdio/cucumber-framework');

Before(async (scenario) => {
    await browser.reloadSession();
    await browser.maximizeWindow();
})
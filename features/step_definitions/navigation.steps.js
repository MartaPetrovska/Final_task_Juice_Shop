const { Then } = require("@wdio/cucumber-framework");

Then(/^I open landing page$/, async function() {
    await console.log("I open landing page");
});

Then(/^I press on Account button$/, async function() {
    await console.log("I press on Account button");
});

Then(/^I press log in$/, async function() {
    await console.log("I press log in");
});

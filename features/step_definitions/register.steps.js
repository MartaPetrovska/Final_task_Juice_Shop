const { Then } = require("@wdio/cucumber-framework");

Then(/^I press not yet a customer$/, async function() {
    await console.log("I press not yet a customer");
});

Then(/^I enter email address$/, async function() {
    await console.log("I enter email address");
});

Then(/^I enter password$/, async function() {
    await console.log("I enter password");
});

Then(/^I enter password reapeatedly$/, async function() {
    await console.log("I enter password reapeatedly");
});

Then(/^I select security question about elder sibling$/, async function() {
    await console.log("I select security question about elder sibling");
});

Then(/^I enter answer$/, async function() {
    await console.log("I enter answer");
});

Then(/^I press register button$/, async function() {
    await console.log("I press register button");
});
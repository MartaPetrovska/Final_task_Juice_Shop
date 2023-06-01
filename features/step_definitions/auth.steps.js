const { Then } = require("@wdio/cucumber-framework");

Then(/^I have registered account$/, async function() {
    await console.log("I have registered account");
});

Then(/^I have logged out$/, async function() {
    await console.log("I have logged out");
});

Then(/^I see message about email must be unique$/, async function() {
    await console.log("I see message about email must be unique");
});

Then(/^I am in register page$/, async function() {
    await console.log("I am in register page");
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
    await console.log("I enter new password and confirm");
});

Then(/^I see message about succesfully changed password$/, async function() {
    await console.log("I see message about succesfully changed password");
});

Then(/^I have logged in$/, async function() {
    await console.log("I have logged in");
});
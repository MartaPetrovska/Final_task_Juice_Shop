const { Then } = require("@wdio/cucumber-framework");

Then(/^I click on 'Orders and Payment' option$/, async function() {
    await console.log("I click on 'Orders and Payment' option");
});

Then(/^I click on 'My payment Options' option$/, async function() {
    await console.log("I click on 'My payment Options' option");
});

Then(/^I click add new card button$/, async function() {
    await console.log("I click add new card button");
});

Then(/^I fill in credit card information and submit$/, async function() {
    await console.log("I fill in credit card information and submit");
});

Then(/^I see confirmation message about card info$/, async function() {
    await console.log("I see confirmation message about card info");
});

Then(/^I click on 'My Saved Addresses' option$/, async function() {
    await console.log("I click on 'My Saved Addresses' option");
});

Then(/^I click on new Address button$/, async function() {
    await console.log("I click on new Address button");
});

Then(/^I add address information and submit$/, async function() {
    await console.log("I add address information and submit");
});
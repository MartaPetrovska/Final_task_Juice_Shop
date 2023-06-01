const { Then } = require("@wdio/cucumber-framework");


Then(/^I add 'Best Juice Shop Salesman Artwork' to basket and checkout$/, async function() {
    await console.log("I add 'Best Juice Shop Salesman Artwork' to basket and checkout");
});

Then(/^I choose saved address$/, async function() {
    await console.log("I choose saved address");
});

Then(/^I choose 'One day delivery'$/, async function() {
    await console.log("I choose 'One day delivery'");
});

Then(/^I choose saved card$/, async function() {
    await console.log("I choose saved card");
});

Then(/^I place order and pay$/, async function() {
    await console.log("I place order and pay");
});

Then(/^I am in order completion page$/, async function() {
    await console.log("I am in order completion page");
});

Then(/^I see correct order address$/, async function() {
    await console.log("I see correct order address");
});

Then(/^I see order details$/, async function() {
    await console.log("I see order details");
});

Then(/^I see end total price$/, async function() {
    await console.log("I see end total price");
});
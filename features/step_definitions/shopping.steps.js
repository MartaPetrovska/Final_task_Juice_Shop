const { Then } = require("@wdio/cucumber-framework");


Then(/^I add '(.*?)' to basket and checkout$/, async function (item) {
    await this.basePage.buttonSearch.waitForDisplayed();
    await this.basePage.buttonSearch.click();
    await this.basePage.searchBar.waitForDisplayed();
    await this.basePage.searchBar.setValue(item);
    await browser.keys("Enter");
    const product = await this.productsPage.buttonAddToCart(item);
    await product.waitForDisplayed();
    await product.scrollIntoView();
    await product.click();
    const message = await this.productsPage.snackBarItemAdded(item);
    await message.waitForDisplayed();
    await message.waitForDisplayed({ reverse: true });
    await this.basePage.buttonBasket.waitForDisplayed();
    await this.basePage.buttonBasket.click();
    await this.checkoutPage.buttonCheckout.waitForDisplayed();
    await this.checkoutPage.buttonCheckout.click();
});


Then(/^I choose saved address$/, async function () {
    await this.checkoutPage.checkboxForAddress.waitForDisplayed();
    await this.checkoutPage.checkboxForAddress.click();
    await this.checkoutPage.buttonContinue.waitForDisplayed();
    await this.checkoutPage.buttonContinue.click();
});

Then(/^I choose '(.*?)' delivery$/, async function (delivery) {
    const element = await this.checkoutPage.deliveryTime(delivery);
    await element.waitForDisplayed();
    await element.click();
    await this.checkoutPage.buttonContinue.waitForDisplayed();
    await this.checkoutPage.buttonContinue.click();
});

Then(/^I choose saved card$/, async function () {
    await this.checkoutPage.checkboxForCard.waitForDisplayed();
    await this.checkoutPage.checkboxForCard.click();
    await this.checkoutPage.buttonContinue.waitForDisplayed();
    await this.checkoutPage.buttonContinue.click();
    await this.checkoutPage.titleOrderSummary.waitForDisplayed();
});

Then(/^I place order and pay$/, async function () {
    await this.checkoutPage.buttonPay.waitForDisplayed();
    await this.checkoutPage.buttonPay.click();
});

Then(/^I am in order completion page$/, async function () {
    await this.checkoutPage.titlePurchase.waitForDisplayed();
});

Then(/^I see correct order address$/, async function (correctAddress) {
    const array = correctAddress.raw(); {
        console.log(array);
        const element = await this.checkoutPage.correctAddress(array[1][1], array[4][1], array[0][1]);
        await element.waitForDisplayed();
    }
});

Then(/^I see order details$/, async function (orderDetails) {
    for await (const itemRow of orderDetails.hashes()) {
        console.log(`product = ${itemRow.Product}, price = ${itemRow.Price}`);
        const element = await this.checkoutPage.orderDetails(itemRow.Product, itemRow.Price);
        await element.waitForDisplayed();
    }
});

Then(/^I see end total price$/, async function (totalPrice) {
    const array = totalPrice.raw(); {
        console.log(array);
        const element = await this.checkoutPage.totalPrice(array[3][1]);
        await element.waitForDisplayed();
    }
});


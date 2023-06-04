const { Then } = require("@wdio/cucumber-framework");

Then(/^I click on 'Orders and Payment' option$/, async function() {
    await this.ordersPaymentsPage.optionOrdersPayments.waitForDisplayed();
    await this.ordersPaymentsPage.optionOrdersPayments.click();
});

Then(/^I click on 'My payment Options' option$/, async function() {
    await this.ordersPaymentsPage.paymentOptions.waitForDisplayed();
    await this.ordersPaymentsPage.paymentOptions.click();
});

Then(/^I click add new card button$/, async function() {
    await this.ordersPaymentsPage.newCard.waitForDisplayed();
    await this.ordersPaymentsPage.newCard.click();
});


Then(/^I fill in credit card information and submit$/, async function(table) {
    const array = table.raw();
    await this.ordersPaymentsPage.inputCardName.waitForDisplayed();
    await this.ordersPaymentsPage.inputCardName.setValue(array[1][0]);
    await this.ordersPaymentsPage.inputCardNumber.waitForDisplayed();
    await this.ordersPaymentsPage.inputCardNumber.setValue(array[1][1]);

    await this.registerPage.selectionSecurityQuestion.waitForDisplayed();
    await this.registerPage.selectionSecurityQuestion.click();
    let element = await this.registerPage.securityQuestionOption("eldest siblings middle name");
    await element.waitForDisplayed();
    await element.click();
    await this.ordersPaymentsPage.expMonts.waitForDisplayed();
    await this.ordersPaymentsPage.expMonts.setValue(array[1][2]); // should choose option
    await this.ordersPaymentsPage.expYear.waitForDisplayed();
    await this.ordersPaymentsPage.expYear.setValue(array[1][3]);
    await this.ordersPaymentsPage.buttonSubmit.waitForDisplayed();
    await this.ordersPaymentsPage.buttonSubmit.click();
 
 
    /*  for await (const line of CardInfo.rows()) {
        const fieldName = line[0];
        const fieldValue = line[1];
    
        switch (fieldName) {
          case "Name":
            await this.ordersPaymentsPage.inputCardName.waitForDisplayed();
            await this.ordersPaymentsPage.inputCardName.setValue(fieldValue);
            break;
          case "Card Number":
            await this.ordersPaymentsPage.inputCardNumber.waitForDisplayed();
            await this.ordersPaymentsPage.inputCardNumber.setValue(fieldValue);
            break;
          case "Expirity Month":
            await this.ordersPaymentsPage.expMonts.waitForDisplayed();
            await this.ordersPaymentsPage.expMonts.setValue(fieldValue);
            break;
          case "Expirity year":
            await this.ordersPaymentsPage.expYear.waitForDisplayed();
            await this.ordersPaymentsPage.expYear.setValue(fieldValue);
            break;
          default:
            console.log(`Element containing ${fieldName} not found`);
        }
      }
      await this.ordersPaymentsPage.buttonSubmit.waitForDisplayed();
      await this.ordersPaymentsPage.buttonSubmit.click(); */
    
    /* const cardInfo = tableWithCardInfo.row();
    await this.ordersPaymentsPage.inputCardName.waitForDisplayed();
    await this.ordersPaymentsPage.inputCardName.keys(cardInfo[0]);
    await this.ordersPaymentsPage.inputCardNumber.waitForDisplayed();
    await this.ordersPaymentsPage.inputCardNumber.keys(cardInfo[1]);
    await this.ordersPaymentsPage.expMonts.waitForDisplayed();
    await this.ordersPaymentsPage.expMonts.keys(cardInfo[2]);
    await this.ordersPaymentsPage.expYear.waitForDisplayed();
    await this.ordersPaymentsPage.expYear.keys(cardInfo[3]);
    await this.ordersPaymentsPage.buttonSubmit.waitForDisplayed();
    await this.ordersPaymentsPage.buttonSubmit.click(); */
});

Then(/^I see confirmation message about '(.*?)' info$/, async function(name) { 
    const element = await this.basePage.confirmationMessage(name)
    await element.waitForDisplayed();
    await element.waitForDisplayed({reverse: true});
});

Then(/^I click on 'My Saved Addresses' option$/, async function() {
    await this.ordersPaymentsPage.adressOption.waitForDisplayed();
    await this.ordersPaymentsPage.adressOption.click();
});

Then(/^I click on new Address button$/, async function() {
    await this.ordersPaymentsPage.newAdress.waitForDisplayed();
    await this.ordersPaymentsPage.newAdress.click();
});

Then(/^I add address information and submit$/, async function (infoTable) { 
    for await (const line of infoTable.raw()) {
        const fieldName = line[0];
        const fieldValue = line[1];
    
        switch (fieldName) {
          case "Country":
            await this.ordersPaymentsPage.inputCountry.waitForDisplayed();
            await this.ordersPaymentsPage.inputCountry.setValue(fieldValue);
            break;
          case "Name":
            await this.ordersPaymentsPage.inputName.waitForDisplayed();
            await this.ordersPaymentsPage.inputName.setValue(fieldValue);
            break;
          case "Mobile Number":
            await this.ordersPaymentsPage.inputMobile.waitForDisplayed();
            await this.ordersPaymentsPage.inputMobile.setValue(fieldValue);
            break;
          case "Zip Code":
            await this.ordersPaymentsPage.inputZIP.waitForDisplayed();
            await this.ordersPaymentsPage.inputZIP.setValue(fieldValue);
            break;
          case "Address":
            await this.ordersPaymentsPage.inputAddress.waitForDisplayed();
            await this.ordersPaymentsPage.inputAddress.setValue(fieldValue);
            break;
          case "City":
            await this.ordersPaymentsPage.inputCity.waitForDisplayed();
            await this.ordersPaymentsPage.inputCity.setValue(fieldValue);
            break;
          case "State":
            await this.ordersPaymentsPage.inputState.waitForDisplayed();
            await this.ordersPaymentsPage.inputState.setValue(fieldValue);
            break;
          default:
            console.log(`Element containing ${fieldName} not found`);
        }
      }
      await this.ordersPaymentsPage.buttonSubmit.waitForDisplayed();
      await this.ordersPaymentsPage.buttonSubmit.click();
  });

Then(/^I add '(.*?)' to basket and checkout$/ , async function(item) {
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
    await message.waitForDisplayed({reverse: true});
    await this.basePage.buttonBasket.waitForDisplayed();
    await this.basePage.buttonBasket.click();
    await this.checkoutPage.buttonCheckout.waitForDisplayed();
    await this.checkoutPage.buttonCheckout.click();
});


Then(/^I choose saved address$/, async function() {
    await this.checkoutPage.checkboxForAddress.waitForDisplayed();
    await this.checkoutPage.checkboxForAddress.click();
    await this.checkoutPage.buttonContinue.waitForDisplayed();
    await this.checkoutPage.buttonContinue.click();
});

Then(/^I choose '(.*?)' delivery$/, async function(delivery) {
    const element = await this.checkoutPage.deliveryTime(delivery);
    await element.waitForDisplayed();
    await element.click();
    await this.checkoutPage.buttonContinue.waitForDisplayed();
    await this.checkoutPage.buttonContinue.click();
});

Then(/^I choose saved card$/, async function() {
    await this.checkoutPage.checkboxForCard.waitForDisplayed();
    await this.checkoutPage.checkboxForCard.click();
    await this.checkoutPage.buttonContinue.waitForDisplayed();
    await this.checkoutPage.buttonContinue.click();
    await this.checkoutPage.orderSummary.waitForDisplayed();
});

Then(/^I place order and pay$/, async function() {
    await this.checkoutPage.buttonPay.waitForDisplayed();
    await this.checkoutPage.buttonPay.click();
});

Then(/^I am in order completion page$/, async function() { //vajag wait for load
    await this.checkoutPage.titlePurchase.waitForDisplayed();
});

/* Then(/^I see correct order address$/, async function(data) {
    for await(const line of data.raw()) {
        const element = await this.basePage.sideMenu.sideMenuOpton(line[0]);
        await element.waitForDisplayed();
    });
}); */

Then(/^I see order details$/, async function(orderDetails) {
    for await (const itemRow of orderDetails.rows()) {
        console.log(`product = ${itemRow.Product}, price = ${itemRow.Price}`);
        const element = await this.checkoutPage.orderDetails(itemRow.Product, itemRow.Price);
        await element.waitForDisplayed();
    }
});

Then(/^I see end total price$/, async function() {
    await console.log("I see end total price");
});
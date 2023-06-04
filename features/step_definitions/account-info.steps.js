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

    await this.ordersPaymentsPage.expMontsField.waitForDisplayed();
    await this.ordersPaymentsPage.expMontsField.waitForClickable();
    await this.ordersPaymentsPage.expMontsField.click();
    let month = await this.ordersPaymentsPage.expMontsOption(array[1][2]);
    await month.waitForDisplayed();
    await month.click();

    await this.ordersPaymentsPage.expYearField.waitForDisplayed();
    await this.ordersPaymentsPage.expYearField.waitForClickable();
    await this.ordersPaymentsPage.expYearField.click();
    let year = await this.ordersPaymentsPage.expYearOption(array[1][3]);
    await year.waitForDisplayed();
    await year.click();

    await this.ordersPaymentsPage.buttonSubmit.waitForDisplayed();
    await this.ordersPaymentsPage.buttonSubmit.click();
 
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
    for await (const element of infoTable.raw()) {
        const fieldName = element[0];
        const fieldValue = element[1];
    
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
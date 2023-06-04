const BasePage = require('../base.page');
class OrdersPayments extends BasePage {
    constructor() {
        super();
    }

    get optionOrdersPayments() {
        return browser.$('//button[@aria-label = "Show Orders and Payment Menu"]/span[contains(text(), " Orders & Payment ")]');
    }

    get paymentOptions() {
        return browser.$('//button[contains(@class, "mat-focus-indicator")]//span[contains(text(), " My Payment Options ")]');
    }

    get adressOption() {
        return browser.$('//span[contains(text(), " My saved addresses ")]');
    }

    get newCard() {
        return browser.$('//mat-panel-title[contains(text(), " Add new card ")]');
    }

    get newAdress() {
        return browser.$('//span[contains(text(), "Add New Address")]');
    }

    get inputCountry() {
        return browser.$('//input[@placeholder = "Please provide a country."]');
    }

    get inputName() {
        return browser.$('//input[@placeholder = "Please provide a name."]');
    }

    get inputMobile() {
        return browser.$('//input[@placeholder = "Please provide a mobile number."]');
    }

    get inputZIP() {
        return browser.$('//input[@placeholder = "Please provide a ZIP code."]');
    }

    get inputAddress() {
        return browser.$('//textarea[@placeholder = "Please provide an address."]');
    }

    get inputCity() {
        return browser.$('//input[@placeholder = "Please provide a city."]');
    }

    get inputState() {
        return browser.$('//input[@placeholder = "Please provide a state."]');
    }

    get inputCardName() {
        return browser.$('//mat-expansion-panel[contains(@class, "mat-expansion-panel")]//div[contains(@class, "mat-form-field-infix")]//input[@type = "text"]');
    }

    get inputCardNumber() {
        return browser.$('//mat-expansion-panel[contains(@class, "mat-expansion-panel")]//div[contains(@class, "mat-form-field-infix")]//input[@type = "number"]');
    }

    get expMontsField(){
        return browser.$('//mat-label[contains(text(), "Expiry Month")]/ancestor::span[contains(@class, "mat-form-field-label-wrapper")]/preceding-sibling::select');
    }

    async expMontsOption(value) {
        return browser.$(`//option[@value="${value}"]`);
    }

    get expYearField() {
        return browser.$('//mat-label[contains(text(), "Expiry Year")]/ancestor::span[contains(@class, "mat-form-field-label-wrapper")]/preceding-sibling::select');
    }

    async expYearOption(value) {
        return browser.$(`//option[@value="${value}"]`);
    }

    get buttonSubmit() {
        return browser.$('//button[@id = "submitButton"]');
    }

    async confirmationMessage(name) {
        return browser.$(`//*[@class = "mat-simple-snack-bar-content"][contains(text(), )][contains(text(), "has been saved")]`);
    }

}

module.exports = OrdersPayments;


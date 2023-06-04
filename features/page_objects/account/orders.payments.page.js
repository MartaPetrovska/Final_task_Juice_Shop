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

    async addressInfo(option) {
        return browser.$(`//input[@placeholder = "Please provide a ${option}."]`); ////input[contains(@placeholder , "${option}.")][contains@placeholder = "Please provide a ${option}."]
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
        return browser.$('//mat-form-field[descendant-or-self::select[contains(@class, "mat-input-elemen")]]//mat-label[contains(text(), "Expiry Month")]');
    }

    //mat-label[contains(text(), "Expiry Month")]
    //div[contains(@class, "mat-form-field-infix")]//option[@class= "ng-star-inserted"][contains(text(), "4")]
   
   //div[descendant-or-self::select[contains(@class, "mat-input-element")]//option[@class= "ng-star-inserted"][contains(text(), "4")]][descendant-or-self::mat-label[contains(text(), "Expiry Month")]]
    //mat-form-field[descendant-or-self::div[contains(@class, "mat-form-field-infix")]//option[@class= "ng-star-inserted"][contains(text(), "4")][descendant-or-self::mat-label[contains(text(), "Expiry Month")]]

    async expMontsOption(value) {
        return browser.$(`//div[@role="listbox"]//span[@class= "mat-option-text"][contains(text(), "${value}")]`);
    }

    get expYearField() {
        return browser.$('//mat-form-field[descendant-or-self::select[contains(@class, "mat-input-elemen")]]//mat-label[contains(text(), "Expiry Year")]');
    }

    get buttonSubmit() {
        return browser.$('//button[@id = "submitButton"]');
    }

    async confirmationMessage(name) { //var ielikt funkciju, kura aprēķina 4 pēdējos kartes ciparus
        return browser.$(`//*[@class = "mat-simple-snack-bar-content"][contains(text(), )][contains(text(), "has been saved")]`);
    }

}

module.exports = OrdersPayments;

//input[@placeholder = "Please provide a name."]
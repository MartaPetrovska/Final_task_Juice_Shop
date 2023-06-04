const BasePage = require('./base.page');
class CheckoutPage extends BasePage {
    constructor() {
        super();
    }

    get buttonCheckout() {
        return browser.$('//button[@id="checkoutButton"]//span[@class = "mat-button-wrapper"]');
    }

    get checkboxForAddress() {
        return browser.$('//mat-row[descendant-or-self::span[@class="mat-radio-container"]][descendant-or-self::mat-cell[contains(text(), "John Goodman ")]]'); //should add argument
    }

    get checkboxForCard() {
        return browser.$('//mat-radio-button[contains(@class, "mat-radio-button mat-accent")]');
    }

    get buttonContinue() {
        return browser.$('//span[contains(text(), "Continue")]');
    }

    async deliveryTime(name) {
        return browser.$(`//mat-row[descendant-or-self::mat-radio-button[contains(@class, "mat-radio-button")]][descendant-or-self::mat-cell[contains(text(), "${name}")]]`); 
    }

    get buttonPay() {
        return browser.$('//button[@id = "checkoutButton"]//span[contains(text(), "Place your order and pay")]');
    }

    get titlePurchase() {
        return browser.$('//h1[@class = "confirmation"]');
    }

    get orderSummary() {
        return browser.$('//div[contains(text(), "Order Summary")]');
    }

    async orderDetails(product, price) {
        return browser.$(`//mat-row[descendant-or-self::mat-cell[contains(text(), "${product}")]/following-sibling::mat-cell[contains(text(), "${price}")]]`); 
    }

    //mat-cell[contains(text(), "Apple Juice")]/following-sibling::mat-cell[contains(text(), "1.99")]/following-sibling::mat-cell[contains(text(), "1")]/following-sibling::mat-cell[contains(text(), "1.99")]
//whole row //mat-row[descendant-or-self::mat-cell[contains(text(), "Apple Juice")]/following-sibling::mat-cell[contains(text(), "1.99")]]


}

module.exports = CheckoutPage;
const BasePage = require('./base.page');
class ProductsPage extends BasePage {
    constructor() {
        super();
    }

    get buttonsAddToBasket() {
        return browser.$$('//span[contains(text(), "Add to Basket")]');
    }

    async buttonAddToCart(name) {
        return browser.$(`//mat-card[descendant-or-self::div[@class = "item-name"][contains(text(), "${name}")]]//span[contains(text(), "Add to Basket")]`);
    }

    async snackBarItemAdded(name) {
        return browser.$(`//*[@class = "mat-simple-snack-bar-content"][contains(text(), "${name}")][contains(text(), "to basket")]`); 
    }

    async addressDetails(option) {
        return browser.$(`//mat-nav-list[@role="navigation"]/a//span[contains(@class, "menu-text")][contains(text(), "${option}")]`);
    }

}

module.exports = ProductsPage;
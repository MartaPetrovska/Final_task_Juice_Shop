const BasePage = require('../base.page');
class ProductsPage extends BasePage {
    constructor() {
        super();
    }

    async buttonAddToCart(name) {
        return browser.$(`//mat-card[descendant-or-self::div[@class = "item-name"][contains(text(), "${name}")]]//span[contains(text(), "Add to Basket")]`);
    }

    async snackBarItemAdded(name) {
        return browser.$(`//*[@class = "mat-simple-snack-bar-content"][contains(text(), "${name}")][contains(text(), "to basket")]`); 
    }

}

module.exports = ProductsPage;
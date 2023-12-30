class BasePage {
    constructor() {
        
    }

    get buttonAccount() {
        return browser.$('//button[@id="navbarAccount"]//span[contains(@class, "button-wrapper")]'); //
    }

    get buttonLogin() {
        return browser.$('//button[@id="navbarLoginButton"]//span');
    }

    get buttonDismissPopoup() {
        return browser.$('//span[contains(text(), "Dismiss")]');
    }

    get buttonDismissCookies() {
        return browser.$('//a[@aria-label="dismiss cookie message"]');
    }

    get popUpAfterLanguageChange() {
        return browser.$('//*[@class = "mat-simple-snack-bar-content"]');
    }

    get buttonBasket() {
        return browser.$('//span[contains(text(), "Your Basket")]');
    } 

    get buttonLogout() {
        return browser.$('//button[@id="navbarLogoutButton"]');
    }

    get buttonSearch() {
        return browser.$('//mat-icon[contains(text(), "search")]');
    }

    get searchBar() {
        return browser.$('input[type="text"]')
    }

    async confirmationMessage(name) {
        return browser.$(`//span[@class = "mat-simple-snack-bar-content"][contains(text(), "${name}")]`); 
    }

}

module.exports = BasePage;

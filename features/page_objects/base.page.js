class BasePage {
    constructor() {
        
    }

    get buttonAccount() {
        return browser.$('//button[@id="navbarAccount"]//span[contains(@class, "button-wrapper")]'); //
    }

    get buttonLogin() {
        return browser.$('//button[@id="navbarLoginButton"]//span');
    }

    /* get buttonSearch() {
        return browser.$('//mat-icon[contains(text(), "search")]');
    } */

    /* get buttonCloseSearch() {
        return browser.$('//mat-icon[contains(text(), "close")]');
    } */

    /* get searchBar() {
        // return browser.$('//input'); //[@id="mat-input-0"]
        return browser.$('input[type="text"]')
    } */

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

    get userProfileButton() {
        return browser.$('//*[@aria-label="Go to user profile"][@role="menuitem"]/span');
    } 

    get buttonLogout() {
        return browser.$('//button[@id="navbarLogoutButton"]');
    }

    get buttonSearch() {
        return browser.$('//mat-icon[contains(text(), "search")]');
    }

    get searchBar() {
        // return browser.$('//input'); //[@id="mat-input-0"]
        return browser.$('input[type="text"]')
    }

    async confirmationMessage(name) {
        return browser.$(`//*[@class = "mat-simple-snack-bar-content"][contains(text(), "${name}")]`); 
    }

}

module.exports = BasePage;

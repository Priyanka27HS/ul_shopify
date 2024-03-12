import { BaseScreen } from "./base/baseScreen";

export class ProfileScreen extends BaseScreen {

    private selectors = {

        welcomeShopifyText: 'com.ultralesson.ulshopify:id/txt-welcome-to-ulshopify',
        registerButton: '#btn-register',
        loginButton: '#btn-login',
        logoutButton: `#btn-logout`,
        backButton: `#btn-back`

    }

    public async getWelcomeShopifyText() {
        const welcomeTextDisplyed = await this.isDisplayed(this.selectors.welcomeShopifyText);
        return welcomeTextDisplyed;
    }

    public async goToRegisterScreen() {
        await this.click(this.selectors.registerButton);
    }

    public async goToLoginScreen() {
        await this.click(this.selectors.loginButton);
    }

    public async clickBackButton() {
        await this.click(this.selectors.backButton);
    }

    public async clickLogout() {
        await this.click(this.selectors.logoutButton);
    }
    
}
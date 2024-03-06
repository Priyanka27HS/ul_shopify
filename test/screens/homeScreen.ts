import { BaseScreen } from "./base/baseScreen";

export class HomeScreen extends BaseScreen {

    private selectors = {

        homeIcon: '#icon-home',
        cartIcon: '#icon-cart',
        exploreIcon: '#icon-explore',
        trackIcon: '#icon-track-order',
        profileIcon: '#icon-profile',
        welcomeText: '//android.widget.TextView[@resource-id="com.ultralesson.ulshopify:id/txt-welcome-back"]',
        popUpMsg: '//*[contains(@resource-id,"txt-modal-message")]',
        userName: '#txt-username',
        closePopUpIcon: "#btn-modal-cross",

    }

    public async navigateToProfile(){
        await this.waitForDisplayed(this.selectors.profileIcon, 15000);
        await this.click(this.selectors.profileIcon);
    }

    public async isWelcomeTextDisplayed() {
        const isWelcomeTextDisplayed = await this.isDisplayed(this.selectors.welcomeText);
        return isWelcomeTextDisplayed;
    }

    public async closePopUp() {
        await this.click(this.selectors.closePopUpIcon);
    }

    public async getPopUpMessage() {
        return this.getText(this.selectors.popUpMsg);
    }

    public async getUserNameInTitle(): Promise<string> {
        return this.getText(this.selectors.userName);
    }

}

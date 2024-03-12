import { BaseScreen } from "../base/baseScreen";

export class ExploreMoreScreen extends BaseScreen {

    private selectors = {

        exploreMoreText: '#txt-product-display-heading',
        filterIcon: '//android.view.ViewGroup[@resource-id="com.ultralesson.ulshopify:id/icon-filters"]',
        productName: "//android.widget.TextView[@text='Vintage Denim Jacket']",
        
    }

    public async getExploreMoreText() {
        const isHeadingTextDisplayed=
        await this.getText(this.selectors.exploreMoreText)
        return isHeadingTextDisplayed;
    }

    public async getFilterIcon() {
        await this.click(this.selectors.filterIcon);
    }

    public async getProductName() {
        return this.getElement(this.selectors.productName);
    }

}

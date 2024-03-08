import { BaseScreen } from "../../screens/base/baseScreen";
import { HomeScreen } from "../../screens/homeScreen";
import { LOGGER } from "../../utilities/reporting/loggerHelper";
import { ExploreMoreScreen } from "../../screens/products/exploreMoreScreen";
import { SwipeUtil } from "../../utilities/actions/swipeUtil";

const homeScreen = new HomeScreen;
const exploreMoreScreen = new ExploreMoreScreen;
const swipeUtil = new SwipeUtil;

export class ProductUtil extends BaseScreen {

    public async verifySingleProduct() {

        LOGGER.info("Select a Single Product from New Arrivals section");

        await homeScreen.getIntoProductsSection();
        await this.waitForDisplayed("#icon-filters");

        await this.swipeTillElement(await exploreMoreScreen.getProductName());
        await this.click(await exploreMoreScreen.getProductName());
        
        

    }
}

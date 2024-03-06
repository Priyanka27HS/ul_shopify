import { assert } from "chai";
import { HomeScreen } from "../../../screens/homeScreen";
import { ProfileScreen } from "../../../screens/profileScreen";
import { loginDetails } from "../../../resources/customTypes/loginDetails";
import * as credentials from "../../../resources/testdata/credentials.json";
import { LoggerHelper } from "../../../../customLogger/loggerHelper";
import { LoginUtil } from "../../../utilities/loginUtil";

let homeScreen : HomeScreen;
let profileScreen : ProfileScreen;
let loginUtil: LoginUtil;

const specName: string = 'Logout test';

describe("Logout Test Scenario", () => {

    before(async () => {

        homeScreen = new HomeScreen();
        profileScreen = new ProfileScreen();
        loginUtil = new LoginUtil();
        LoggerHelper.setupLogger(specName);
    });

    it('Login to the application and logout', async () => {

        const data: loginDetails = credentials.credentialsSets.validCredentials as loginDetails;

        await loginUtil.performLogin(data.username, data.password, data.otp);
        await homeScreen.navigateToProfile();
        await profileScreen.clickLogout();
        await profileScreen.clickBackButton();

        const isLogOutSuccessful = await homeScreen.isWelcomeTextDisplayed();
        assert.strictEqual(isLogOutSuccessful, true, "Logout wasn't successful");

    })

})
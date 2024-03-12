import { expect } from "chai";
import { HomeScreen } from "../../screens/homeScreen";
import { registerDetails } from "../../resources/customTypes/registerDetails";
import * as credentials from "../../resources/testdata/credentials.json";
import { LoggerHelper } from "../../../utilities/reporting/loggerHelper";
import { RegisterUtil } from "../../commonFunctions/registerUtil";

let homeScreen: HomeScreen;
let registerUtil: RegisterUtil;

const specName: string = 'Register user scenario';

describe("Register user details", () => {

    before(async () => {

        registerUtil = new RegisterUtil();
        homeScreen = new HomeScreen();
        LoggerHelper.setupLogger(specName);
    });

    it('Register with valid credentials', async () => {

        const data: registerDetails = credentials.credentialsSets.registerDetails as registerDetails;

        await registerUtil.registerUserDetails(data);
        
        const popUpMsg = await homeScreen.getPopUpMessage();
        expect(popUpMsg).to.equal("Registration is successful");
        await homeScreen.closePopUp();
        const userName = await homeScreen.getUserNameInTitle();
        expect(userName).to.equal(data.username);
    });

});
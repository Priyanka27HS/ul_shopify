import { expect } from "chai";
import { LoginScreen } from "../../../screens/loginScreen";
import { HomeScreen } from "../../../screens/homeScreen";
import { ProfileScreen } from "../../../screens/profileScreen";
import { OtpScreen } from "../../../screens/otpScreen";
import { RegisterScreen } from "../../../screens/registerScreen";
import { registerDetails } from "../../../resources/customTypes/registerDetails";
import * as credentials from "../../../resources/testdata/credentials.json";
import { LoggerHelper } from "../../../../customLogger/loggerHelper";

let loginScreen : LoginScreen;
let homeScreen: HomeScreen;
let profileScreen: ProfileScreen;
let otpScreen: OtpScreen;
let registerScreen: RegisterScreen;

const specName: string = 'Register user scenario';

describe("Register user details", () => {

    before(async () => {
        homeScreen = new HomeScreen();
        profileScreen = new ProfileScreen();
        loginScreen = new LoginScreen();
        otpScreen = new OtpScreen();
        registerScreen = new RegisterScreen();
        LoggerHelper.setupLogger(specName);
    });

    it('Register with valid credentials', async () => {

        const data: registerDetails = credentials.credentialsSets.registerDetails as registerDetails;
        
        await homeScreen.navigateToProfile();
        await profileScreen.goToRegisterScreen();
        await registerScreen.enterDetailsForRegister(data.username, data.email, data.password, data.mobilenumber);
        await registerScreen.clickOnRegisterButton();
        await otpScreen.enterOtp(data.otp);
        await otpScreen.clickOnVerifyButton();
        
        const popUpMsg = await homeScreen.getPopUpMessage();
        expect(popUpMsg).to.equal("Registration is successful");
        await homeScreen.closePopUp();
        const userName = await homeScreen.getUserNameInTitle();
        expect(userName).to.equal(data.username);
    });

});
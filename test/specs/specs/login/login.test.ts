import { expect } from "chai";
import { LoginScreen } from "../../../screens/loginScreen";
import { HomeScreen } from "../../../screens/homeScreen";
import { ProfileScreen } from "../../../screens/profileScreen";
import { OtpScreen } from "../../../screens/otpScreen";
import { RegisterScreen } from "../../../screens/registerScreen";
import { loginDetails } from "../../../resources/customTypes/loginDetails";
import * as credentials from "../../../resources/testdata/credentials.json";
import { LoggerHelper } from "../../../../customLogger/loggerHelper";

let loginScreen : LoginScreen;
let homeScreen: HomeScreen;
let profileScreen: ProfileScreen;
let otpScreen: OtpScreen;
let registerScreen: RegisterScreen;

const specName: string = 'Login test scenario';

describe("Login to the application", () => {

    before(async () => {
        homeScreen = new HomeScreen();
        profileScreen = new ProfileScreen();
        loginScreen = new LoginScreen();
        otpScreen = new OtpScreen();
        registerScreen = new RegisterScreen();
        LoggerHelper.setupLogger(specName);
    });

    it('Login to the app with valid credentials', async () => {
        
        const data: loginDetails = credentials.credentialsSets.validCredentials as loginDetails;
        
        await homeScreen.navigateToProfile();
        await profileScreen.goToLoginScreen();
        await loginScreen.enterCredentials(data.username, data.password);
        await loginScreen.clickOnLoginButton();
        await otpScreen.enterOtp(data.otp);
        await otpScreen.clickOnVerifyButton();

        const userName = await homeScreen.getUserNameInTitle();
        expect(userName).to.equal("Jack Sparrow");
    });

});
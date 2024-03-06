import { BaseScreen } from "../screens/base/baseScreen"
import { LoginScreen } from "../screens/loginScreen";
import { HomeScreen } from "../screens/homeScreen";
import { ProfileScreen } from "../screens/profileScreen";
import { LOGGER } from "../../customLogger/loggerHelper";
import { OtpScreen } from "../screens/otpScreen";

const loginScreen = new LoginScreen;
const homeScreen = new HomeScreen;
const profileScreen = new ProfileScreen;
const otpScreen = new OtpScreen;

export class LoginUtil extends BaseScreen{

    public async navigateToProfileAndLogin(username: string | number, password: string | number) {

        await homeScreen.navigateToProfile();
        await profileScreen.goToLoginScreen();
        await loginScreen.enterCredentials(username, password);
        await loginScreen.clickOnLoginButton();
    }

    async performLogin(username: string | number, password: string | number, otp: string){

        LOGGER.info("Logging in to the application");
    
        await this.navigateToProfileAndLogin(username, password);
        await otpScreen.enterOtp(otp);
        await otpScreen.clickOnVerifyButton();
    }

}

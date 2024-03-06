import { BaseScreen } from "../screens/base/baseScreen"
import { LoginScreen } from "../screens/loginScreen";
import { HomeScreen } from "../screens/homeScreen";
import { ProfileScreen } from "../screens/profileScreen";
import { LOGGER } from "../../customLogger/loggerHelper";
import { OtpScreen } from "../screens/otpScreen";
import { RegisterScreen } from "../screens/registerScreen";
import { registerDetails } from "../resources/customTypes/registerDetails";

const loginScreen = new LoginScreen;
const homeScreen = new HomeScreen;
const profileScreen = new ProfileScreen;
const otpScreen = new OtpScreen;
const registerScreen = new RegisterScreen();

export class RegisterUtil extends BaseScreen {

    public async navigateToProfileAndRegister(username: string, email: string, password: string, mobileNumber: string) {

        await homeScreen.navigateToProfile();
        await profileScreen.goToRegisterScreen();
        await registerScreen.enterDetailsForRegister(username, email, password, mobileNumber);
        await registerScreen.clickOnRegisterButton();
    }

    async registerUserDetails(data: registerDetails) {

        LOGGER.info("Register the User Details");
    
        await this.navigateToProfileAndRegister(data.username, data.email, data.password, data.mobilenumber);
        await otpScreen.enterOtp(data.otp);
        await otpScreen.clickOnVerifyButton();
    }

}
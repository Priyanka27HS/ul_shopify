import { BaseScreen } from "./base/baseScreen"

export class LoginScreen extends BaseScreen{

    private selectors = {

        loginText: 'com.ultralesson.ulshopify:id/txt-login-heading', 
        loginButton: '#txt-login',
        usernameTextField: '#inp-email',
        passwordTextField: '#inp-password',
        loginOTP: '#inp-opt-{index}',
        verifyButton: '#txt-verify',
    }

    public async getLoginText() {
        const isLoginTextDisplayed = await this.isDisplayed(this.selectors.loginText);
        return isLoginTextDisplayed;
    }

    public async clickOnLoginButton() {
        await this.click(this.selectors.loginButton);
    }

    async enterCredentials(username: string | number, password: string | number) {
        await this.waitForDisplayed(this.selectors.usernameTextField, 3000);
        (await $(this.selectors.usernameTextField)).setValue(username);
        (await $(this.selectors.passwordTextField)).setValue(password);
    }
    
    async enterOTP(otp: string): Promise<void> {
        
        const otpDigits = otp.split('');
        
        for (let index = 0; index < otpDigits.length; index++) {
            const digit = otpDigits[index];
            const otpFieldXpath = this.selectors.loginOTP.replace('{index}', (index + 1).toString());
            await this.setValue(otpFieldXpath, digit);
        }
    }

    public async clickOnVerify() {
        await this.click(this.selectors.verifyButton);
    }

}
import { BaseScreen } from "./base/baseScreen"

export class OtpScreen extends BaseScreen {

    private selectors = {
        
        verifyButton: "#btn-verify",
        otpButton1: "#inp-opt-1",
        otpButton2: "#inp-opt-2",
        otpButton3: "#inp-opt-3",
        otpButton4: "#inp-opt-4",
    }

    async enterOtp(value: string) {
        await this.setValue(this.selectors.otpButton1, value.charAt(0));
        await this.setValue(this.selectors.otpButton2, value.charAt(1));
        await this.setValue(this.selectors.otpButton3, value.charAt(2));
        await this.setValue(this.selectors.otpButton4, value.charAt(3));
    }

    public async clickOnVerifyButton() {
        await this.click(this.selectors.verifyButton);
    }

}
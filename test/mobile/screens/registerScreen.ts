import { BaseScreen } from "./base/baseScreen"

export class RegisterScreen extends BaseScreen {

    private selectors = {

        nameField: "#inp-fullname",
        emailField: "#inp-email",
        passwordField: "#inp-password",
        confirmPasswordField: "#inp-confirm-password",
        mobileNumberField: "#inp-mobile-number",
        registerButton: "#btn-register"
    }

    async enterDetailsForRegister(name: string, email: string, password: string, mobileNumber: string) {
        
        await this.setValue(this.selectors.nameField, name);
        await this.setValue(this.selectors.emailField, email);
        await this.setValue(this.selectors.passwordField, password);
        await this.setValue(this.selectors.confirmPasswordField, password);
        await this.setValue(this.selectors.mobileNumberField, mobileNumber);
    }

    async clickOnRegisterButton() {
        await this.click(this.selectors.registerButton);
    }

}

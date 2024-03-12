import { expect } from "chai";
import { HomeScreen } from "../../screens/homeScreen";
import { loginDetails } from "../../resources/customTypes/loginDetails";
import * as credentials from "../../resources/testdata/credentials.json";
import { LoggerHelper } from "../../../utilities/reporting/loggerHelper";
import { LoginUtil } from "../../commonFunctions/loginUtil";
import { ProductUtil } from "../../commonFunctions/products/productUtil";

let homeScreen: HomeScreen;
let loginUtil: LoginUtil;
let productUtil: ProductUtil;

const specName: string = 'E2E single product test scenario';

describe("Single product purchase", () => {

    before(async() => {
        homeScreen = new HomeScreen();
        loginUtil = new LoginUtil();
        productUtil = new ProductUtil();
        LoggerHelper.setupLogger(specName);
    });

    it("E2E single product purchase!!!", async() => {

        const data: loginDetails = credentials.credentialsSets.validCredentials as loginDetails;

        await loginUtil.performLogin(data.username, data.password, data.otp);
        
        await productUtil.verifySingleProduct();

    });

})

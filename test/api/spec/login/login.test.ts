import { LoginService } from '../../services/login.service';
import { expect } from 'chai';
import { LoginResponse } from '../../models/response/login/loginResponse';
import loginTestData from '../../resources/login.json';

describe('Login new user - POST Request', () => {

    let loginService: LoginService;

    before(() => {
        loginService = new LoginService();
    })

    it('Login user', async () => {
        try {
            const response: LoginResponse = await loginService.login(loginTestData);
            console.log('Response is:', response);

            expect(response.status).to.equal(200);
            expect(response.data.user.email).to.equal(loginTestData.email);
        } catch (error: any) {
            console.error('Error:', error.message);
            throw error;
        }
    });
});

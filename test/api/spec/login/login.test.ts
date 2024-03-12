import { loginUser } from '../../services/signUpService';
import { expect } from 'chai';
import { SignUpResponse } from '../../models/response/signUp/signUpResponse';
import loginTestData from '../../resources/login.json'; 

describe('Login new user!', () => {

    it('Login user successfully', async () => {

        try {
            const response: SignUpResponse = await loginUser(loginTestData);
            console.log('Response is :', response.data);

            expect(response.status).to.equal(200);
            expect(response.data.user.email).to.equal(loginTestData.email);

        } catch (error: any) {
            console.error('Error:', error.message);
            throw error;
        }
    });
});

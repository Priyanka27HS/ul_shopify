import {AuthService} from '../../services/auth.service';
import { SignUpRequest } from '../../models/request/signUp/signUpRequest';
import { expect } from 'chai';
import { SignUpResponse } from '../../models/response/signUp/signUpResponse';

describe('Sign up user - POST Request', () => {

    let authService: AuthService;

    before(() => {
        authService = new AuthService();
    });

    it('Sign up new user', async () => {

        const randomPart = Math.random().toString(36).substring(2, 6);
        const email = `test${randomPart}@gmail.com`;

        const request: SignUpRequest = {
            email: email,
            password: 'sdfsdfsdfsddf'
        };

        try {
            const response: SignUpResponse = await authService.signup(request);
            console.log('Response :', response);

            expect(response.status).to.equal(201);
            expect(response.data.user.email).to.equal(request.email);
        } catch (error: any) {
            console.error('Error:', error.message);
            throw error;
        }
    });
});

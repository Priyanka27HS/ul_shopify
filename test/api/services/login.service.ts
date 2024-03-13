import axios from 'axios';
import { LoginResponse } from "../models/response/login/loginResponse";
import { SignUpRequest } from "../models/request/signUp/signUpRequest";
import { BaseService } from './base.service';

export class LoginService extends BaseService {
    
    async login(request: SignUpRequest): Promise<LoginResponse> {
        
        // const url = apiUrls.endpoints.login;
        const url:string = `${this.getBaseUrl()}/api/auth/login`;

        try {
            const response = await axios.post(url, request);
            const loginResponse: LoginResponse = response.data;
            loginResponse.status = response.status;
            return loginResponse;
        } catch (error: any) {
            throw new Error(error.response.data);
        }
    }
}
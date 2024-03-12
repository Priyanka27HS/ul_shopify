import axios from 'axios';
import { SignupRequest } from '../models/request/signUp/signUpRequest';
import { SignUpResponse } from '../models/response/signUp/signUpResponse';
import * as apiUrls from '../resources/apiUrls.json';

export async function signup(request: SignupRequest): Promise<SignUpResponse> {

    const signUpUrl = apiUrls.signupUrl; 

    try {
        const response = await axios.post(signUpUrl, request);

        const signUpResponse: SignUpResponse = response.data;
        signUpResponse.status = response.status;

        return signUpResponse;
    } catch (error: any) {
        throw new Error(error.response.data);
    }
}

export async function loginUser(request: SignupRequest): Promise<SignUpResponse> {

    const loginUrl = apiUrls.loginUrl; 

    try {
        const response = await axios.post(loginUrl, request);
        const signUpResponse: SignUpResponse = response.data;
        signUpResponse.status = response.status;
        return signUpResponse;
    } catch (error: any) {
        throw new Error(error.response.data);
    }
}

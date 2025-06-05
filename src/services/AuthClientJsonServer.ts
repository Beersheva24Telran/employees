import axios, { AxiosError } from "axios";
import { LoginData, UserData } from "../model/auth-data";
import AuthClient from "./AuthClient";
interface ResponseLoginData {
    accessToken: string;
    user: {
        email: string;
        userId: string
    }
}
export default class AuthClientJsonServer implements AuthClient {
    async login(loginData: LoginData): Promise<UserData | null> {
        let result:UserData | null  = null;
        try {
            const response = await axios.post<ResponseLoginData>("http://localhost:3000/login", loginData);
            const {user, accessToken} = response.data;
            result = {role: user.userId, username: user.email,token: accessToken};
        } catch (error) {
            const axiosError = error as AxiosError;
            if(!axiosError.response) {
                throw Error(axiosError.message)
            }
        }
        return result;

    }
    logout(_: string): Promise<boolean> {
        return Promise.resolve(true)
    }
    
}

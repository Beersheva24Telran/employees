import axios, { AxiosError } from "axios";
import { LoginData, UserData } from "../model/auth-data";
import AuthClient from "./AuthClient";
interface ResponseLoginData {
    accessToken: string;
    user: {
        email: string;
        id: string
    }
}
 class AuthClientJsonServer implements AuthClient {
    async login(loginData: LoginData): Promise<UserData | null> {
        let result:UserData | null  = null;
        try {
            const response = await axios.post<ResponseLoginData>("http://localhost:3000/login", loginData);
            const {user, accessToken} = response.data;
            result = {role: user.id, username: user.email,token: accessToken};
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
const authClient = new AuthClientJsonServer();
export default authClient;
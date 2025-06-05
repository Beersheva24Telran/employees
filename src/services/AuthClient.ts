import { LoginData, UserData } from "../model/auth-data";

export default interface AuthClient {
    login(loginData: LoginData): Promise<UserData|null>;
    logout(username: string): Promise<boolean>
}
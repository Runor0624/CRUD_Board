import { atom } from "recoil";

export interface ILoginTypes {
    id: string;
    isLoginState: any;
}

export const LoginState = atom<ILoginTypes[]> ({
    key: "LoginState",
    default: [
        {
            id: "Login_FAIL",
            isLoginState: false
        },
        {
            id: "Login_Success",
            isLoginState: true
        }
    ]
})
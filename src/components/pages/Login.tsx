import React from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../../redux/authSlice";
import { Input } from "./Input";

export const Login: React.FC = () => {
    const dispatch = useDispatch();
    return <div>
        <Input placeHolder={"Enter your username"} inputProcess={function(value:string): string {
        dispatch(authActions.login(value))
        return '';
    }}></Input>
        </div>
}
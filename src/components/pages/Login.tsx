import { Box } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { LoginData } from "../../models/LoginData";
import { authActions } from "../../redux/authSlice";
import { employeeActions } from "../../redux/employeesSlice";
import { AuthService } from "../../service/AuthService";
import { LoginForm } from "../forms/LoginForm";
import { Input } from "./Input";

const auth = new AuthService;
export const Login: React.FC = () => {
    let message: string = '';
    const dispatch = useDispatch();
    function loginSubmit (user: LoginData): string {
        try {
            auth.login(user);
            dispatch(authActions.login(user.username))
        }
        catch(e: any) {
            message = e
        }
        return message;
    } 
    return <Box>
        <LoginForm submitFn={loginSubmit} />
        </Box>
}
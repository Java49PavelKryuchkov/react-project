import { Box } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CodeType } from "../../models/CodeType";
import { LoginData } from "../../models/LoginData";
import { authActions } from "../../redux/authSlice";
import { AuthService } from "../../service/AuthService";
import { LoginForm } from "../forms/LoginForm";

const auth = new AuthService;
export const Login: React.FC = () => {
    const code: CodeType = useSelector<any, CodeType>(state => state.errorCode.code)
    const dispatch = useDispatch<any>();
    function loginSubmit (user: LoginData): void {
    dispatch(authActions.login(user))
    } 
    return <Box>
        <LoginForm submitFn={loginSubmit} code={code} />
        </Box>
}
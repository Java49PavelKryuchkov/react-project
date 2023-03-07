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
    const dispatch = useDispatch();
    return <Box>
        <LoginForm submitFn={function (user: LoginData): void {
            auth.login(user);
            dispatch(authActions.login(user.username))
        } } />
        </Box>
}
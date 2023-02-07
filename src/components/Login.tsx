import React from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../redux/authSlice";
export const Login: React.FC = () => {
    const dispatch = useDispatch();
    return <button onClick={() => dispatch(authActions.login())}>Login</button>
}

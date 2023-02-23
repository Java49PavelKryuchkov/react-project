import React from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../../redux/authSlice";
import { Input } from "./Input";

export const Logout: React.FC = () => {
    const dispatch = useDispatch();
    return <button onClick={()=>dispatch(authActions.logout())}>Logout</button>
}
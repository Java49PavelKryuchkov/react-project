import React from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../../redux/authSlice";

export const Logout: React.FC = () => {
    const dispatch = useDispatch<any>();
    return <button onClick={()=>dispatch(authActions.logout())}>Logout</button>
}


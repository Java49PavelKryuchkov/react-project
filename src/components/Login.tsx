import React from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../redux/authSlice";
import { Input } from "./Input";
export const Login: React.FC = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = React.useState("");
    return <div>
<Input placeHolder={""} inputProcess={function (value: string): string {
        setUsername(value);
        return '';
    } }></Input>
    <button onClick={() => dispatch(authActions.login(username))}>Login</button>
    </div>
    
}

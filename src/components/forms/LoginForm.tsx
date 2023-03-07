import { Box, Grid, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { LoginData } from "../../models/LoginData";
type Props = {
    submitFn: (user: LoginData) => void
}
const initialUser: LoginData = {
    username: '',
    password: ''
}
export const LoginForm: React.FC<Props> = ({submitFn}) => {
    const [user, setUser] = useState<LoginData>(initialUser);
    function handlerName(event: any) {
        const name = event.target.value;
        const userCopy = {...user};
        userCopy.username = name;
        setUser(userCopy);
    }
    function handlerPassword(event: any) {
        const password = event.target.value;
        const userCopy = {...user};
        userCopy.password = password;
        setUser(userCopy);
    }
    function onSubmitFn(event: any) {
        event.preventDefault();
        submitFn(user);
        document.querySelector('form')!.reset();

    }
    function onResetFn(event: any) {
        setUser(initialUser);
    }
    return <Box sx={{ marginTop: { sm: "25vh" } }}>
        <form onSubmit={onSubmitFn} onReset={onResetFn}>
        <Grid container spacing={4} justifyContent='center' flexDirection='column'>
                <Grid item xs={3} sm={3}>
                <TextField type='text' required fullWidth label="User Name"
        helperText='Enter User Name' value={user!.username} onChange={handlerName}
       />
                </Grid>
                <Grid item xs={3} sm={3}>
                <TextField type='text' required fullWidth label="Password"
        helperText='Enter Password' value={user!.password} onChange={handlerPassword}
       />
                </Grid>
                </Grid>
            
        <Box sx={{ marginTop: { sm: "25vh" } }}>
        <Button type='submit'>Log In</Button>
              <Button type='reset'>Reset</Button>
        </Box>
              
        </form>
    </Box>
}
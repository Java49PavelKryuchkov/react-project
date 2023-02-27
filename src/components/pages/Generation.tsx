import { Alert, Box, Button, TextField } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { employeeActions } from "../../redux/employeesSlice";
import { createRandomEmployee } from "../../service/EmployeesService";

export const Generation: React.FC = () => {
    const dispatch = useDispatch();
    const [amount, setAmount] = React.useState<number>(1);
    const [flAlertSuccess, setAlertAccess] = React.useState<boolean>(false);
    function handlerAmount(event: any) {
        setAmount(+event.target.value);
    }
    function onSubmitFn(event: any) {
        event.preventDefault();
        for(let i = 0; i < amount; i++) {
            dispatch(employeeActions.addEmployee(createRandomEmployee()))
        }
        setAlertAccess(true);
        setTimeout(() => {
            setAlertAccess(false)
        }, 4000);
    }
    return <Box>
        <form onSubmit={onSubmitFn}>
        <TextField label='amount of employees generated' onChange={handlerAmount}
        required fullWidth type='number' value={amount}
        helperText={`enter amount of employee objects in range [${1}-${50}]`}
        inputProps={{
            min: 1,
            max: 50
        }
        }/>
        <Button type='submit'>Generate</Button>
        </form>
        {flAlertSuccess && <Alert severity="success">Generated {amount} random employee objects</Alert>}
    </Box>
}
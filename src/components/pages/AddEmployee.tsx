import {useDispatch} from 'react-redux';
import { Box, Button } from "@mui/material";
import { employeeActions } from "../../redux/employeesSlice";
import { createRandomEmployee } from "../../service/EmployeesService";

export const AddEmployee: React.FC = () => {
    const dispatch = useDispatch();
    return <Box>
        <Button onClick={() => 
        dispatch(employeeActions.addEmployee(createRandomEmployee()))}>Add Employee</Button>
        </Box>
}
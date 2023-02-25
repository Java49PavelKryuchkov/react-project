import {useDispatch} from 'react-redux';
import { Box, Button } from "@mui/material";
import { employeeActions } from "../../redux/employeesSlice";
import { createRandomEmployee } from "../../service/EmployeesService";
import { EmployeeForm } from '../forms/EmployeeForm';

export const AddEmployee: React.FC = () => {
    const dispatch = useDispatch();
    return <EmployeeForm  submitFn={(employee) =>
        {dispatch(employeeActions.addEmployee(employee));
        return true;}}/>
}
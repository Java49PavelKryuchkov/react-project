import {useDispatch} from 'react-redux';
import { Box, Button } from "@mui/material";
import { createRandomEmployee } from "../../service/EmployeesService";
import { EmployeeForm } from '../forms/EmployeeForm';
import { employeesActions } from '../../redux/employeesSlice';

export const AddEmployee: React.FC = () => {
    const dispatch = useDispatch<any>();
    return <EmployeeForm  submitFn={(employee) =>
        {dispatch(employeesActions.addEmployee(employee));
        return true;}}/>
}
import { Typography } from "@mui/material";
import React from "react";
import {useSelector} from 'react-redux';
import { Employee } from "../../models/Employee";
import { salaryStats } from "../../service/EmployeesService";

export const SalaryStatistics: React.FC = () => {
    const employees = useSelector<any, Employee[]>(state => state.company.employees);
    return <Typography>{JSON.stringify((salaryStats(employees)))}</Typography>
}
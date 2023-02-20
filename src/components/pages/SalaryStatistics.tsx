import React from "react";
import {useSelector} from 'react-redux';
import { Employee } from "../../models/Employee";
import { Statistics } from "../Statistics";

export const SalaryStatistics: React.FC = () => {
    const employees = useSelector<any, Employee[]>(state => state.company.employees);
    return <Statistics field="salary" title="Salary Statistics" object={employees} />
}
import { useSelect } from "@mui/base";
import { List, ListItem } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import { Employee } from "../../models/Employee";

export const Employees: React.FC = () => {
    const employees = useSelector<any, Employee[]>(state => state.company.employees)
    return <List>
        {getNavItems(employees)}
    </List>
}

function getNavItems (employees: Employee[]): React.ReactNode {
    return employees.map((el, i) => <ListItem key={i}>{JSON.stringify(el)}</ListItem>
    )
}
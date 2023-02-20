import { useSelect } from "@mui/base";
import { List, ListItem } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Employee } from "../../models/Employee";
import {GridActionsCellItem, GridColumns} from '@mui/x-data-grid'
import { DataGrid } from "@mui/x-data-grid/DataGrid";
import { Delete } from "@mui/icons-material";
import { employeeActions } from "../../redux/employeesSlice";

export const Employees: React.FC = () => {
    const dispatch = useDispatch();
    const columns = React.useRef<GridColumns>([
    {field: 'name', headerClassName: 'header', headerName: 'Employee Name',
    flex: 1, headerAlign: 'center', align: 'center'},
    {field: 'birthDate', headerClassName: 'header', headerName: 'Birth Date',
    flex: 1, headerAlign: 'center', align: 'center'},
    {field: 'department', headerClassName: 'header', headerName: 'Department',
    flex: 1, headerAlign: 'center', align: 'center'},
    {field: 'salary', headerClassName: 'header', headerName: 'Salary',
    flex: 1, headerAlign: 'center', align: 'center'},
    {field: 'actions', type: 'actions', getActions: (params) => {
        return [
            <GridActionsCellItem label="remove" icon={<Delete/>}
             onClick={() =>
                 dispatch(employeeActions.removeEmployee(+params.id))}/>
        ]
    }}
    ])
    const employees = useSelector<any, Employee[]>(state => state.company.employees)
    return <Box sx={{height: "80vh", width: "80vw"}}>
        <DataGrid columns={columns.current} rows={employees}></DataGrid>
    </Box>
}

function getNavItems (employees: Employee[]): React.ReactNode {
    return employees.map((el, i) => <ListItem key={i}>{JSON.stringify(el)}</ListItem>
    )
}
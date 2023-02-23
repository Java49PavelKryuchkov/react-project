import { useSelect } from "@mui/base";
import { List, ListItem } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Employee } from "../../models/Employee";
import {GridActionsCellItem, GridColumns} from '@mui/x-data-grid'
import { DataGrid } from "@mui/x-data-grid/DataGrid";
import { Delete, Edit } from "@mui/icons-material";
import { employeeActions } from "../../redux/employeesSlice";

export const Employees: React.FC = () => {
    const authUser = useSelector<any, string>(state => state.auth.authenticated)
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
        return authUser.includes('admin') ? [
        <GridActionsCellItem label="update" icon={<Edit/>}
                onClick={() =>
                   {

                      const empl = employees.find(e => e.id == +params.id)
                      if (empl) {
                       const factor = empl.salary > 20000 ? 0.8 : 1.2
                        let emplCopy = {...empl, salary: empl.salary * factor};
                           dispatch(employeeActions.updateEmployee(emplCopy))
                      }


                   }
                    }/>    
       ] : [];
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
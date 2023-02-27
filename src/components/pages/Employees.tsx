import { useSelect } from "@mui/base";
import { IconButton, List, ListItem } from "@mui/material";
import { Box } from "@mui/system";
import React, { ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Employee } from "../../models/Employee";
import {GridActionsCellItem, GridColumns} from '@mui/x-data-grid'
import { DataGrid } from "@mui/x-data-grid/DataGrid";
import { Delete, Edit, PersonAdd } from "@mui/icons-material";
import { employeeActions } from "../../redux/employeesSlice";
import { EmployeeForm } from "../forms/EmployeeForm";

export const Employees: React.FC = () => {
    const authUser = useSelector<any, string>(state => state.auth.authenticated)
    const dispatch = useDispatch();
    const editId = React.useRef<number>(0);
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
            <GridActionsCellItem label="remove" icon={<Delete />}
            onClick={() =>
                dispatch(employeeActions.removeEmployee(+params.id))} />,
        <GridActionsCellItem label="update" icon={<Edit/>}
                onClick={() =>
                   {
                    editId.current = +params.id;
                    setFlEdit(true);
                   }
                    }/>    
       ] : [];
    }}
    ])
    const [flAdd, setFlAdd] = React.useState<boolean>(false);
    const [flEdit, setFlEdit] = React.useState<boolean>(false);
    
    const employees = useSelector<any, Employee[]>(state => state.company.employees);
    function getComponent(): ReactNode {
        let res: ReactNode = <Box sx={{ height: "70vh", width: "80vw" }}>
                <DataGrid columns={columns.current} rows={employees}/>
                {authUser.includes("admin") && <IconButton onClick={() => setFlAdd(true)}><PersonAdd/></IconButton>}
        </Box>
        if (flEdit) {
            res = <EmployeeForm submitFn={function (empl: Employee): boolean {
                dispatch(employeeActions.updateEmployee(empl));
                setFlEdit(false);
                return true;
            } } employeeUpdate = {employees.find(empl => empl.id == editId.current)} />
        } else if (flAdd) {
            res = <EmployeeForm submitFn={function (empl: Employee): boolean {
                dispatch(employeeActions.addEmployee(empl));
                setFlAdd(false);
                return true;
            } }/>
        }
        return res;
    }
    return <Box sx={{height: "80vh", width: "80vw"}}>
        {getComponent()}
    </Box>
}

function getNavItems (employees: Employee[]): React.ReactNode {
    return employees.map((el, i) => <ListItem key={i}>{JSON.stringify(el)}</ListItem>
    )
}
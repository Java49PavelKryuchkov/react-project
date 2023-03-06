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
import { Confirmation } from "./Confirmation";

export const Employees: React.FC = () => {
    const authUser = useSelector<any, string>(state => state.auth.authenticated)
    const dispatch = useDispatch();
    const editId = React.useRef<number>(0);
    const title = React.useRef<string>('');
    const content = React.useRef<string>('');
    const confirmFn = React.useRef<(isOk: boolean) => void>((isOk) => {});
    const idRemoved = React.useRef<number>(0);
    const employeeUpdate = React.useRef<Employee>();
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
            onClick={() => removeEmployee(+params.id)

         } />,
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
    const [open, setOpen] = React.useState<boolean>(false);

    const employees = useSelector<any, Employee[]>(state => state.company.employees);
    function removeEmployee(id: number) {
        title.current = "Remove Employee object?";
        const employee = employees.find(empl => empl.id == id);
        content.current = `You are going remove employee with id ${employee?.name}`;
        idRemoved.current = id;
        confirmFn.current = actualRemove;
        setOpen(true);   

    }
    function actualRemove(isOk: boolean) {
        if(isOk) {
            dispatch(employeeActions.removeEmployee(idRemoved.current));
        }
        setOpen(false);
    }
    function actualUpdate(isOk: boolean) {
        if (isOk) {
            dispatch(employeeActions.removeEmployee(employeeUpdate.current))
        }
        setOpen(false);
    }
    function getComponent(): ReactNode {
        let res: ReactNode = <Box sx={{ height: "70vh", width: "80vw" }}>
                <DataGrid columns={columns.current} rows={employees}/>
                {authUser.includes("admin") && <IconButton onClick={() => setFlAdd(true)}><PersonAdd/></IconButton>}
        </Box>
        if (flEdit) {
            res = <EmployeeForm submitFn={function (empl: Employee): boolean {
                
                title.current = "Update Employee object?";
                content.current = `You are going update Employee ${empl.name}`;
                employeeUpdate.current = empl;
                confirmFn.current = actualUpdate;
                setOpen(true);
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
        <Confirmation title={title.current} content={content.current} 
        confirmFn={confirmFn.current} open={open}></Confirmation>
    </Box>
}

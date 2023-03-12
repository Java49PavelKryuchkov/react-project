import { createSlice } from "@reduxjs/toolkit";
import { Employee } from "../models/Employee";
import { Company } from "../service/Company";
import { CompanyFirebase } from "../service/CompanyFirebase";
const company = new CompanyFirebase();
const initialState: {employees: Employee[]} = {
    employees: []
}
const employeesSlice = createSlice ({
    initialState,
    name: 'company',
    reducers: {
        setEmployee: (state, data) => {
            state.employees = data.payload
        }
    }
})

export const employeesReducer = employeesSlice.reducer;
const actions = employeesSlice.actions;
export const employeesActions: any = {
    addEmployee: (empl: Employee) => {
        return async (dispatch: any) => {
            await company.addEmployee(empl);
            const employees = await company.getAllEmployees();
            dispatch(actions.setEmployee(employees))
        }
    },
    updateEmployee: (empl: Employee) => {
        return async (dispatch: any) => {
            await company.updateEmployee(empl);
            const employees = await company.getAllEmployees();
            dispatch(actions.setEmployee(employees));
        }
    },
    removeEmployee: (id: number) => {
        return async (dispatch: any) => {
            await company.removeEmployee(id);
            const employees = await company.getAllEmployees();
            dispatch(actions.setEmployee(employees));
        }
    },
    getEmployees: () => {
        return async (dispatch: any) => {
            const employees = company.getAllEmployees();
            dispatch(actions.setEmployee(employees))
        }
    },
    addBulkEmployees: (employeesAr: Employee[]) => {
        return async (dispatch: any) => {
            employeesAr.forEach(async (empl) => await company.addEmployee(empl));
            const employees = await company.getAllEmployees();
            dispatch(actions.setEmployee(employees));
        }
    }
}

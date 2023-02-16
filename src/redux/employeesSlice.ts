import { createSlice } from "@reduxjs/toolkit";
import { Employee } from "../models/Employee";
const initialState: {employees: Employee[]} = {
    employees: []
}
const employeesSlice = createSlice ({
    initialState,
    name: 'company',
    reducers: {
        addEmployee: (state, data) => {
            state.employees.push(data.payload);
        }
    }
})

export const employeeActions = employeesSlice.actions;
export const employeesReducer = employeesSlice.reducer;
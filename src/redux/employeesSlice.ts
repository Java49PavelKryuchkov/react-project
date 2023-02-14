import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    employees: 
}
const employeesSlice = createSlice ({
    initialState,
    name: 'employees',
    reducers: {
        addEmployee: (state, data) => {
            state.employees = state.employees.slice();
            state.employees.push(data.payload);
        }
    }
})

export const employeeActions = employeesSlice.actions;
export const employeesReducer = employeesSlice.reducer;
import { configureStore } from "@reduxjs/toolkit";
import { employeesReducer } from "./employeesSlice";
import { authReducer } from "./authSlice";

export const store = configureStore ({
 reducer: {
    company: employeesReducer,
    auth: authReducer
 }
})
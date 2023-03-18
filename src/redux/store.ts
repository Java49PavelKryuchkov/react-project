import { configureStore } from "@reduxjs/toolkit";
import { employeesReducer } from "./employeesSlice";
import { authReducer } from "./authSlice";
import { codeReducer } from "./codeSlice";

export const store = configureStore ({
 reducer: {
    company: employeesReducer,
    auth: authReducer,
    errorCode: codeReducer
 }
})
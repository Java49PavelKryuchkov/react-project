import { configureStore } from "@reduxjs/toolkit";
import { employeesReducer } from "./employeesSlice";

export const store = configureStore ({
 reducer: {
    company: employeesReducer
 }
})
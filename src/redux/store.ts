import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./authSlice";
import { counterReducers } from "./counterSlice";
export const store = configureStore({
    reducer: {
        counter: counterReducers,
        auth: authReducer
    }
    
})
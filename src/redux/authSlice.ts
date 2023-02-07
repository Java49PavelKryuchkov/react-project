import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    authentificated: false
}
const authSlice = createSlice({
    initialState: initialState,
    name: "auth",
    reducers: {
        login: (state) => {
            if(!state.authentificated) {
                state.authentificated = true;
            }
        },
        logout: (state) => {
            state.authentificated = false;
        }
    }
})
export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
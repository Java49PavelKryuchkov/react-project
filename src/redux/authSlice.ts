import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    authentificated: ''
}
const authSlice = createSlice({
    initialState: initialState,
    name: "auth",
    reducers: {
        login: (state, data) => {
            if(!state.authentificated) {
                state.authentificated += data.payload;
            }
        },
        logout: (state) => {
            state.authentificated = '';
        }
    }
})
export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
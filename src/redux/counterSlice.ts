import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}
 const counterSlice = createSlice({
    initialState,
    name: "counter",
    reducers: {
        increment: (state, data) => {
            state.count+=data.payload;
        },
        decrement: (state, data) => {
            state.count-=data.payload;
        },
        reset: (state) => {
            state.count = initialState.count;
        }
    }
 })
 export const counterActions = counterSlice.actions;
 export const counterReducers = counterSlice.reducer;

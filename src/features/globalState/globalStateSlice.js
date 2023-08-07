import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    search : false
}

const globalStateSlice = createSlice({
    name: 'state',
    initialState,
    reducers: {
        searchHandler: (state)=> {
            state.search = !state.search
        }
    }
})
export const { searchHandler } = globalStateSlice.actions;
export default globalStateSlice.reducer;

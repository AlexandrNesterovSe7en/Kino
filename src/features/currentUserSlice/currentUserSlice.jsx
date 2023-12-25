import { createSlice } from "@reduxjs/toolkit";

const currentUserSlice = createSlice({
    name: 'currentUser',
    initialState: false,
    reducer: {
        // функции связанные с юзером
    }
})


export const currentUserReducer = currentUserSlice.reducer;
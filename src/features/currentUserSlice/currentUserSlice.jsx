import { createSlice } from "@reduxjs/toolkit";

const currentUserSlice = createSlice({
    name: 'currentUser',
    initialState: {
        user: null,
        isLoading: true,
    },
    reducers: {
        loginUser: (state, action) => {
            state.user = action.payload;
        },

        setLoading: (state, action) => {
            state.isLoading = action.payload;
        }
    }
})

export const { loginUser, setLoading } = currentUserSlice.actions;
export default currentUserSlice.reducer;
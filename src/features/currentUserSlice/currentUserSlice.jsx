import { createSlice } from "@reduxjs/toolkit";

const currentUserSlice = createSlice({
    name: 'currentUser',
    initialState: {
        user: null,
        isLoading: true,
        isSubscribe: false
    },
    reducers: {
        // Вход в аккаунт
        loginUser: (state, action) => {
            state.user = action.payload;
        },

        // Выход из аккаунта
        logOutUser: (state) => {
            state.user = null;
        },

        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },

        setSubscribe: (state, action) => {
            state.isSubscribe = action.payload;
        }
    }
})

export const { loginUser, logOutUser, setLoading, setSubscribe } = currentUserSlice.actions;
export default currentUserSlice.reducer;
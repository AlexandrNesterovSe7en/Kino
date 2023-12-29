import { configureStore } from "@reduxjs/toolkit";
import currentUserReducer from "../features/currentUserSlice/currentUserSlice";



export default configureStore({
    reducer: {
        currentUser: currentUserReducer,
    }
})
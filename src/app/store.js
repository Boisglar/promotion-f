import { configureStore } from "@reduxjs/toolkit";
import users from "../features/newsSlice"

export const store = configureStore({
    reducer: {
        news: users,
    }
})
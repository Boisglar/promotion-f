import { configureStore } from "@reduxjs/toolkit";
import fightersSlice from "../features/fighters.slice";
import users from "../features/newsSlice"

const store = configureStore({
    reducer: {
        fighters: fightersSlice,
        news: users
    }
})

export default store

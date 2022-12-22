import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth.slice";
import fightersSlice from "../features/fighters.slice";
import users from "../features/newsSlice"
import weightCategoriesSlice from "../features/weightCategories.slice";

const store = configureStore({
    reducer: {
        fighters: fightersSlice,
        news: users,
        wCategories: weightCategoriesSlice,
        users: authSlice,
    }
})

export default store

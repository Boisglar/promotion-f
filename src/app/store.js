import { configureStore } from "@reduxjs/toolkit";
import fightersSlice from "../features/fighters.slice";

const store = configureStore({
    reducer: {
        fighters: fightersSlice
    }
})

export default store
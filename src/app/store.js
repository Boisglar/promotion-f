import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../Features/auth.slice";
import fightersSlice from "../Features/fighters.slice";
import users from "../Features/newsSlice"
import weightCategoriesSlice from "../Features/weightCategories.slice";
import productSlice from "../Features/product.slice";
import cartSlice from "../Features/cart.slice";

const store = configureStore({
    reducer: {
        fighters: fightersSlice,
        news: users,
        wCategories: weightCategoriesSlice,
        cart: cartSlice,
        products: productSlice,
        users: authSlice,
    }
})

export default store

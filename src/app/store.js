import { configureStore } from "@reduxjs/toolkit";
import fightersSlice from "../features/fighters.slice"
import authSlice from "../features/auth.slice";
import users from "../features/newsSlice";
import weightCategoriesSlice from "../features/weightCategories.slice";
import productSlice from "../features/product.slice";
import cartSlice from "../features/cart.slice";

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

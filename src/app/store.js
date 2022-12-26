import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth.slice";
import fightersSlice from "../features/fighters.slice";
import newsSlice from "../features/newsSlice"
import weightCategoriesSlice from "../features/weightCategories.slice";
import productSlice from "../features/product.slice";
import cartSlice from "../features/cart.slice";
import commentSlice from "../features/comment.slice";

const store = configureStore({
    reducer: {
        fighters: fightersSlice,
        news: newsSlice,
        wCategories: weightCategoriesSlice,
        cart: cartSlice,
        products: productSlice,
        users: authSlice,
        comments: commentSlice
    }
})

export default store

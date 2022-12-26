import { configureStore } from "@reduxjs/toolkit";
import users from "../features/newsSlice";
import authSlice from "../Features/auth.slice";
import fightersSlice from "../Features/fighters.slice";
import newsSlice from "../Features/newsSlice"
import weightCategoriesSlice from "../Features/weightCategories.slice";
import productSlice from "../Features/product.slice";
import cartSlice from "../Features/cart.slice";
import commentSlice from "../Features/comment.slice";

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

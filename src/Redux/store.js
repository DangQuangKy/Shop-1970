import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slice/cartSlice.js";

export const store = configureStore({
    reducer: {
        cart: productReducer
    },
})
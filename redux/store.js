import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './slices/cartSlice'
// Create the Store
export const store = configureStore({
    reducer: {
        //Slice go here 
        name: cartSlice
    }
})
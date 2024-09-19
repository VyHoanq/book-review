import { createSlice } from "@reduxjs/toolkit";

// create a slice

const initialState = [];
const cartSlide = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { id, title, price, image } = action.payload;
            const existingItem = state.find((item) => item.id === id);
            if (existingItem) {
                existingItem.qty += 1;
            } else {
                state.push({ id, title, price, qty: 1, image })
            }
        },
        removeFromCart: (state, action) => {

        },
        incrementQty: (state, action) => {

        },
        decrementQty: (state, action) => {

        }
    }
})

export const { addToCart, removeFromCart, incrementQty, decrementQty } = cartSlide.actions;
export default cartSlide.reducer;
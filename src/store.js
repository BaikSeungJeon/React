import { configureStore, createSlice } from "@reduxjs/toolkit";

let cart = createSlice({
    name: 'cart',
    initialState: [
        {id: 0, name: 'iPhone', count: 2},
        {id: 1, name: 'iPad', count: 1}
    ]
})

export default configureStore({
    reducer: {
        cart: cart.reducer
    }
})
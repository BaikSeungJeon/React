import { configureStore, createSlice } from "@reduxjs/toolkit";

let cart = createSlice({
    name: 'cart',
    initialState: [
        {id: 0, name: 'iPhone', count: 2},
        {id: 1, name: 'iPad', count: 1}
    ],
    reducers : {
        addCount(state, action){
            state[action.payload].count++
        }
    }
})

export let { addCount } = cart.actions 

export default configureStore({
    reducer: {
        cart: cart.reducer
    }
})
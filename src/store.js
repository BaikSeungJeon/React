import { configureStore, createSlice } from "@reduxjs/toolkit";

let cart = createSlice({
    name: 'cart',
    initialState: [
        {id: 0, name: 'iPhone', count: 1},
        {id: 1, name: 'iPad', count: 1}
    ],
    reducers : {
        addCount(state, action){
            let findId = state.findIndex((a)=>{
                return a.id == action.payload
            })
            state[findId].count++
        },
        removeCount(state, action){
            let findId = state.findIndex((a)=>{
                return a.id == action.payload
            })
            if(state[findId].count > 0) {
                state[findId].count--
            }
            
        }
    }
})
export let { addCount, removeCount } = cart.actions 

export default configureStore({
    reducer: {
        cart: cart.reducer
    }
})
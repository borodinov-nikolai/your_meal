import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from '@reduxjs/toolkit'




interface Cart_item {
        id?: number
        image?: string;
        price?: number;
        name?: string;
        weight?: number;
        count: number;
}


export interface CartState {
    total_count: number,
    cart_items: Cart_item[],
}


export const initialState: CartState = {
    total_count: 0,
     cart_items: []
}


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
       addToCart: (state, action: PayloadAction<Cart_item>)=> {
            const cart_item = state.cart_items.find((item)=>action.payload.id === item.id)

            if(!cart_item){
                state.cart_items.push({...action.payload})
                state.total_count += action.payload.count
            } else {
                cart_item.count += action.payload.count
                state.total_count += action.payload.count
                }
       }
    }
})



export const {addToCart} = cartSlice.actions
export default cartSlice.reducer

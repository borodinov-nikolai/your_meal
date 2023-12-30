import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from '@reduxjs/toolkit'




interface Product {
        id?: number
        image?: string;
        price?: number;
        name?: string;
        weight?: number;
        quantity?: number;
}


export interface CartState {
    total_quantity: number,
    products: Product[],
}


export const initialState: CartState = {
    total_quantity: 0,
     products: []
}


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
       add_to_cart: (state, action: PayloadAction<Product>)=> {
            const arr = state.products 
        
            const item = arr.find((item)=>action.payload.id === item.id)
            if(!item){
                arr.push({...action.payload, quantity:1})
            } else {
                item.quantity && ++item.quantity 
            }
            ++state.total_quantity 
       }
    }
})



export const {add_to_cart} = cartSlice.actions
export default cartSlice.reducer

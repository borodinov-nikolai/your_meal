import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from '@reduxjs/toolkit'




interface Product {
        id?: number
        image?: string;
        price?: number;
        name?: string;
        weight?: number;
        count?: number;
}


export interface CartState {
    total_count: number,
    products: Product[],
}


export const initialState: CartState = {
    total_count: 0,
     products: []
}


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
       addToCart: (state, action: PayloadAction<Product>)=> {
            const arr = state.products 
        
            const cart_item = arr.find((item)=>action.payload.id === item.id)
            const product_quantity = action.payload.count
            if(!cart_item){
                arr.push({...action.payload})
            } else if(product_quantity && cart_item?.count) {
               product_quantity > 1 ? cart_item.count + product_quantity :  ++cart_item.count
            }
            ++state.total_count
       }
    }
})



export const {addToCart} = cartSlice.actions
export default cartSlice.reducer

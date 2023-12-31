import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Cart_item {
  id?: number;
  image?: string;
  price?: number;
  name?: string;
  weight?: number;
  count: number;
}

export interface CartState {
  total_count: number;
  total_price: number | undefined;
  cart_items: Cart_item[];
}

export const initialState: CartState = {
  total_count: 0,
  total_price: 0,
  cart_items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: (state, action: PayloadAction<Cart_item>) => {
      const cart_item = state.cart_items.find(
        (item) => action.payload.id === item.id,
      );

      if (!cart_item) {
        state.cart_items.push({ ...action.payload });
      } else {
        cart_item.count += action.payload.count;
      }
      state.total_count += action.payload.count;
      state.total_price = state.cart_items.reduce(
        (summ, item) => summ + (item.price ? item.price : 0) * item.count,
        0,
      );
    },
    minusCartItem: (state, action: PayloadAction<number | undefined>) => {
      const cart_item = state.cart_items.find(
        (item) => action.payload === item.id,
      );
      if (cart_item && cart_item.count > 0) {
        --cart_item.count;
        --state.total_count;
      }
      if (cart_item && cart_item.count <= 0) {
        state.cart_items = state.cart_items.filter(
          (item) => action.payload !== item.id,
        );
      }
      state.total_price = state.cart_items.reduce(
        (summ, item) => summ + (item.price ? item.price : 0) * item.count,
        0,
      );
    },
    plusCartItem: (state, action: PayloadAction<number | undefined>) => {
      const cart_item = state.cart_items.find(
        (item) => action.payload === item.id,
      );
      if (cart_item) {
        ++cart_item.count;
        ++state.total_count;
      }
      state.total_price = state.cart_items.reduce(
        (summ, item) => summ + (item.price ? item.price : 0) * item.count,
        0,
      );
    },
  },
});

export const { addCartItem, minusCartItem, plusCartItem } = cartSlice.actions;
export default cartSlice.reducer;

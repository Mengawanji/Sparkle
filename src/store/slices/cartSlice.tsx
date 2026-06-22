import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  id: number;
  title: string;
  price: number;
  qty: number;
  proImg?: string;
  brand?: string;
  size?: string;
}

interface CartState {
  cart: CartItem[];
}

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const item = action.payload;
      const exist = state.cart.find((p) => p.id === item.id);

      if (exist) {
        exist.qty += item.qty || 1;
      } else {
        state.cart.push({ ...item, qty: item.qty || 1 });
      }
    },

    removeFromCart(state, action: PayloadAction<number>) {
      state.cart = state.cart.filter((p) => p.id !== action.payload);
    },

    increment(state, action: PayloadAction<number>) {
      const item = state.cart.find((p) => p.id === action.payload);
      if (item) item.qty += 1;
    },

    decrement(state, action: PayloadAction<number>) {
      const item = state.cart.find((p) => p.id === action.payload);
      if (item && item.qty > 1) item.qty -= 1;
    },
  },
});

export const { addToCart, removeFromCart, increment, decrement } =
  cartSlice.actions;

export default cartSlice.reducer;
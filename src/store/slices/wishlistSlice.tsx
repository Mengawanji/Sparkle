import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface WishlistItem {
  id: string;
  title?: string;
  price?: number | string;
  [key: string]: any;
}

interface WishlistState {
  items: WishlistItem[];
  alreadyExists: boolean;
}

const initialState: WishlistState = {
  items: [],
  alreadyExists: false,
};

const wishlistSlice = createSlice({
  name: "wishlist",

  initialState,

  reducers: {
    addToWishList: (state, action: PayloadAction<WishlistItem>) => {
      const exists = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (exists) {
        state.alreadyExists = true;
      } else {
        state.items.push(action.payload);
        state.alreadyExists = false;
      }
    },

    removeFromWishList: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addToWishList, removeFromWishList } =
  wishlistSlice.actions;

export default wishlistSlice.reducer;
import { createListenerMiddleware } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { addToWishList, removeFromWishList } from "../slices/wishlistSlice";
import type { RootState } from "../index";

export const wishlistListener = createListenerMiddleware();

wishlistListener.startListening({
  actionCreator: addToWishList,

  effect: async (action, listenerApi) => {
    const state = listenerApi.getState() as RootState;
    const alreadyExists = state.wishlist.alreadyExists;

    if (alreadyExists) {
      toast.info("Already in wishlist");
    } else {
      const item = action.payload as { title?: string };
      toast.success(`${item.title ?? "Item"} added to wishlist`);
    }
  },
});

wishlistListener.startListening({
  actionCreator: removeFromWishList,

  effect: () => {
    toast.error("Removed from wishlist");
  },
});
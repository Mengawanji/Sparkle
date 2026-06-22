import { createListenerMiddleware } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { addToCart, removeFromCart } from "../slices/cartSlice";

export const cartListener = createListenerMiddleware();

cartListener.startListening({
  actionCreator: addToCart,
  effect: (action) => {
    const item = action.payload as { title?: string };

    toast.success(`${item.title ?? "Item"} added to cart`);
  },
});

cartListener.startListening({
  actionCreator: removeFromCart,
  effect: () => {
    toast.error("Removed from cart");
  },
});
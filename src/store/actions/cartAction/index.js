import { cartTypes } from "./types";

export const toggleCart = () => ({
  type: cartTypes.TOGGLE_CART_HIDDEN,
});

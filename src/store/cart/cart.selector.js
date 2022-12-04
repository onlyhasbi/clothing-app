import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const selectedCart = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectOpenedCart = createSelector(
  [selectCartReducer],
  (cart) => cart.openCart
);

export const selectCartCount = createSelector([selectedCart], (cartItems) => {
  return cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
});

export const selectCartTotal = createSelector([selectedCart], (cartItems) => {
  return cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  );
});

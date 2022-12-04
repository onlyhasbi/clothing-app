import { CART_ACTION_TYPES } from "./cart.types";

const INITIAL_STATE = {
  openCart: false,
  cartItems: [],
};

export const cartReducer = (state = INITIAL_STATE, action = {}) => {
  const { payload, type } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload,
      };
    case CART_ACTION_TYPES.SET_OPEN_CART: {
      return {
        ...state,
        openCart: payload,
      };
    }
    default:
      return state;
  }
};

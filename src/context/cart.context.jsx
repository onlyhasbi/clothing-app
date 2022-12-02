import { createContext, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.utils";

export const CartContext = createContext({
  openCart: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

const addCartItem = (cartItems, product) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === product.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === product.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...product, quantity: 1 }];
};

const removeCartItem = (cartItems, product) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === product.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== product.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === product.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, product) =>
  cartItems.filter((cartItem) => cartItem.id !== product.id);

const INITIAL_STATE = {
  openCart: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

const CART_ACTION_TYPES = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_OPEN_CART: "SET_OPEN_CART",
};

const cartReducer = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTION_TYPES.SET_OPEN_CART: {
      return {
        ...state,
        openCart: payload,
      };
    }
    default:
      throw Error(`Unhandled type ${type} in cart reducer`);
  }
};

export const CartProvider = ({ children }) => {
  const [{ openCart, cartItems, cartCount, cartTotal }, dispatch] = useReducer(
    cartReducer,
    INITIAL_STATE
  );

  const updateCartItemsReducer = (newCartItem) => {
    const newCartCount = newCartItem.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );

    const newCartTotal = newCartItem.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );

    dispatch(
      createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
        cartItems: newCartItem,
        cartCount: newCartCount,
        cartTotal: newCartTotal,
      })
    );
  };

  const addItemToCart = (product) => {
    const newCartItem = addCartItem(cartItems, product);
    updateCartItemsReducer(newCartItem);
  };

  const removeItemFromCart = (product) => {
    const newCartItem = removeCartItem(cartItems, product);
    updateCartItemsReducer(newCartItem);
  };

  const clearItemFromCart = (product) => {
    const newCartItem = clearCartItem(cartItems, product);
    updateCartItemsReducer(newCartItem);
  };

  const setIsCartOpen = (open) => {
    dispatch(createAction(CART_ACTION_TYPES.SET_OPEN_CART, open));
  };

  const value = {
    openCart,
    setIsCartOpen,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    cartItems,
    cartCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

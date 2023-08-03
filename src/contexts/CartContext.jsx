import { createContext, useReducer } from "react";
import createAction from "../utils/reducer/reducerUtils";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (item) => item.id === productToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((item) =>
      item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove) => {
  const existingCartItem = cartItems.find(
    (item) => item.id === productToRemove.id
  );

  if (existingCartItem.quantity === 1)
    return cartItems.filter((item) => item.id !== productToRemove.id);

  return cartItems.map((item) =>
    item.id === productToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};

const clearItem = (cartItems, productToClear) => {
  return cartItems.filter((item) => item.id !== productToClear.id);
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  totalPrice: 0,
});

const cartActionTypes = {
  setCartItems: "setCartItems",
  setIsCartOpen: "setIsCartOpen",
};

const initialState = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  totalPrice: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case cartActionTypes.setCartItems:
      return { ...state, ...payload };
    case cartActionTypes.setIsCartOpen:
      return { ...state, ...payload };
    default:
      throw new Error(`Unhandled type ${type} in cartReducer`);
  }
};

export const CartProvider = ({ children }) => {
  const [{ isCartOpen, cartItems, cartCount, totalPrice }, dispatch] =
    useReducer(cartReducer, initialState);

  const setIsCartOpen = (bool) => {
    dispatch(createAction(cartActionTypes.setIsCartOpen, { isCartOpen: bool }));
  };

  const updateCartItems = (newCartItems) => {
    const newCartCount = newCartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
    const newTotalPrice = newCartItems.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
    dispatch(
      createAction(cartActionTypes.setCartItems, {
        cartItems: newCartItems,
        totalPrice: newTotalPrice,
        cartCount: newCartCount,
      })
    );
  };

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItems(newCartItems);
  };

  const removeItemFromCart = (productToRemove) => {
    const newCartItems = removeCartItem(cartItems, productToRemove);
    updateCartItems(newCartItems);
  };

  const clearItemFromCart = (productToClear) => {
    const newCartItems = clearItem(cartItems, productToClear);
    updateCartItems(newCartItems);
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    cartItems,
    cartCount,
    totalPrice,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

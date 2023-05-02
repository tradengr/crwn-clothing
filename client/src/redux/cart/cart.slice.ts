import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { CategoryItem } from '../categories/categories.slice';

export type CartItem = CategoryItem & {
  quantity: number;
}

export type CartState = {
  isCartOpen: boolean;
  cartItems: CartItem[];
}

// Helper functions ----------------------------------------
const addCartItem = (product: CategoryItem , cartItems: CartItem[]): CartItem[] => {
  const newCartItems = [...cartItems];
  const existingCartItem = newCartItems.find(item => item.id === product.id);  
  if (existingCartItem) {
    existingCartItem.quantity++;
    return newCartItems;
  }
  return newCartItems.concat([{...product, quantity: 1}]);
}

const reduceCartItem = (product: CategoryItem, cartItems: CartItem[]): CartItem[] => {
  const newCartItems = [...cartItems];
  const existingCartItem = newCartItems.find(item => item.id === product.id);
  if (existingCartItem && existingCartItem.quantity === 1) 
    return removeCartItem(product, cartItems);
  if (existingCartItem)
    existingCartItem.quantity--;
    return newCartItems;
}

const removeCartItem = (product: CategoryItem, cartItems: CartItem[]): CartItem[] => {
  const newCartItems = [...cartItems];
  return newCartItems.filter(item => item.id !== product.id);
}
// ---------------------------------------------------------

const initialState: CartState = {
  isCartOpen: false,
  cartItems: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleCart(state, action: PayloadAction<boolean>) {
      state.isCartOpen = action.payload;
    },
    addItemToCart(state, action: PayloadAction<CategoryItem>) {
      state.cartItems = addCartItem(action.payload, state.cartItems);
    },
    reduceItemFromCart(state, action: PayloadAction<CategoryItem>) {
      state.cartItems = reduceCartItem(action.payload, state.cartItems);
    },
    removeItemFromCart(state, action: PayloadAction<CategoryItem>) {
      state.cartItems = removeCartItem(action.payload, state.cartItems);
    },
    clearCartItems(state) {
      state.cartItems = [];
    }
  }
});

export const cartReducer = cartSlice.reducer;
export const {
  toggleCart,
  addItemToCart,
  reduceItemFromCart,
  removeItemFromCart,
  clearCartItems,
} = cartSlice.actions;
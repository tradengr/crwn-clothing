import { createSlice } from '@reduxjs/toolkit';

// Helper functions ----------------------------------------
const addCartItem = (product, cartItems) => {
  const newCartItems = [...cartItems];
  const existingCartItem = newCartItems.find(item => item.id === product.id);  
  if (existingCartItem) {
    existingCartItem.quantity++;
    return newCartItems;
  }
  return newCartItems.concat([{...product, quantity: 1}]);
}

const reduceCartItem = (product, cartItems) => {
  const newCartItems = [...cartItems];
  const selectedItem = newCartItems.find(item => item.id === product.id);
  if (selectedItem.quantity === 1) 
    return removeCartItem(product, cartItems);
  selectedItem.quantity--;
  return newCartItems;
}

const removeCartItem = (product, cartItems) => {
  const newCartItems = [...cartItems];
  return newCartItems.filter(item => item.id !== product.id);
}
// ---------------------------------------------------------

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: INITIAL_STATE,
  reducers: {
    toggleCart(state, action) {
      state.isCartOpen = action.payload;
    },
    addItemToCart(state, action) {
      state.cartItems = addCartItem(action.payload, state.cartItems);
    },
    reduceItemFromCart(state, action) {
      state.cartItems = reduceCartItem(action.payload, state.cartItems);
    },
    removeItemFromCart(state, action) {
      state.cartItems = removeCartItem(action.payload, state.cartItems);
    }
  }
});

export const cartReducer = cartSlice.reducer;
export const {
  toggleCart,
  addItemToCart,
  reduceItemFromCart,
  removeItemFromCart,
} = cartSlice.actions;
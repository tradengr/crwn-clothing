import { CART_ACTION_TYPES } from "./cart.types";

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

export const toggleCart = (boolean) => {
  return {type: CART_ACTION_TYPES.TOGGLE_CART, payload: boolean};
}

export const addItemToCart = (product, cartItems) => {
  const newCartItems = addCartItem(product, cartItems);
  return {type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newCartItems};
}

export const reduceItemFromCart = (product, cartItems) => {
  const newCartItems = reduceCartItem(product, cartItems);
  return {type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newCartItems};
}

export const removeItemFromCart = (product, cartItems) => {
  const newCartItems = removeCartItem(product, cartItems);
  return {type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newCartItems};
}

// const updateCartItems = (newCartItems) => {
//   const newCartCount = newCartItems.reduce((acc, item) => acc + item.quantity, 0);
//   const newCartTotal = newCartItems.reduce((acc, item) => acc + (item.quantity * item.price), 0);
  
//   return {
//     type: CART_ACTION_TYPES.SET_CART_ITEMS, 
//     payload: {
//       cartItems: newCartItems,
//       cartCount: newCartCount,
//       cartTotal: newCartTotal
//     }
//   };
// }

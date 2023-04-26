import { createContext, useReducer } from "react";

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

export const CartContext = createContext({
  isCartOpen: false,
  cartItems: [],
  addItemToCart: () => {},
  reduceItemFromCart: () => {},
  removeItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

export const CART_ACTION_TYPES = {
  TOGGLE_CART: 'TOGGLE_CART',
  SET_CART_ITEMS: 'SET_CART_ITEMS'
};

const cartReducer = (state, action) => {
  const {type, payload} = action;

  switch(type) {
    case CART_ACTION_TYPES.TOGGLE_CART:
      return {...state, isCartOpen: payload};
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {...state, ...payload};
    default:
      throw new Error(`Unhandled type ${type} In userReducer`);
  }
}

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  const { isCartOpen, cartItems, cartCount, cartTotal } = state;

  const addItemToCart = (product) => {
    const newCartItems = addCartItem(product, cartItems);
    updateCartItems(newCartItems);
  }

  const reduceItemFromCart = (product) => {
    const newCartItems = reduceCartItem(product, cartItems);
    updateCartItems(newCartItems);
  }

  const removeItemFromCart = (product) => {
    const newCartItems = removeCartItem(product, cartItems);
    updateCartItems(newCartItems);
  }

  const updateCartItems = (newCartItems) => {
    const newCartCount = newCartItems.reduce((acc, item) => acc + item.quantity, 0);
    const newCartTotal = newCartItems.reduce((acc, item) => acc + (item.quantity * item.price), 0);

    dispatch({
      type: CART_ACTION_TYPES.SET_CART_ITEMS, 
      payload: {
        cartItems: newCartItems,
        cartCount: newCartCount,
        cartTotal: newCartTotal
      }
    });
  }

  const toggleCart = () => {
    dispatch({type: CART_ACTION_TYPES.TOGGLE_CART, payload: !isCartOpen});
  }

  const value = {
    isCartOpen, 
    toggleCart,
    cartItems,
    addItemToCart,
    reduceItemFromCart,
    removeItemFromCart,
    cartCount,
    cartTotal,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}
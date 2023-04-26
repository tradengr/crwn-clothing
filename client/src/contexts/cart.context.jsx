import { createContext, useEffect, useState } from "react";

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
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  reduceItemFromCart: () => {},
  removeItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const addItemToCart = (product) => {
    setCartItems(addCartItem(product, cartItems));
  }

  const reduceItemFromCart = (product) => {
    setCartItems(reduceCartItem(product, cartItems));
  }

  const removeItemFromCart = (product) => {
    setCartItems(removeCartItem(product, cartItems));
  }

  useEffect(() => {
    const newCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    setCartCount(newCartCount);
  }, [cartItems])

  useEffect(() => {
    const newCartTotal = cartItems.reduce((acc, item) => acc + (item.quantity * item.price), 0);
    setCartTotal(newCartTotal);
  }, [cartItems])

  const value = {
    isCartOpen, 
    setIsCartOpen,
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
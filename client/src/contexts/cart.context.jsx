import { createContext, useEffect, useState } from "react";

const addCartItem = (product, cartItems) => {
  const newCartItems = [...cartItems]
  const existingCartItem = newCartItems.find(item => item.id === product.id);  
  if (existingCartItem) {
    existingCartItem.quantity++;
    return newCartItems;
  }
  return newCartItems.concat([{...product, quantity: 1}]);
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const addItemToCart = (product) => {
    setCartItems(addCartItem(product, cartItems));
  }

  useEffect(() => {
    const newCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    setCartCount(newCartCount);
  }, [cartItems])

  const value = {
    isCartOpen, 
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}
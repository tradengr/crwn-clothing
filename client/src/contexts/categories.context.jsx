import { createContext, useEffect, useState } from "react";

import SHOP_DATA from '../shop-data.json';

export const CategoriesContext = createContext({
  categories: []
});

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState(SHOP_DATA);
  const value = {categories, setCategories}

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  )
}
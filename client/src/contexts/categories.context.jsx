import { createContext, useEffect, useState } from "react";

import { httpGetCategories } from "../api/serverAPI";

export const CategoriesContext = createContext({
  categories: {}
});

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState({});
  const value = {categories, setCategories}

  useEffect(() => {
    httpGetCategories().then(res => setCategories(res.data));
  }, []);

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  )
}
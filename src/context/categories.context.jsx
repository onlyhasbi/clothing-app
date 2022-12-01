import { createContext, useState, useEffect } from "react";
import { addCollection, getCategories } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
  categories: {},
  setCategories: () => {},
});

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState({});
  const value = { categories };

  useEffect(() => {
    const getCategoriesData = async () => {
      const response = await getCategories();
      if (!!response) setCategories(response);
    };
    getCategoriesData();
  }, []);

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};

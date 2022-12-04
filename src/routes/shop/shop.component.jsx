import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Category from "../category/category.component";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import {
  addCollection,
  getCategories,
} from "../../utils/firebase/firebase.utils";
import { setCategories } from "../../store/categories/categories.action";
import { useDispatch } from "react-redux";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesData = async () => {
      const response = await getCategories("categories");
      if (!!response) dispatch(setCategories(response));
    };
    getCategoriesData();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;

import CategoryItem from "../../components/category-item/category-item.component";
import Directory from "../../components/directory/directory.component";
import { CATEGORIES } from "../../model/categories.model";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Directory categories={CATEGORIES} />
      <Outlet />
    </>
  );
};

export default Home;

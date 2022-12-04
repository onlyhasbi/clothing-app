import CategoryPreview from "../../components/category-preview/category-preview.component";
import { useSelector } from "react-redux";
import { selectCategories } from "../../store/categories/categories.selector";

const CategoriesPreview = () => {
  const categories = useSelector(selectCategories);

  return (
    <>
      {Object.keys(categories).map((title) => {
        const products = categories[title];

        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </>
  );
};

export default CategoriesPreview;

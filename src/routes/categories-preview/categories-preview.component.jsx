import CategoryPreview from "../../components/category-preview/category-preview.component";
import { useSelector } from "react-redux";
import {
  selectCategories,
  selectCategoriesIsLoading,
} from "../../store/categories/categories.selector";
import Spinner from "../../components/spinner/spinner.component";

const CategoriesPreview = () => {
  const categories = useSelector(selectCategories);
  const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categories).map((title) => {
          const products = categories[title];

          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })
      )}
    </>
  );
};

export default CategoriesPreview;

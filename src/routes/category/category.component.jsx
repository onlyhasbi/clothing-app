import ProductCard from "../../components/product-card/product-card.component";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Title } from "./category.styles";
import {
  selectCategories,
  selectCategoriesIsLoading,
} from "../../store/categories/categories.selector";
import { useSelector } from "react-redux";
import Spinner from "../../components/spinner/spinner.component";

const Category = () => {
  const { category } = useParams();
  const categories = useSelector(selectCategories);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState(categories[category]);

  useEffect(() => {
    setProducts(categories[category]);
  }, [category, categories]);

  return (
    <>
      <Title>{category.toUpperCase()}</Title>
      {isLoading ? (
        <Spinner />
      ) : (
        <Container>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </Container>
      )}
    </>
  );
};

export default Category;

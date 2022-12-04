import ProductCard from "../../components/product-card/product-card.component";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Title } from "./category.styles";
import { selectCategories } from "../../store/categories/categories.selector";
import { useSelector } from "react-redux";

const Category = () => {
  const { category } = useParams();
  const categories = useSelector(selectCategories);
  const [products, setProducts] = useState(categories[category]);

  useEffect(() => {
    setProducts(categories[category]);
  }, [category, categories]);

  return (
    <>
      <Title>{category.toUpperCase()}</Title>
      <Container>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Container>
    </>
  );
};

export default Category;

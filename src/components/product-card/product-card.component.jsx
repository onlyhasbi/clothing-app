import Button, { BUTTON_TYPES_CLASSES } from "../button/button.component";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { Container, Image, Footer, Name, Price } from "./product-card.styles";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const { addItemToCart } = useContext(CartContext);
  const addToCart = () => addItemToCart(product);

  return (
    <Container>
      <Image src={imageUrl} alt={`${name}-image`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        className="card-button"
        variant={BUTTON_TYPES_CLASSES.inverted}
        onClick={addToCart}
      >
        Add to Cart
      </Button>
    </Container>
  );
};

export default ProductCard;

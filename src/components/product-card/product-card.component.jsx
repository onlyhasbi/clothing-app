import Button, { BUTTON_TYPES_CLASSES } from "../button/button.component";
import { Container, Image, Footer, Name, Price } from "./product-card.styles";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectedCart } from "../../store/cart/cart.selector";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const cartItems = useSelector(selectedCart);
  const dispatch = useDispatch();

  const addToCart = () => dispatch(addItemToCart(cartItems, product));

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

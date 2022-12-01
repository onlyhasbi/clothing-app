import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import {
  Container,
  ImageContainer,
  Image,
  Arrow,
  Value,
  RemoveButton,
  Name,
  Quantity,
  Price,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
  const { imageUrl, name, price, quantity } = cartItem;
  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  const incrementCartItemHandler = () => addItemToCart(cartItem);
  const decrementCartItemHandler = () => removeItemFromCart(cartItem);
  const clearItemHandler = () => clearItemFromCart(cartItem);

  return (
    <Container>
      <ImageContainer>
        <Image src={imageUrl} alt={`iamge-${name}`} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={decrementCartItemHandler}>&#10094;</Arrow>
        <Value> {quantity}</Value>
        <Arrow onClick={incrementCartItemHandler}>&#10095;</Arrow>
      </Quantity>
      <Price>{price}</Price>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </Container>
  );
};

export default CheckoutItem;

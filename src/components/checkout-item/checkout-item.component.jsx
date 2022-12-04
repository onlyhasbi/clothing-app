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

import { useSelector, useDispatch } from "react-redux";
import { selectedCart } from "../../store/cart/cart.selector";
import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from "../../store/cart/cart.action";

const CheckoutItem = ({ cartItem }) => {
  const { imageUrl, name, price, quantity } = cartItem;
  const cartItems = useSelector(selectedCart);
  const dispatch = useDispatch();

  const incrementCartItemHandler = () =>
    dispatch(addItemToCart(cartItems, cartItem));
  const decrementCartItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));
  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));

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

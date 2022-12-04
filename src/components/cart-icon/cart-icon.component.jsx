import { Container, ShoppingIcon, Count } from "./cart-icon.styles";
import { useDispatch, useSelector } from "react-redux";
import { setIsCartOpen } from "../../store/cart/cart.action";
import {
  selectOpenedCart,
  selectCartCount,
} from "../../store/cart/cart.selector";

const CartIcon = () => {
  const openedCart = useSelector(selectOpenedCart);
  const cartCount = useSelector(selectCartCount);
  const dispatch = useDispatch();

  const openHandler = () => {
    dispatch(setIsCartOpen(!openedCart));
  };

  return (
    <Container onClick={openHandler}>
      <ShoppingIcon />
      <Count>{cartCount}</Count>
    </Container>
  );
};

export default CartIcon;

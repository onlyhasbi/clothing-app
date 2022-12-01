import { CartContext } from "../../context/cart.context";
import { useContext } from "react";
import { Container, ShoppingIcon, Count } from "./cart-icon.styles";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const openHandler = () => setIsCartOpen(!isCartOpen);

  return (
    <Container onClick={openHandler}>
      <ShoppingIcon />
      <Count>{cartCount}</Count>
    </Container>
  );
};

export default CartIcon;

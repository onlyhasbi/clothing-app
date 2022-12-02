import { CartContext } from "../../context/cart.context";
import { useContext } from "react";
import { Container, ShoppingIcon, Count } from "./cart-icon.styles";

const CartIcon = () => {
  const { openCart, setIsCartOpen, cartCount } = useContext(CartContext);
  const openHandler = () => {
    setIsCartOpen(!openCart);
  };

  return (
    <Container onClick={openHandler}>
      <ShoppingIcon />
      <Count>{cartCount}</Count>
    </Container>
  );
};

export default CartIcon;

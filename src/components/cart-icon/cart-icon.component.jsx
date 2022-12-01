import { CartContext } from "../../context/cart.context";
import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { Container, Label, Count } from "./cart-icon.styles";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const openHandler = () => setIsCartOpen(!isCartOpen);
  const { cartCount } = useContext(CartContext);

  return (
    <Container onClick={openHandler}>
      <Label>
        <ShoppingIcon />
      </Label>
      <Count>{cartCount}</Count>
    </Container>
  );
};

export default CartIcon;

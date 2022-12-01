import { useContext } from "react";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { CartContext } from "../../context/cart.context";
import { useNavigate } from "react-router-dom";
import { DropdownContainer, DropdownItem } from "./cart-dropdown.styles";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const checkoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <DropdownContainer>
      <DropdownItem>
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </DropdownItem>
      <Button onClick={checkoutHandler}>GO TO CHECKOUT</Button>
    </DropdownContainer>
  );
};

export default CartDropdown;

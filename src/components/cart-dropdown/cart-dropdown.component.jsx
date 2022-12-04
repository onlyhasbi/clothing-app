import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useNavigate } from "react-router-dom";
import {
  DropdownContainer,
  DropdownItem,
  EmptyMessage,
} from "./cart-dropdown.styles";
import { useSelector } from "react-redux";
import { selectedCart } from "../../store/cart/cart.selector";

const CartDropdown = () => {
  const cartItems = useSelector(selectedCart);

  const navigate = useNavigate();

  const checkoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <DropdownContainer>
      <DropdownItem>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </DropdownItem>
      <Button onClick={checkoutHandler}>GO TO CHECKOUT</Button>
    </DropdownContainer>
  );
};

export default CartDropdown;

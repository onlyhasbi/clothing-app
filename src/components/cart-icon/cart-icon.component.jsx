import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../context/cart.context";
import { useContext } from "react";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const openHandler = () => setIsCartOpen(!isCartOpen);
  const { cartCount } = useContext(CartContext);

  return (
    <div className="cart-icon-container">
      <ShoppingIcon className="shopping-icon" onClick={openHandler} />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;

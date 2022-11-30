import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  const tableHeader = ["Product", "Description", "Quantity", "Price", "Remove"];

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        {tableHeader.map((item) => (
          <div key={item} className="header-block">
            <span>{item}</span>
          </div>
        ))}
      </div>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} cartItem={item} />
      ))}
      <span className="total">Total : ${cartTotal}</span>
    </div>
  );
};

export default Checkout;

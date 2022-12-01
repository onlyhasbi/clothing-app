import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { Container, Header, Block, Total } from "./checkout.styles";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  const tableHeader = ["Product", "Description", "Quantity", "Price", "Remove"];

  return (
    <Container>
      <Header>
        {tableHeader.map((item) => (
          <Block key={item}>
            <span>{item}</span>
          </Block>
        ))}
      </Header>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} cartItem={item} />
      ))}
      <Total>Total : ${cartTotal}</Total>
    </Container>
  );
};

export default Checkout;

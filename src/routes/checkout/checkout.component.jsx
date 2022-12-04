import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { Container, Header, Block, Total } from "./checkout.styles";
import { useSelector } from "react-redux";
import { selectedCart, selectCartTotal } from "../../store/cart/cart.selector";

const Checkout = () => {
  const cartItems = useSelector(selectedCart);
  const cartTotal = useSelector(selectCartTotal);
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

import { Container, Image, Details, Name, Price } from "./cart-item.styles.jsx";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <Container>
      <Image src={imageUrl} alt={`image-${name}`} />
      <Details>
        <Name>{name}</Name>
        <Price>
          {quantity} x {price}
        </Price>
      </Details>
    </Container>
  );
};

export default CartItem;

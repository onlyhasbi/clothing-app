import Button from "../button/button.component";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const { addItemToCart } = useContext(CartContext);

  const addToCart = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}-image`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button variant="inverted" onClick={addToCart}>
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCard;

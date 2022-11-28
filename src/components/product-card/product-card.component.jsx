import "./product-card.styles.scss";
import Button from "../button/button.component";

const ProductCard = ({ product: { name, imageUrl, price } }) => {
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}-image`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button variant="inverted">Add to Cart</Button>
    </div>
  );
};

export default ProductCard;

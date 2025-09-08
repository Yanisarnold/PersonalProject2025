import '../styles/components/productcard.css';

type Product = {
  name: string;
  description: string;
  image: string;
  price: number;
  tag?: string;
};

type ProductCardProps = {
  product: Product;
  onClick?: () => void;
};

const ProductCard = ({ product, onClick }: ProductCardProps) => {
  return (
    <div className="product-card" onClick={onClick}>
      <div className="img-container">
        <img className="product-img" src={product.image} alt={product.name} />
      </div>
      <div className="card-content">
        {product.tag && (
          <div className="product-tag">
            <button className="product-tag-button">{product.tag}</button>
          </div>
        )}

        <h3>{product.name}</h3>
        {/* <p>{product.description}</p> */}
        <span>{product.price.toFixed(2)}CFA</span>
      </div>
    </div>
  );
};

export default ProductCard;

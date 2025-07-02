import '../styles/components/productcard.css';

type Product = {
  name: string;
  description: string;
  image: string;
  price: number;
};

type ProductCardProps = {
  product: Product;
  onClick?: () => void; 
};


const ProductCard = ({ product, onClick}: ProductCardProps) => {
  return (
    <div className="product-card" onClick={onClick} >
      <div className="img-container">
        <img src={product.image} alt={product.name} />
      </div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <span>{product.price.toFixed(2)}CFA</span>
    </div>
  );
};

export default ProductCard;

import "../styles/components/productcard.css"

type Product = {
    name: string;
    description: string;
    image: string;
    price: number;
  };
  
  type ProductCardProps = {
    product: Product;
  };

const ProductCard = ({ product } : ProductCardProps) => {

  return (
      <div className="product-card">
          <div className="img-container"> <img src={product.image} alt={product.name} /></div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <span>${product.price.toFixed(2)}</span>
    </div>
  );
}


export default ProductCard;
import { useParams } from "react-router-dom";
import "../styles/components/productcard.css"


const changePrice = (price: number) => {
  // Placeholder for price change logic
  console.log(`Price changed to ${price}`);
}

const products = [
  {
    id: 1,
    name: 'Burger',
    description:
      'Dockounou is a traditional dish made from fermented cassava, often served with spicy sauce.',
    image: 'https://via.placeholder.com/150',
    price: 9.99,
  },
  {
    id: 2,
    name: 'Pizza',
    description:
      'Dockounou is a traditional dish made from fermented cassava, often served with spicy sauce.',
    image: 'https://via.placeholder.com/150',
    price: 12.5,
  },
  {
    id: 3,
    name: 'Pasta',
    description:
      'Dockounou is a traditional dish made from fermented cassava, often served with spicy sauce.',
    image: 'https://via.placeholder.com/150',
    price: 8.0,
  },{
    id: 4,
    name: 'Pasta',
    description:
      'Dockounou is a traditional dish made from fermented cassava, often served with spicy sauce.',
    image: 'https://via.placeholder.com/150',
    price: 8.0,
  },
  {
    id: 5,
    name: 'Burger',
    description:
      'Dockounou is a traditional dish made from fermented cassava, often served with spicy sauce.',
    image: 'https://via.placeholder.com/150',
    price: 9.99,
  },
  {
    id: 6,
    name: 'Pizza',
    description:
      'Dockounou is a traditional dish made from fermented cassava, often served with spicy sauce.',
    image: 'https://via.placeholder.com/150',
    price: 12.5,
  },
  {
    id: 7,
    name: 'Pasta',
    description:
      'Dockounou is a traditional dish made from fermented cassava, often served with spicy sauce.',
    image: 'https://via.placeholder.com/150',
    price: 8.0,
  },{
    id: 8,
    name: 'Pasta',
    description:
      'Dockounou is a traditional dish made from fermented cassava, often served with spicy sauce.',
    image: 'https://via.placeholder.com/150',
    price: 8.0,
  }
];
const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((product) => product.id.toString() === id);
  if (!product) {
    return <div>Product not found</div>;
  }

  const addToCart = () => { 
    // Logic to add the product to the cart
    console.log(`${product.name} added to cart`);
  }
  return (
    <div className="product-detail-container">
      
      <section className="dpd-mini">

      <div className="pdp-img-container">
              <img src={product.image} alt="product img" />
        </div>
        
        <div className="pdp-details-container">
          <div className="productDetails">

          <h2>{product.name}</h2>
          <button className="pdp-tag">tag</button>
          <h2>{product.price}CFA</h2>
              <p className="pdp-area">yopougon</p>
          </div>
          
              <div className="qty-container">
                  <p className="pdp-qty">qty</p>
                  <select name="selectQuantity" id="pdp-qty-select" onClick={() => changePrice(1)}>
                      <option value="1" defaultValue={1} >1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                  </select>
                  <button className="pdp-addTocart" onClick={addToCart}>Ajouter</button>
              </div>
          <p className="pdp-description">{ product.description}</p>
          </div>
      </section>
    </div>
  );
}


export default ProductDetail;
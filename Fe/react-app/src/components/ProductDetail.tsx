import { useParams } from 'react-router-dom';
import '../styles/components/productcard.css';
import productData from '../data/productlisting.json';
import { useState } from 'react';
const changePrice = (price: number) => {
  // Placeholder for price change logic
  console.log(`Price changed to ${price}`);
};

type Product = {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  commune?: string;
};

const ProductDetail = () => {
  // changePrice(1) according to the selected quantity

  const [productList, setProduct] = useState<Product[]>(productData);
  const [quantitySelect, setQuantitySelect] = useState<number>(1);
  const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newQty = Number(e.target.value);
    setQuantitySelect(newQty);
    // console.log(`Price changed to ${product?.price * quantitySelect} CFA`);
  };

  const searchForProduct = (id: number) => {
    const product = productList.find((product) => product.id === id);
    console.log(product);
    return product;
  };
  const { id } = useParams<{ id: string }>();
  const product = productData.find((product) => product.id.toString() === id);
  if (!product) {
    return <div>Product not found</div>;
  }

  const addToCart = () => {
    // Logic to add the product to the cart
    console.log(`${product.name + 'qty:' + quantitySelect} added to cart`);
  };
  const totalPrice = product.price * quantitySelect;
  const currency = totalPrice > 500 ? `${totalPrice + ' CFA'}` : `${totalPrice + ' FR'}`;
  return (
    <div className="product-detail-container">
      <section className="dpd-mini">
        <div className="pdp-img-container">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="pdp-details-container">
          <div className="productDetails">
            <h2>{product.name}</h2>
            <button className="pdp-tag">Doux</button>
            <h2>{currency}</h2>
            <p className="pdp-area" onClick={() => changePrice(2)}>
              {product.commune}
            </p>
          </div>

          <div className="qty-container">
            <label htmlFor="pdp-qty-select">qty</label>
            <select
              name="selectQuantity"
              id="pdp-qty-select"
              value={quantitySelect}
              onChange={handleQuantityChange}
            >
              {
                // Dynamically generate options based on a range
                Array.from({ length: 10 }, (_, index) => (
                  <option key={index + 1} value={index + 1}>
                    {index + 1}
                  </option>
                ))
              }
            </select>
            <button className="pdp-addTocart" onClick={addToCart}>
              Ajouter
            </button>
          </div>
          <p className="pdp-description" onClick={() => searchForProduct(2)}>
            {product.description}
          </p>
          <p></p>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;

import '../styles/components/productcard.css';
import ProductCard from '../components/productCard';
import { Link } from 'react-router-dom';
const ProductList = () => {
  const prodDetailPageClickHandler = (id:number) => {
    // Placeholder for product detail page click handler
    console.log('Product detail page clicked' + id);
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
  return (
    <div>
      <h1 className="listingTitle">Product Listing</h1>

      <div className="filtering-container">
        <div className="search-container">
          <input type="search" name="searchForFood" id="goChopSearch" />
        </div>
        <div className="filter-btn">
        <button className="new-filter">New</button>
          <button className="price-filter">Prix</button>
          <button className="food-filter">Plats</button>
          <button className="commune-filter">Commune</button>
        </div>
      </div>
      <div className="productListContainer">
        {products.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`}>
            <ProductCard product={product} key={product.id} onClick={() => prodDetailPageClickHandler(product.id)} />
            </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

import '../styles/components/productcard.css';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';
import productData from '../data/productlisting.json';
import { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
const ProductList = () => {
  type Product = {
    id: number;
    name: string;
    description: string;
    image: string;
    price: number;
    tag?: string;
  };

  const [activeTag, setActiveTag] = useState<string>('');
  const [searchValue, setSearhhValue] = useState<string>('');
  const [productList, setProductList] = useState<Product[]>(productData);
  const [filterProduct, setFilterProduct] = useState<Product[]>(productData);

  const filterProductByTag = (tag: string) => {
    if (tag ==  activeTag) {
      setFilterProduct(productData);
      setActiveTag('');
      return;
    }
    const filteredProducts = productList.filter(
      (product) => product.tag?.toUpperCase() === tag.toUpperCase()
    );
    setFilterProduct(filteredProducts);
    setActiveTag(tag);
    return;
  };

  const searchProduct = (searchValue: string) => {
    if (searchValue === '') {
      setFilterProduct(productList);
      return;
    }
    const filteredProducts = productList.filter((product) =>
      product.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilterProduct(filteredProducts);
  };

  const prodDetailPageClickHandler = (id: number) => {
    // Placeholder for product detail page click handler
    console.log('Product detail page clicked' + id);
  };

  useEffect(() => {
    searchProduct(searchValue);
  }, [searchValue]);

  return (
    <div>
      <div className="filtering-container">
        <div className="search-container">
          <input
            type="search"
            name="searchForFood"
            id="goChopSearch"
            value={searchValue}
            onChange={(e) => setSearhhValue(e.target.value)}
          />
          <FaSearch className="search-icon" />
        </div>
        <div className="filter-btn">
          <button className="new-filter" onClick={() => filterProductByTag('new')}>
            New
          </button>
          <button className="price-filter" onClick={() => filterProductByTag('Prix')}>
            Prix
          </button>
          <button className="food-filter" onClick={() => filterProductByTag('Plats')}>
            Plats
          </button>
          <button className="commune-filter" onClick={() => filterProductByTag('Commune')}>
            Commune
          </button>
        </div>
      </div>
      <div className={activeTag == "new" ? " productListContainer" : "productListContainer"}>
      {filterProduct.length > 0 ? (
    filterProduct.map((product) => (
      <Link key={product.id} to={`/product/${product.id}`}>
        <ProductCard
          product={product}
          key={product.price}
          onClick={() => prodDetailPageClickHandler(product.id)}
        />
      </Link>
    ))
  ) : (
    <h1 className="no-products-message">No products found.</h1>
  )}
      </div>
    </div>
  );
};

export default ProductList;

import ProductCard from '../components/ProductCard';
import '../styles/components/productcard.css';
import productData from '../data/productlisting.json';
import '../styles/components/maincontent.css';
import Banner from './Banner';
const MainContent = () => {
  return (
    <div className="main-page-container">
      <div className="gotchopfoodList">
        <Banner pageTitle="GoChop Food List" />
      </div>
      <div className="listOfProduct">
        {productData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default MainContent;

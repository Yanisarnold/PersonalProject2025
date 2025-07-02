import ProductCard from './productCard';

const MainContent = () => {
  return (
    <>
      <div className="gotchopfoodList">
        <div className="gotchopfoodListItem">
          <h3>Food Item 1</h3>
          <p>Description of Food Item 1</p>
        </div>
        <div className="gotchopfoodListItem">
          <h3>Food Item 2</h3>
          <p>Description of Food Item 2</p>
        </div>
        <div className="gotchopfoodListItem">
          <h3>Food Item 3</h3>
          <p>Description of Food Item 3</p>
        </div>

        <ProductCard
          product={{
            name: 'Sample Product',
            description: 'This is a sample product description.',
            image: 'https://via.placeholder.com/150',
            price: 19.99,
          }}
        />
      </div>
    </>
  );
};

export default MainContent;

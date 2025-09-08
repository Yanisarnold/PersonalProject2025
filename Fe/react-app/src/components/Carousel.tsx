import React, { useState } from 'react';
import productData from '../data/productlisting.json';
const Carousel = ({ items }: { items: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImg, setImg] = useState(productData[0].image);

  //  const searchForProduct = (id: number) => {
  //   const product = productList.find((product) => product.id === id);
  //   console.log(product);
  //   return product;
  // }
  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % items.length;
      setImg(productData[newIndex].image);
      return newIndex;
    });
  };
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? items.length - 1 : prevIndex - 1;
      setImg(productData[newIndex].image); // Update the image
      return newIndex;
    });
  };

  return (
    <div className="goChopCarousel">
      <div className="goChopCarouselItem">
        <img src={currentImg} alt={items[currentIndex]} className="carousel-Img" />
      </div>
      <div className="gochopCarousel-controls">
        <button onClick={handlePrev}>prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Carousel;

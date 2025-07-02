import React, { useState } from 'react';

const Carousel = ({ items }: { items: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <div className="goChopCarousel">
      <div className="goChopCarouselItem">
        <h3>{items[currentIndex]}</h3>
      </div>
      <div className="gochopCarousel-controls">
        <button onClick={handlePrev}>prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Carousel;

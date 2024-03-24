import React, { useState, useEffect } from 'react';
import './Slider.css'; // CSS file for styling


const Slider = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide(current => (current + 1) % images.length);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  const prevSlide = () => {
    setCurrentSlide(current => (current === 0 ? images.length - 1 : current - 1));
  };

  const nextSlide = () => {
    setCurrentSlide(current => (current + 1) % images.length);
  };

  return (
    <div className="slider-container">
      <button className="prev" onClick={prevSlide}>&#10094;</button>
      <button className="next" onClick={nextSlide}>&#10095;</button>
      <div className="slides">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            style={{ display: index === currentSlide ? 'block' : 'none' }}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
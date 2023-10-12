// ImageCarousel.js
import React, { useState } from 'react';

function ImageCarousel({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="image-carousel">
      <div className="image-container">
        <img src={images[currentImageIndex].url} alt={images[currentImageIndex].alt} />
      </div>
      <div className="navigation-buttons">
        <button onClick={prevImage}>Anterior</button>
        <button onClick={nextImage}>Siguiente</button>
      </div>
    </div>
  );
}

export default ImageCarousel;

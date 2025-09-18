import React, { useState, useEffect } from 'react';

// Import your slider images
import sliderImg1 from '../assets/img/slider_img_1.svg';
import sliderImg2 from '../assets/img/slider_img_2.svg'; // Assuming these exist
import sliderImg3 from '../assets/img/slider_img_3.svg'; // Assuming these exist
import sliderImg4 from '../assets/img/slider_img_4.svg'; // Assuming these exist

const sliderImages = [
  sliderImg1,
  sliderImg2,
  sliderImg3,
  sliderImg4,
];

const ImageSlider = ({ interval = 5000 }) => { // Default interval of 5 seconds
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        (prevIndex + 1) % sliderImages.length
      );
    }, interval);

    return () => clearInterval(timer); // Cleanup on component unmount
  }, [interval]);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-2xl">
      {sliderImages.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slider Image ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      {/* Optional: Navigation dots or arrows could be added here */}
    </div>
  );
};

export default ImageSlider;

import React from 'react';

const HeroBanner = ({ image, title }) => {
  return (
    <div className="relative h-[400px] w-full overflow-hidden">
      <img 
        src={image} 
        alt="Small Animal Services" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
        <h1 className="text-white text-center text-5xl md:text-6xl font-bold drop-shadow-lg">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default HeroBanner;
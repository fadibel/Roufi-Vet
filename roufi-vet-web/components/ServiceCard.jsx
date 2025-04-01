import React from 'react';

const ServiceCard = ({ title, image, alt }) => {
  return (
    <div className="  overflow-hidden  transition-transform hover:scale-105">
      <div className=" overflow-hidden">
        <img 
          src={image} 
          alt={alt} 
          className="w-full h-full object-cover"
        //   onError={(e) => {
        //     e.target.src = '/placeholder.svg';
        //   }}
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-roufi-green font-semibold text-xl">{title}</h3>
      </div>
    </div>
  );
};

export default ServiceCard;
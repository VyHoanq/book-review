import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

export default function StarRating({ register, name, setValue }) {
  const [rating, setRating] = useState(0);

  const handleClick = (value) => {
    setRating(value);
    setValue(name, value); 
  };

  return (
    <div className="flex mt-4">
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        return (
          <FaStar
            key={index}
            size={24}
            onClick={() => handleClick(starValue)}
            className={`cursor-pointer ${starValue <= rating ? 'text-yellow-500' : 'text-gray-400'}`}
          />
        );
      })}
    </div>
  );
}

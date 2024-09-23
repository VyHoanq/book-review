import { Star } from 'lucide-react';
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

export default function StarRating({ register, name, setValue }) {
  const [rating, setRating] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(0);
  const [selectedStar, setSelectedStar] = useState(0);


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
      {/* <div className='flex'>
        {Array.from({ length: 5 }, (_, index) => (
          <Star
            key={index}
            className={`text-yellow-500 w-6 h-6 mr-3 ${hoveredStar > index || selectedStar > index ? 'fill-yellow-500' : ''}`}
            onMouseEnter={() => setHoveredStar(index + 1)}
            onMouseLeave={() => setHoveredStar(selectedStar)}
            onClick={() => setSelectedStar(index + 1)}
          />
        ))}
      </div> */}
    </div>
  );
}

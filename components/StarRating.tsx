
import React from 'react';
import { Icon } from './Icon';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
}

export const StarRating: React.FC<StarRatingProps> = ({ rating, maxRating = 5 }) => {
  return (
    <div className="flex items-center">
      {Array.from({ length: maxRating }, (_, index) => {
        const isFilled = index < Math.round(rating);
        return (
          <Icon
            key={index}
            name="star"
            className={`w-4 h-4 ${isFilled ? 'text-amber-400 fill-current' : 'text-slate-500'}`}
          />
        );
      })}
    </div>
  );
};

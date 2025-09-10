
import React from 'react';
import { Doctor } from '../types';
import { Card } from './Card';
import { StarRating } from './StarRating';
import { Icon } from './Icon';
import { Button } from './Button';

interface DoctorCardProps {
  doctor: Doctor;
  onSelect: (doctor: Doctor) => void;
}

export const DoctorCard: React.FC<DoctorCardProps> = ({ doctor, onSelect }) => {
  return (
    <Card className="p-4 hover:border-cyan-400/50 hover:shadow-cyan-500/10 cursor-pointer" onClick={() => onSelect(doctor)}>
      <div className="flex gap-4">
        <img src={doctor.imageUrl} alt={doctor.name} className="w-24 h-24 rounded-full border-4 border-slate-600 object-cover" />
        <div className="flex-1">
          <h3 className="text-lg font-bold text-white">{doctor.name}</h3>
          <p className="text-cyan-400 font-medium">{doctor.specialty}</p>
          <div className="flex items-center gap-2 mt-1">
            <StarRating rating={doctor.rating} />
            <span className="text-sm text-slate-400">({doctor.reviews} reviews)</span>
          </div>
          <div className="flex items-center gap-2 mt-2 text-slate-400 text-sm">
            <Icon name="map-pin" className="w-4 h-4" />
            <span>{doctor.location.address.split(',')[1]}</span>
          </div>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-slate-700/50 flex justify-between items-center">
        <div className="text-sm text-slate-300">
            <span className="font-semibold">Next available: </span>
            <span className="text-white">Tomorrow</span>
        </div>
        <Button variant="primary" className="px-3 py-1.5 text-sm" onClick={(e) => { e.stopPropagation(); onSelect(doctor);}}>
          View Profile
        </Button>
      </div>
    </Card>
  );
};

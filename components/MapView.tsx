
import React from 'react';
import { Doctor } from '../types';
import { Card } from './Card';
import { Icon } from './Icon';

interface MapViewProps {
  doctors: Doctor[];
  onSelectDoctor: (doctor: Doctor) => void;
}

// Simple normalization function to fit coordinates into a 0-100 range
const normalize = (value: number, min: number, max: number) => {
    return ((value - min) / (max - min)) * 100;
}

export const MapView: React.FC<MapViewProps> = ({ doctors, onSelectDoctor }) => {
    // Determine bounds for normalization
    const latitudes = doctors.map(d => d.location.lat);
    const longitudes = doctors.map(d => d.location.lng);
    const minLat = Math.min(...latitudes);
    const maxLat = Math.max(...latitudes);
    const minLng = Math.min(...longitudes);
    const maxLng = Math.max(...longitudes);

  return (
    <Card className="h-[600px] w-full p-2 relative overflow-hidden animate-fade-in">
        {/* Fake Map Background */}
        <div 
          className="absolute inset-0 bg-slate-800 opacity-50"
          style={{ backgroundImage: `url('https://picsum.photos/seed/mapbg/1200/800')`, backgroundSize: 'cover', filter: 'grayscale(80%) brightness(50%)' }}
        ></div>

        {/* Doctor Pins */}
        {doctors.map(doctor => {
            const top = 100 - normalize(doctor.location.lat, minLat, maxLat);
            const left = normalize(doctor.location.lng, minLng, maxLng);

            return (
                <div
                    key={doctor.id}
                    className="absolute group"
                    style={{ top: `${top}%`, left: `${left}%`, transform: 'translate(-50%, -100%)' }}
                >
                    <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-48 bg-slate-900/80 backdrop-blur-md text-white p-2 rounded-lg text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <p className="font-bold">{doctor.name}</p>
                        <p className="text-cyan-400">{doctor.specialty}</p>
                        <button onClick={() => onSelectDoctor(doctor)} className="text-amber-300 mt-1 text-left w-full">View Profile &rarr;</button>
                    </div>
                    <Icon name="map-pin" className="w-8 h-8 text-cyan-400 fill-current drop-shadow-lg cursor-pointer transform group-hover:scale-125 transition-transform" />
                </div>
            );
        })}
    </Card>
  );
};

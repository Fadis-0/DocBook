
import React from 'react';
import { Doctor } from '../types';
import { Card } from './Card';
import { Button } from './Button';
import { Icon } from './Icon';
import { StarRating } from './StarRating';

interface DoctorProfileProps {
  doctor: Doctor;
  onBack: () => void;
  onSchedule: () => void;
}

export const DoctorProfile: React.FC<DoctorProfileProps> = ({ doctor, onBack, onSchedule }) => {
  return (
    <div className="animate-fade-in">
        <Button variant="ghost" onClick={onBack} className="mb-4">
            <Icon name="arrow-left" className="w-5 h-5"/>
            Back to Search
        </Button>

        <Card className="p-6">
            <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0 text-center">
                    <img src={doctor.imageUrl} alt={doctor.name} className="w-40 h-40 rounded-full border-4 border-slate-600 object-cover mx-auto" />
                    <h2 className="text-2xl font-bold text-white mt-4">{doctor.name}</h2>
                    <p className="text-cyan-400 text-lg">{doctor.specialty}</p>
                    <div className="flex justify-center items-center gap-2 mt-2">
                        <StarRating rating={doctor.rating} />
                        <span className="text-sm text-slate-400">({doctor.reviews} reviews)</span>
                    </div>
                     <Button variant="primary" className="w-full mt-6" onClick={onSchedule}>
                        <Icon name="calendar" className="w-5 h-5"/>
                        Schedule Appointment
                    </Button>
                </div>
                <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white border-b border-slate-700 pb-2 mb-4">About</h3>
                    <p className="text-slate-300 leading-relaxed">{doctor.bio}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                        <Card className="p-4 !bg-slate-800/40">
                            <h4 className="font-semibold text-slate-200 mb-2 flex items-center gap-2"><Icon name="check" className="w-5 h-5 text-cyan-400" /> Accepted Insurances</h4>
                            <ul className="space-y-1">
                                {doctor.insurances.map(ins => <li key={ins} className="text-slate-400 text-sm">{ins}</li>)}
                            </ul>
                        </Card>
                        <Card className="p-4 !bg-slate-800/40">
                             <h4 className="font-semibold text-slate-200 mb-2 flex items-center gap-2"><Icon name="clock" className="w-5 h-5 text-cyan-400" /> Availability</h4>
                            <ul className="space-y-1">
                                {doctor.availability.map(day => <li key={day} className="text-slate-400 text-sm">{day}</li>)}
                            </ul>
                        </Card>
                    </div>

                    <div className="mt-6">
                        <Card className="p-4 !bg-slate-800/40">
                             <h4 className="font-semibold text-slate-200 mb-2 flex items-center gap-2"><Icon name="map-pin" className="w-5 h-5 text-cyan-400" /> Location</h4>
                             <p className="text-slate-300">{doctor.location.address}</p>
                             <div className="h-32 mt-2 rounded-lg bg-slate-700/50">
                                {/* Placeholder for a map snippet */}
                             </div>
                        </Card>
                    </div>
                </div>
            </div>
        </Card>
    </div>
  );
};

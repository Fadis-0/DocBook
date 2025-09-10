import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Doctor } from '../types';
import { Card } from './Card';
import { Button } from './Button';
import { Icon } from './Icon';

interface AppointmentModalProps {
  doctor: Doctor;
  onClose: () => void;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({ doctor, onClose }) => {
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    const [selectedTime, setSelectedTime] = useState<string | null>(null);

    const timeSlots = ["09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", "03:00 PM", "04:00 PM"];

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEsc);

        return () => {
            document.body.style.overflow = 'auto';
            window.removeEventListener('keydown', handleEsc);
        };
    }, [onClose]);

    const handleConfirm = () => {
        if(selectedTime){
            alert(`Appointment confirmed with ${doctor.name} on ${selectedDate.toDateString()} at ${selectedTime}.`);
            onClose();
        } else {
            alert('Please select a time slot.');
        }
    }
    
    const modalContent = (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in" onClick={onClose}>
      <Card className="w-full max-w-md p-6 border-cyan-400/50 relative animate-scale-in" onClick={(e) => e.stopPropagation()}>
        <Button variant="ghost" className="absolute top-2 right-2 !p-2" onClick={onClose}>
          <Icon name="x" className="w-5 h-5" />
        </Button>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white">Schedule with {doctor.name}</h2>
          <p className="text-cyan-400">{doctor.specialty}</p>
        </div>

        <div className="mt-6">
            <h3 className="font-semibold text-slate-200 mb-2">Select a Date</h3>
            {/* A real implementation would use a calendar library */}
            <div className="bg-slate-800/50 p-3 rounded-lg text-white text-center">
                {selectedDate.toDateString()}
            </div>
        </div>

        <div className="mt-4">
            <h3 className="font-semibold text-slate-200 mb-2">Select a Time</h3>
            <div className="grid grid-cols-3 gap-2">
                {timeSlots.map(time => (
                    <button 
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`p-2 rounded-md text-sm transition-colors ${selectedTime === time ? 'bg-cyan-500 text-white font-bold' : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50'}`}
                    >
                        {time}
                    </button>
                ))}
            </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-700/50">
            <Button variant="primary" className="w-full" onClick={handleConfirm} disabled={!selectedTime}>
                Confirm Appointment
            </Button>
        </div>
      </Card>
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.body);
};
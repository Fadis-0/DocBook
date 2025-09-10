import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Card } from '../Card';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { Appointment } from '../../constants';

interface AppointmentDetailModalProps {
    appointment: Appointment;
    onClose: () => void;
}

export const AppointmentDetailModal: React.FC<AppointmentDetailModalProps> = ({ appointment, onClose }) => {
     useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    const modalContent = (
         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in" onClick={onClose}>
            <Card className="w-full max-w-lg p-6 border-cyan-400/50 relative animate-scale-in" onClick={(e) => e.stopPropagation()}>
                <Button variant="ghost" className="absolute top-2 right-2 !p-2" onClick={onClose}>
                    <Icon name="x" className="w-5 h-5" />
                </Button>
                
                <div className="flex items-center gap-4 mb-6">
                    <img src={appointment.patient.avatar} alt={appointment.patient.name} className="w-16 h-16 rounded-full border-4 border-slate-600" />
                    <div>
                        <h2 className="text-2xl font-bold text-white">{appointment.patient.name}</h2>
                        <p className="text-cyan-400">Appointment Details</p>
                    </div>
                </div>

                <div className="space-y-4 text-slate-300">
                    <div className="flex justify-between items-center bg-slate-800/40 p-3 rounded-lg">
                        <span className="font-semibold text-slate-400">Date & Time</span>
                        <span className="font-mono text-white">{appointment.date} at {appointment.time}</span>
                    </div>
                    <div className="flex justify-between items-center bg-slate-800/40 p-3 rounded-lg">
                        <span className="font-semibold text-slate-400">Reason for Visit</span>
                        <span className="text-white">{appointment.reason}</span>
                    </div>
                     <div className="flex justify-between items-center bg-slate-800/40 p-3 rounded-lg">
                        <span className="font-semibold text-slate-400">Status</span>
                        <span className="text-white">{appointment.status}</span>
                    </div>
                     {appointment.notes && (
                        <div className="bg-slate-800/40 p-3 rounded-lg">
                            <h4 className="font-semibold text-slate-400 mb-1">Notes</h4>
                            <p className="text-white text-sm">{appointment.notes}</p>
                        </div>
                    )}
                </div>

                <div className="mt-6 pt-4 border-t border-slate-700/50 flex flex-col sm:flex-row gap-2">
                    <Button variant="primary" className="flex-1" onClick={() => { alert('Marked as complete'); onClose(); }}>
                        <Icon name="check" className="w-4 h-4" />
                        Mark as Complete
                    </Button>
                    <Button variant="secondary" className="flex-1" onClick={onClose}>
                        Reschedule
                    </Button>
                     <Button variant="ghost" className="text-red-400 hover:bg-red-500/10 hover:text-red-300" onClick={() => { alert('Appointment Canceled'); onClose(); }}>
                        <Icon name="trash-2" className="w-4 h-4" />
                        Cancel Appointment
                    </Button>
                </div>
            </Card>
        </div>
    );

    return ReactDOM.createPortal(modalContent, document.body);
};
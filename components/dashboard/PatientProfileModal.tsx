import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Card } from '../Card';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { Patient } from '../../constants';

interface PatientProfileModalProps {
    patient: Patient;
    onClose: () => void;
}

const DetailItem: React.FC<{ icon: React.ComponentProps<typeof Icon>['name'], label: string, value: string }> = ({ icon, label, value }) => (
    <div className="flex items-start gap-3">
        <Icon name={icon} className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
        <div>
            <p className="text-sm text-slate-400">{label}</p>
            <p className="text-white font-medium">{value}</p>
        </div>
    </div>
);


export const PatientProfileModal: React.FC<PatientProfileModalProps> = ({ patient, onClose }) => {
     useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    const modalContent = (
         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in" onClick={onClose}>
            <Card className="w-full max-w-2xl p-6 border-cyan-400/50 relative animate-scale-in max-h-[90vh] flex flex-col">
                <Button variant="ghost" className="absolute top-2 right-2 !p-2" onClick={onClose}>
                    <Icon name="x" className="w-5 h-5" />
                </Button>
                
                <div className="flex-shrink-0 flex items-center gap-4 mb-6 pb-4 border-b border-slate-700/50">
                    <img src={patient.avatar} alt={patient.name} className="w-20 h-20 rounded-full border-4 border-slate-600" />
                    <div>
                        <h2 className="text-3xl font-bold text-white">{patient.name}</h2>
                        <p className="text-cyan-400">Patient Profile</p>
                    </div>
                </div>
                
                <div className="flex-grow overflow-y-auto pr-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Left Column */}
                        <div className="space-y-6">
                            <Card className="!bg-slate-800/40 p-4">
                                <h3 className="font-semibold text-white mb-4">Contact Information</h3>
                                <div className="space-y-3">
                                    <DetailItem icon="mail" label="Email" value={patient.email} />
                                    <DetailItem icon="phone" label="Phone" value={patient.phone} />
                                </div>
                            </Card>
                             <Card className="!bg-slate-800/40 p-4">
                                <h3 className="font-semibold text-white mb-4">Emergency Contact</h3>
                                <div className="space-y-3">
                                    <DetailItem icon="user" label="Name" value={patient.emContact.name} />
                                    <DetailItem icon="shield" label="Relation" value={patient.emContact.relation} />
                                    <DetailItem icon="phone" label="Phone" value={patient.emContact.phone} />
                                </div>
                            </Card>
                        </div>
                        {/* Right Column */}
                        <div>
                            <Card className="!bg-slate-800/40 p-4 h-full">
                                <h3 className="font-semibold text-white mb-4">Appointment History</h3>
                                <ul className="space-y-3">
                                    {patient.history.map((item, index) => (
                                        <li key={index} className="text-sm p-2 bg-slate-900/40 rounded-md">
                                            <p className="font-semibold text-slate-300">{item.reason}</p>
                                            <p className="text-slate-400">{item.date}</p>
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        </div>
                    </div>
                </div>


                <div className="flex-shrink-0 mt-6 pt-4 border-t border-slate-700/50 flex gap-2">
                    <Button variant="primary" className="flex-1">
                        <Icon name="message-square" className="w-4 h-4" />
                        Send Message
                    </Button>
                    <Button variant="secondary" className="flex-1">
                        <Icon name="calendar" className="w-4 h-4" />
                        Schedule Follow-up
                    </Button>
                </div>
            </Card>
        </div>
    );

    return ReactDOM.createPortal(modalContent, document.body);
};
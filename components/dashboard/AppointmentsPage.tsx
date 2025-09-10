import React, { useState, useMemo } from 'react';
import { APPOINTMENTS, Appointment, AppointmentStatus } from '../../constants';
import { Card } from '../Card';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { AppointmentDetailModal } from './AppointmentDetailModal';

const statusStyles: Record<AppointmentStatus, string> = {
    Upcoming: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    Completed: 'bg-green-500/20 text-green-300 border-green-500/30',
    Canceled: 'bg-red-500/20 text-red-300 border-red-500/30',
};

export const AppointmentsPage: React.FC = () => {
    const [filter, setFilter] = useState<AppointmentStatus | 'All'>('All');
    const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null);

    const filteredAppointments = useMemo(() => {
        if (filter === 'All') return APPOINTMENTS;
        return APPOINTMENTS.filter(appt => appt.status === filter);
    }, [filter]);
    
    const filters: (AppointmentStatus | 'All')[] = ['All', 'Upcoming', 'Completed', 'Canceled'];

    return (
        <div className="animate-fade-in">
            <h1 className="text-3xl font-bold text-white mb-2">Appointments</h1>
            <p className="text-slate-400 mb-8">Manage your schedule and view appointment details.</p>

            <Card className="p-4 mb-6">
                <div className="flex items-center gap-2">
                    {filters.map(f => (
                        <Button
                            key={f}
                            variant={filter === f ? 'secondary' : 'ghost'}
                            className={`!py-1.5 !px-3 !text-sm ${filter === f ? '!bg-slate-600/50' : ''}`}
                            onClick={() => setFilter(f)}
                        >
                           {f}
                        </Button>
                    ))}
                </div>
            </Card>

            <div className="space-y-4">
                {filteredAppointments.map(appt => (
                    <Card key={appt.id} className="p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 hover:border-cyan-500/30 transition-colors duration-300">
                        <div className="flex items-center gap-4 flex-1">
                            <img src={appt.patient.avatar} alt={appt.patient.name} className="w-12 h-12 rounded-full border-2 border-slate-600" />
                            <div>
                                <p className="font-bold text-white">{appt.patient.name}</p>
                                <p className="text-sm text-slate-400">{appt.reason}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 text-sm w-full sm:w-auto">
                            <div className="flex items-center gap-2 text-slate-300">
                                <Icon name="calendar-days" className="w-4 h-4" />
                                <span>{appt.date}</span>
                            </div>
                             <div className="flex items-center gap-2 text-slate-300">
                                <Icon name="clock" className="w-4 h-4" />
                                <span>{appt.time}</span>
                            </div>
                        </div>
                         <div className="flex items-center gap-4 w-full sm:w-auto">
                             <span className={`text-xs font-semibold px-2 py-1 rounded-full border ${statusStyles[appt.status]}`}>
                                {appt.status}
                            </span>
                            <Button variant="ghost" className="!p-2" onClick={() => setSelectedAppointment(appt)}>
                                <Icon name="more-vertical" className="w-5 h-5" />
                            </Button>
                         </div>
                    </Card>
                ))}
            </div>
            
            {selectedAppointment && (
                <AppointmentDetailModal 
                    appointment={selectedAppointment}
                    onClose={() => setSelectedAppointment(null)}
                />
            )}
        </div>
    );
};
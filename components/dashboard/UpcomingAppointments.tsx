import React from 'react';
import { Card } from '../Card';
import { Button } from '../Button';
import { Icon } from '../Icon';

const appointments = [
    { name: 'Liam Gallagher', time: '09:30 AM', reason: 'Follow-up Consultation', avatar: 'https://picsum.photos/id/1005/40/40' },
    { name: 'Olivia Wilde', time: '10:15 AM', reason: 'Annual Check-up', avatar: 'https://picsum.photos/id/1011/40/40' },
    { name: 'Noah Robinson', time: '11:00 AM', reason: 'New Patient Visit', avatar: 'https://picsum.photos/id/1025/40/40' },
    { name: 'Emma Stone', time: '02:00 PM', reason: 'Lab Results Review', avatar: 'https://picsum.photos/id/1027/40/40' },
];

export const UpcomingAppointments: React.FC = () => {
    return (
        <Card className="p-6 h-full">
            <h2 className="text-xl font-bold text-white mb-4">Upcoming Appointments</h2>
            <div className="space-y-4">
                {appointments.map((appt, index) => (
                    <div key={index} className="flex items-center gap-4 bg-slate-800/40 p-3 rounded-lg border border-slate-700/50">
                        <img src={appt.avatar} alt={appt.name} className="w-10 h-10 rounded-full" />
                        <div className="flex-1">
                            <p className="font-semibold text-white">{appt.name}</p>
                            <p className="text-xs text-slate-400">{appt.reason}</p>
                        </div>
                        <div className="text-right">
                             <p className="font-mono text-sm text-cyan-400">{appt.time}</p>
                        </div>
                        <div className="flex gap-2">
                            <Button variant="ghost" className="!p-2">
                                <Icon name="user" className="w-4 h-4" />
                            </Button>
                             <Button variant="ghost" className="!p-2">
                                <Icon name="message-square" className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
};

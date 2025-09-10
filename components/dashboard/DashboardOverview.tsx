import React from 'react';
import { StatCard } from './StatCard';
import { UpcomingAppointments } from './UpcomingAppointments';
import { PatientActivityChart } from './PatientActivityChart';

export const DashboardOverview: React.FC = () => {
    return (
        <div className="animate-fade-in">
            <h1 className="text-3xl font-bold text-white mb-2">Dashboard Overview</h1>
            <p className="text-slate-400 mb-8">Here's a snapshot of your practice today.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                <StatCard 
                    icon="calendar-days" 
                    title="Today's Appointments" 
                    value="12" 
                    trend="+2 since yesterday" 
                    trendColor="text-green-400"
                />
                <StatCard 
                    icon="user-plus" 
                    title="New Patients (Month)" 
                    value="28" 
                    trend="+5% from last month"
                    trendColor="text-green-400"
                />
                 <StatCard 
                    icon="users" 
                    title="Total Patients" 
                    value="754" 
                />
                <StatCard 
                    icon="message-square" 
                    title="Unread Messages" 
                    value="3" 
                    trend="Action required"
                    trendColor="text-amber-400"
                />
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-6">
                <div className="xl:col-span-2">
                    <UpcomingAppointments />
                </div>
                <div>
                    <PatientActivityChart />
                </div>
            </div>
        </div>
    );
};

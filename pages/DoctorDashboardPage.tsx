import React, { useState } from 'react';
import { DashboardLayout } from '../components/dashboard/DashboardLayout';
import { DashboardOverview } from '../components/dashboard/DashboardOverview';
import { AppointmentsPage } from '../components/dashboard/AppointmentsPage';
import { PatientsPage } from '../components/dashboard/PatientsPage';
import { MessagesPage } from '../components/dashboard/MessagesPage';
import { SettingsPage } from '../components/dashboard/SettingsPage';

export type DashboardPage = 'Overview' | 'Appointments' | 'Patients' | 'Messages' | 'Settings';

interface DoctorDashboardPageProps {
    onLogout: () => void;
}

export const DoctorDashboardPage: React.FC<DoctorDashboardPageProps> = ({ onLogout }) => {
    const [activePage, setActivePage] = useState<DashboardPage>('Overview');

    const renderContent = () => {
        switch(activePage) {
            case 'Overview':
                return <DashboardOverview />;
            case 'Appointments':
                return <AppointmentsPage />;
            case 'Patients':
                return <PatientsPage />;
            case 'Messages':
                return <MessagesPage />;
            case 'Settings':
                return <SettingsPage />;
            default:
                return <DashboardOverview />;
        }
    }

    return (
        <DashboardLayout activePage={activePage} setActivePage={setActivePage} onLogout={onLogout}>
            {renderContent()}
        </DashboardLayout>
    );
};

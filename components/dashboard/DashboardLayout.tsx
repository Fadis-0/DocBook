import React from 'react';
import { Icon } from '../Icon';
import { DashboardPage } from '../../pages/DoctorDashboardPage';
import { DOCTORS } from '../../constants';

interface DashboardLayoutProps {
    children: React.ReactNode;
    activePage: DashboardPage;
    setActivePage: (page: DashboardPage) => void;
    onLogout: () => void;
}

const NavItem = ({ icon, label, isActive, onClick }: { icon: React.ComponentProps<typeof Icon>['name'], label: string, isActive: boolean, onClick: () => void }) => (
    <button
        onClick={onClick}
        className={`flex items-center w-full px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-200 ${
            isActive
                ? 'bg-cyan-500/20 text-cyan-300'
                : 'text-slate-400 hover:bg-slate-700/50 hover:text-slate-200'
        }`}
    >
        <Icon name={icon} className="w-5 h-5 mr-3" />
        <span>{label}</span>
    </button>
);


export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, activePage, setActivePage, onLogout }) => {
    const doctor = DOCTORS[1]; // Using a mock doctor for display

    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <aside className="fixed top-0 left-0 h-full w-[var(--sidebar-width)] bg-slate-800/30 backdrop-blur-lg border-r border-slate-700/50 p-6 flex flex-col z-40">
                <div className="flex items-center gap-3 mb-10">
                    <Icon name="heart" className="w-8 h-8 text-cyan-400" />
                    <span className="text-2xl font-bold text-white">DocBook</span>
                </div>

                {/* Doctor Profile */}
                <div className="mb-10 text-center">
                    <img src={doctor.imageUrl} alt={doctor.name} className="w-24 h-24 rounded-full mx-auto border-4 border-slate-600 mb-4" />
                    <h2 className="text-lg font-semibold text-white">{doctor.name}</h2>
                    <p className="text-sm text-cyan-400">{doctor.specialty}</p>
                </div>
                
                {/* Navigation */}
                <nav className="flex-1 space-y-2">
                    <NavItem icon="layout-dashboard" label="Overview" isActive={activePage === 'Overview'} onClick={() => setActivePage('Overview')} />
                    <NavItem icon="calendar-days" label="Appointments" isActive={activePage === 'Appointments'} onClick={() => setActivePage('Appointments')} />
                    <NavItem icon="users" label="Patients" isActive={activePage === 'Patients'} onClick={() => setActivePage('Patients')} />
                    <NavItem icon="message-square" label="Messages" isActive={activePage === 'Messages'} onClick={() => setActivePage('Messages')} />
                    <NavItem icon="settings" label="Settings" isActive={activePage === 'Settings'} onClick={() => setActivePage('Settings')} />
                </nav>

                {/* Logout */}
                <div>
                     <NavItem icon="log-out" label="Log Out" isActive={false} onClick={onLogout} />
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 ml-[var(--sidebar-width)] p-8">
                {children}
            </main>
        </div>
    );
};

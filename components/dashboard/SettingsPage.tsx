import React from 'react';
import { Card } from '../Card';
import { Input } from '../Input';
import { Button } from '../Button';
import { DOCTORS, AVAILABILITY_DAYS } from '../../constants';

const SettingsCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <Card className="p-6">
        <h2 className="text-xl font-bold text-white border-b border-slate-700/50 pb-3 mb-6">{title}</h2>
        {children}
    </Card>
);

const AvailabilityToggle: React.FC<{ day: string }> = ({ day }) => (
    <label className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg cursor-pointer">
        <span className="font-medium text-slate-300">{day}</span>
        <input type="checkbox" className="sr-only peer" defaultChecked={['Mon', 'Wed', 'Fri'].includes(day)} />
        <div className="relative w-11 h-6 bg-slate-700 rounded-full peer peer-focus:ring-2 peer-focus:ring-cyan-500/50 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-500"></div>
    </label>
);

const NotificationToggle: React.FC<{ label: string; description: string; defaultChecked?: boolean }> = ({ label, description, defaultChecked=true }) => (
    <div className="flex items-start justify-between">
        <div>
            <h4 className="font-semibold text-slate-200">{label}</h4>
            <p className="text-sm text-slate-400">{description}</p>
        </div>
         <label className="flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" defaultChecked={defaultChecked} />
            <div className="relative w-11 h-6 bg-slate-700 rounded-full peer peer-focus:ring-2 peer-focus:ring-cyan-500/50 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-500"></div>
        </label>
    </div>
)

export const SettingsPage: React.FC = () => {
    const doctor = DOCTORS[1];

    return (
        <div className="animate-fade-in">
            <h1 className="text-3xl font-bold text-white mb-2">Settings</h1>
            <p className="text-slate-400 mb-8">Manage your account and profile settings.</p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                    <SettingsCard title="Personal Information">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Input id="fullName" label="Full Name" type="text" defaultValue={doctor.name} />
                            <Input id="email" label="Email Address" type="email" defaultValue="samuel.chen@example.com" />
                            <Input id="phone" label="Phone Number" type="tel" defaultValue="555-0199" />
                            <Input id="license" label="Medical License #" type="text" defaultValue="GMC-8675309" />
                        </div>
                    </SettingsCard>
                    <SettingsCard title="Profile Settings">
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="bio" className="block text-sm font-medium text-slate-300 mb-2">Profile Biography</label>
                                <textarea id="bio" rows={5} className="w-full bg-slate-800/50 border border-slate-600/50 rounded-lg p-2.5 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300" defaultValue={doctor.bio}></textarea>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Profile Photo</label>
                                <div className="flex items-center gap-4">
                                    <img src={doctor.imageUrl} alt={doctor.name} className="w-16 h-16 rounded-full" />
                                    <Button variant="secondary">Change Photo</Button>
                                </div>
                            </div>
                        </div>
                    </SettingsCard>
                </div>

                <div className="lg:col-span-1 space-y-6">
                    <SettingsCard title="Weekly Availability">
                        <div className="space-y-3">
                            {AVAILABILITY_DAYS.map(day => <AvailabilityToggle key={day} day={day} />)}
                        </div>
                    </SettingsCard>
                     <SettingsCard title="Notification Preferences">
                        <div className="space-y-5">
                            <NotificationToggle label="New Appointments" description="Notify me of new bookings" />
                            <NotificationToggle label="Cancellations" description="Notify me of cancellations" />
                            <NotificationToggle label="New Messages" description="Notify me of new patient messages" />
                            <NotificationToggle label="Weekly Summary" description="Send a weekly performance email" defaultChecked={false} />
                        </div>
                    </SettingsCard>
                </div>
            </div>
            
            <div className="mt-8 flex justify-end">
                <Button variant="primary" className="!px-6 !py-2.5">Save Changes</Button>
            </div>
        </div>
    );
};
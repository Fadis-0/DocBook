import React, { useState, useMemo } from 'react';
import { PATIENTS, Patient } from '../../constants';
import { Card } from '../Card';
import { Icon } from '../Icon';
import { PatientTable } from './PatientTable';
import { PatientProfileModal } from './PatientProfileModal';

export const PatientsPage: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);

    const filteredPatients = useMemo(() => {
        return PATIENTS.filter(patient =>
            patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            patient.email.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [searchQuery]);

    return (
        <div className="animate-fade-in">
            <h1 className="text-3xl font-bold text-white mb-2">Patients</h1>
            <p className="text-slate-400 mb-8">View and manage your patient records.</p>
            
            <Card className="p-2 mb-6 flex items-center justify-between">
                <div className="relative flex-grow">
                    <Icon name="search" className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Search by patient name or email..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-transparent pl-10 pr-4 py-2 text-white placeholder-slate-400 focus:outline-none"
                    />
                </div>
            </Card>

            <PatientTable patients={filteredPatients} onSelectPatient={setSelectedPatient} />

            {selectedPatient && (
                <PatientProfileModal 
                    patient={selectedPatient}
                    onClose={() => setSelectedPatient(null)}
                />
            )}
        </div>
    );
};
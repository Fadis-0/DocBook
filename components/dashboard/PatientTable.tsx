import React, { useState } from 'react';
import { Card } from '../Card';
import { Icon } from '../Icon';
import { Patient } from '../../constants';

interface PatientTableProps {
    patients: Patient[];
    onSelectPatient: (patient: Patient) => void;
}

export const PatientTable: React.FC<PatientTableProps> = ({ patients, onSelectPatient }) => {
    const [openMenuId, setOpenMenuId] = useState<string | null>(null);

    const toggleMenu = (patientId: string) => {
        setOpenMenuId(openMenuId === patientId ? null : patientId);
    };

    return (
        <Card className="overflow-x-auto">
            <table className="w-full text-sm text-left text-slate-300">
                <thead className="text-xs text-slate-400 uppercase bg-slate-800/50">
                    <tr>
                        <th scope="col" className="px-6 py-3">Patient Name</th>
                        <th scope="col" className="px-6 py-3">Contact</th>
                        <th scope="col" className="px-6 py-3">Last Visit</th>
                        <th scope="col" className="px-6 py-3"><span className="sr-only">Actions</span></th>
                    </tr>
                </thead>
                <tbody>
                    {patients.map((patient) => (
                        <tr key={patient.id} className="border-b border-slate-700/50 hover:bg-slate-800/40">
                            <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap">
                                <div className="flex items-center gap-3">
                                    <img className="w-10 h-10 rounded-full" src={patient.avatar} alt={patient.name} />
                                    <div>
                                        <div className="text-base font-semibold">{patient.name}</div>
                                        <div className="font-normal text-slate-400">{patient.email}</div>
                                    </div>
                                </div>
                            </th>
                            <td className="px-6 py-4">{patient.phone}</td>
                            <td className="px-6 py-4">{patient.lastVisit}</td>
                            <td className="px-6 py-4 text-right relative">
                                <button onClick={() => toggleMenu(patient.id)} className="p-2 rounded-full hover:bg-slate-700/50">
                                    <Icon name="more-vertical" className="w-5 h-5" />
                                </button>
                                {openMenuId === patient.id && (
                                    <div className="absolute right-10 top-10 z-10 w-44 bg-slate-800/80 backdrop-blur-lg border border-slate-700 rounded-lg shadow-xl animate-fade-in-down">
                                        <ul className="py-1 text-sm text-slate-300">
                                            <li>
                                                <button onClick={() => { onSelectPatient(patient); toggleMenu(patient.id); }} className="w-full text-left block px-4 py-2 hover:bg-slate-700/50">View Profile</button>
                                            </li>
                                            <li>
                                                <button className="w-full text-left block px-4 py-2 hover:bg-slate-700/50">Send Message</button>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Card>
    );
};
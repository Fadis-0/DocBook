import React from 'react';
import { Icon } from './Icon';

export const Footer: React.FC = () => {
    // In a real app, these would be separate icons
    const SocialIcon = ({ name }: { name: string }) => (
        <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
            {name}
        </a>
    );

    return (
        <footer className="bg-slate-900/50 border-t border-slate-700/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
                    {/* Brand */}
                    <div className="col-span-2 lg:col-span-1">
                        <div className="flex items-center gap-2">
                            <Icon name="heart" className="w-8 h-8 text-cyan-400" />
                            <span className="text-2xl font-bold text-white">DocBook</span>
                        </div>
                        <p className="text-slate-400 mt-4 text-sm">Find the right doctor and book with ease.</p>
                    </div>

                    {/* Links */}
                    <div className="text-sm">
                        <h3 className="font-bold text-white mb-4">For Patients</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-slate-400 hover:text-white">Find a Doctor</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-white">Book Appointment</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-white">Patient Reviews</a></li>
                        </ul>
                    </div>
                    <div className="text-sm">
                        <h3 className="font-bold text-white mb-4">For Doctors</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-slate-400 hover:text-white">Join Our Network</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-white">Provider Login</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-white">Benefits</a></li>
                        </ul>
                    </div>
                     <div className="text-sm">
                        <h3 className="font-bold text-white mb-4">Company</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-slate-400 hover:text-white">About Us</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-white">Careers</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-white">Contact</a></li>
                        </ul>
                    </div>
                    
                    {/* Social */}
                     <div className="text-sm">
                        <h3 className="font-bold text-white mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <SocialIcon name="FB" />
                            <SocialIcon name="TW" />
                            <SocialIcon name="IN" />
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-700/50 text-center text-sm text-slate-500">
                    <p>&copy; {new Date().getFullYear()} DocBook. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

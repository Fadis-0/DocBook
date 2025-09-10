import React from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Icon } from '../components/Icon';
import { Specialty } from '../types';

interface SignUpPageProps {
    onSignUp: () => void;
    onGoToLogin: () => void;
}

export const SignUpPage: React.FC<SignUpPageProps> = ({ onSignUp, onGoToLogin }) => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, you'd register the user here
        onSignUp();
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4 animate-fade-in">
            <Card className="w-full max-w-md p-8">
                <div className="text-center mb-8">
                    <Icon name="user-plus" className="w-12 h-12 text-cyan-400 mx-auto mb-2" />
                    <h1 className="text-3xl font-bold text-white">Join DocBook</h1>
                    <p className="text-slate-400">Create your provider account to get started.</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input id="fullName" label="Full Name" type="text" placeholder="Dr. John Doe" required />
                     <div>
                        <label htmlFor="specialty" className="block text-sm font-medium text-slate-300 mb-2">Specialty</label>
                        <select 
                            id="specialty"
                            required
                            className="w-full bg-slate-800/50 border border-slate-600/50 rounded-lg p-2.5 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300">
                            <option value="">Select your specialty</option>
                            {Object.values(Specialty).map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                    </div>
                    <Input id="email" label="Email Address" type="email" placeholder="you@example.com" required />
                    <Input id="password" label="Password" type="password" placeholder="Create a secure password" required />
                    <Button type="submit" variant="primary" className="w-full !py-3 !mt-6">
                        Create Account
                    </Button>
                </form>
                <div className="text-center mt-6">
                    <p className="text-sm text-slate-400">
                        Already have an account?{' '}
                        <button onClick={onGoToLogin} className="font-semibold text-cyan-400 hover:text-cyan-300">
                            Login here
                        </button>
                    </p>
                </div>
            </Card>
        </div>
    );
};

import React from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Icon } from '../components/Icon';

interface LoginPageProps {
    onLogin: () => void;
    onGoToSignUp: () => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onLogin, onGoToSignUp }) => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, you'd validate credentials here
        onLogin();
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4 animate-fade-in">
            <Card className="w-full max-w-md p-8">
                <div className="text-center mb-8">
                    <Icon name="heart" className="w-12 h-12 text-cyan-400 mx-auto mb-2" />
                    <h1 className="text-3xl font-bold text-white">Doctor Portal Login</h1>
                    <p className="text-slate-400">Access your dashboard to manage your practice.</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <Input id="email" label="Email Address" type="email" placeholder="you@example.com" required />
                    <Input id="password" label="Password" type="password" placeholder="••••••••" required />
                    <Button type="submit" variant="primary" className="w-full !py-3">
                        Login
                    </Button>
                </form>
                <div className="text-center mt-6">
                    <p className="text-sm text-slate-400">
                        Don't have an account?{' '}
                        <button onClick={onGoToSignUp} className="font-semibold text-cyan-400 hover:text-cyan-300">
                            Sign up here
                        </button>
                    </p>
                </div>
            </Card>
        </div>
    );
};

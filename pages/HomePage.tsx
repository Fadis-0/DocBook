import React from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Icon } from '../components/Icon';
import { Footer } from '../components/Footer';
import { Specialty } from '../types';
import { HeroSearch } from '../components/HeroSearch';

interface HomePageProps {
    onGoToSearch: (params: { query?: string, filters?: any }) => void;
    onGoToDashboard: () => void;
}

const FeatureCard = ({ icon, title, children }: {icon: React.ComponentProps<typeof Icon>['name'], title: string, children: React.ReactNode}) => (
    <Card className="p-6 text-center hover:border-cyan-400/50 hover:shadow-cyan-500/10">
        <div className="inline-block p-3 bg-slate-800/50 rounded-full mb-4 border border-slate-700">
            <Icon name={icon} className="w-8 h-8 text-cyan-400" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-slate-400">{children}</p>
    </Card>
);

export const HomePage: React.FC<HomePageProps> = ({ onGoToSearch, onGoToDashboard }) => {

    const specialties = Object.values(Specialty).slice(0, 6);

    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <section className="pt-32 pb-20 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800/50 opacity-50"></div>
                 <div className="absolute -top-1/2 -left-1/4 w-full h-full bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow -z-10"></div>
                 <div className="absolute -bottom-1/2 -right-1/4 w-3/4 h-3/4 bg-indigo-500/10 rounded-full blur-3xl animate-pulse-slow-delay -z-10"></div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
                        Find the Right Doctor. <br/> <span className="text-cyan-400">Book with Ease.</span>
                    </h1>
                    <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-300">
                        Your health journey, simplified. Access a network of trusted specialists right at your fingertips.
                    </p>
                    <div className="mt-10 max-w-3xl mx-auto">
                       <HeroSearch onSearch={onGoToSearch} />
                    </div>
                    <div className="mt-12 text-center">
                        <p className="text-sm text-slate-400 mb-4 font-semibold">JOIN THOUSANDS OF PATIENTS AND PROVIDERS</p>
                        <div className="flex justify-center items-center gap-8 opacity-60">
                            <span className="text-2xl font-bold text-white">HealthCo</span>
                            <span className="text-2xl font-bold text-white">WellCare</span>
                            <span className="text-2xl font-bold text-white">MedTrak</span>
                            <span className="text-2xl font-bold text-white">Vitalis</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-20">
                 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                         <h2 className="text-4xl font-bold text-white">Care in Three Simple Steps</h2>
                         <p className="mt-4 text-slate-400 max-w-xl mx-auto">Getting the medical attention you need has never been easier.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <FeatureCard icon="search" title="1. Search & Discover">
                            Browse our extensive network of specialists. Filter by location, insurance, and more to find your perfect match.
                        </FeatureCard>
                        <FeatureCard icon="user" title="2. View & Connect">
                            Explore detailed doctor profiles, including qualifications, patient reviews, and availability.
                        </FeatureCard>
                        <FeatureCard icon="calendar" title="3. Book & Confirm">
                            Select a time that works for you and schedule your appointment instantly online.
                        </FeatureCard>
                    </div>
                 </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-slate-900/30">
                 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                         <h2 className="text-4xl font-bold text-white">Why Choose DocBook?</h2>
                         <p className="mt-4 text-slate-400 max-w-xl mx-auto">We are committed to providing a seamless and trustworthy healthcare experience.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                       <FeatureCard icon="award" title="Top Specialists">Access a curated network of board-certified medical professionals.</FeatureCard>
                       <FeatureCard icon="shield" title="Verified Reviews">Make informed decisions with authentic feedback from real patients.</FeatureCard>
                       <FeatureCard icon="clock" title="Easy Scheduling">Book appointments 24/7, without the hassle of phone calls.</FeatureCard>
                       <FeatureCard icon="check" title="Insurance Coverage">Easily find doctors who accept your insurance plan.</FeatureCard>
                    </div>
                 </div>
            </section>
            
            {/* Browse by Specialty Section */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-white">Browse by Specialty</h2>
                        <p className="mt-4 text-slate-400 max-w-xl mx-auto">Find the expert care you need from a wide range of medical fields.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {specialties.map(spec => (
                            <button key={spec} onClick={() => onGoToSearch({ filters: { specialty: spec } })} className="p-4 bg-slate-800/40 rounded-lg text-center text-white font-semibold hover:bg-cyan-500/20 hover:text-cyan-300 transition-all duration-300 border border-slate-700/50">
                                {spec}
                            </button>
                        ))}
                    </div>
                </div>
            </section>
            
            <Footer />
        </div>
    );
};
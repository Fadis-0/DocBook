import React, { useState } from 'react';
import { Card } from './Card';
import { Button } from './Button';
import { Icon } from './Icon';

interface HeroSearchProps {
    onSearch: (params: { query?: string, filters?: any }) => void;
}

export const HeroSearch: React.FC<HeroSearchProps> = ({ onSearch }) => {
    const [query, setQuery] = useState('');
    const [location, setLocation] = useState('');

    const handleSearch = () => {
        onSearch({ query });
    };

    return (
        <Card className="p-4">
            <div className="flex flex-col md:flex-row items-center gap-2">
                <div className="relative flex-grow w-full">
                    <Icon name="search" className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Condition, doctor, or specialty"
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                        className="w-full bg-slate-800/50 border border-slate-700/80 rounded-lg pl-10 pr-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors"
                    />
                </div>
                <div className="relative flex-grow w-full">
                    <Icon name="map-pin" className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                     <input
                        type="text"
                        placeholder="Location (e.g., city, zip)"
                        value={location}
                        onChange={e => setLocation(e.target.value)}
                        className="w-full bg-slate-800/50 border border-slate-700/80 rounded-lg pl-10 pr-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors"
                    />
                </div>
                <Button variant="primary" onClick={handleSearch} className="w-full md:w-auto !py-3 !px-6">
                    Search
                </Button>
            </div>
        </Card>
    );
};
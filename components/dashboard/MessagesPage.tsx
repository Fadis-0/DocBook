import React from 'react';
import { MessageView } from './MessageView';

export const MessagesPage: React.FC = () => {
    return (
        <div className="animate-fade-in h-[calc(100vh-4rem)] flex flex-col">
            <div className="flex-shrink-0">
                <h1 className="text-3xl font-bold text-white mb-2">Messages</h1>
                <p className="text-slate-400 mb-8">Communicate securely with your patients.</p>
            </div>
            <div className="flex-grow">
                 <MessageView />
            </div>
        </div>
    );
};
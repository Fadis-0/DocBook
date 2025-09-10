import React, { useState, useRef, useEffect } from 'react';
import { CONVERSATIONS, Conversation } from '../../constants';
import { Card } from '../Card';
import { Icon } from '../Icon';
import { Input } from '../Input';
import { Button } from '../Button';

export const MessageView: React.FC = () => {
    const [conversations, setConversations] = useState(CONVERSATIONS);
    const [selectedConversationId, setSelectedConversationId] = useState(conversations[0].id);
    const [newMessage, setNewMessage] = useState('');
    const messagesEndRef = useRef<null | HTMLDivElement>(null);

    const selectedConversation = conversations.find(c => c.id === selectedConversationId) as Conversation;

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    useEffect(scrollToBottom, [selectedConversation]);

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if(!newMessage.trim()) return;

        const updatedConversations = conversations.map(convo => {
            if(convo.id === selectedConversationId) {
                const newMsg = {
                    id: `m${Date.now()}`,
                    sender: 'doctor' as const,
                    text: newMessage,
                    timestamp: 'Just now'
                };
                return {
                    ...convo,
                    messages: [...convo.messages, newMsg],
                    lastMessage: newMessage,
                    lastMessageTime: 'Just now'
                }
            }
            return convo;
        });

        setConversations(updatedConversations);
        setNewMessage('');
    }

    return (
        <Card className="h-full flex overflow-hidden">
            {/* Conversations List */}
            <div className="w-1/3 border-r border-slate-700/50 flex flex-col">
                <div className="p-4 border-b border-slate-700/50 flex-shrink-0">
                    <h2 className="text-lg font-bold text-white">Inbox</h2>
                </div>
                <div className="flex-grow overflow-y-auto">
                    {conversations.map(convo => (
                        <button
                            key={convo.id}
                            onClick={() => setSelectedConversationId(convo.id)}
                            className={`w-full text-left p-4 flex gap-3 border-b border-slate-700/50 transition-colors ${selectedConversationId === convo.id ? 'bg-slate-700/30' : 'hover:bg-slate-800/30'}`}
                        >
                            <img src={convo.patient.avatar} alt={convo.patient.name} className="w-12 h-12 rounded-full flex-shrink-0" />
                            <div className="flex-1 overflow-hidden">
                                <div className="flex justify-between items-center">
                                    <p className="font-semibold text-white truncate">{convo.patient.name}</p>
                                    <p className="text-xs text-slate-400 flex-shrink-0">{convo.lastMessageTime}</p>
                                </div>
                                <p className="text-sm text-slate-400 truncate">{convo.lastMessage}</p>
                            </div>
                            {convo.unreadCount > 0 && <span className="bg-cyan-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">{convo.unreadCount}</span>}
                        </button>
                    ))}
                </div>
            </div>

            {/* Message View */}
            <div className="w-2/3 flex flex-col">
                {selectedConversation ? (
                    <>
                        <div className="p-4 border-b border-slate-700/50 flex-shrink-0 flex items-center gap-3">
                             <img src={selectedConversation.patient.avatar} alt={selectedConversation.patient.name} className="w-10 h-10 rounded-full" />
                            <h2 className="text-lg font-bold text-white">{selectedConversation.patient.name}</h2>
                        </div>
                        <div className="flex-grow p-4 overflow-y-auto bg-slate-800/20">
                            <div className="space-y-4">
                                {selectedConversation.messages.map(msg => (
                                    <div key={msg.id} className={`flex gap-3 ${msg.sender === 'doctor' ? 'justify-end' : 'justify-start'}`}>
                                        <div className={`max-w-md p-3 rounded-xl ${msg.sender === 'doctor' ? 'bg-cyan-500 text-white rounded-br-none' : 'bg-slate-700 text-slate-200 rounded-bl-none'}`}>
                                            <p>{msg.text}</p>
                                            <p className={`text-xs mt-1 ${msg.sender === 'doctor' ? 'text-cyan-100' : 'text-slate-400'}`}>{msg.timestamp}</p>
                                        </div>
                                    </div>
                                ))}
                                <div ref={messagesEndRef} />
                            </div>
                        </div>
                        <div className="p-4 border-t border-slate-700/50 flex-shrink-0">
                            <form onSubmit={handleSendMessage} className="flex gap-2">
                                <input
                                    type="text"
                                    value={newMessage}
                                    onChange={(e) => setNewMessage(e.target.value)}
                                    placeholder="Type your message..."
                                    className="w-full bg-slate-700/50 border border-slate-600/50 rounded-lg p-2.5 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
                                />
                                <Button type="submit" variant="primary" className="!p-3">
                                    <Icon name="send" className="w-5 h-5"/>
                                </Button>
                            </form>
                        </div>
                    </>
                ) : (
                    <div className="flex-1 flex items-center justify-center text-slate-400">Select a conversation to start messaging.</div>
                )}
            </div>
        </Card>
    );
};
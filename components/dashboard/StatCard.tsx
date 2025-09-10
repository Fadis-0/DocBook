import React from 'react';
import { Card } from '../Card';
import { Icon } from '../Icon';

interface StatCardProps {
    icon: React.ComponentProps<typeof Icon>['name'];
    title: string;
    value: string;
    trend?: string;
    trendColor?: string;
}

export const StatCard: React.FC<StatCardProps> = ({ icon, title, value, trend, trendColor = 'text-slate-400' }) => {
    return (
        <Card className="p-5 flex flex-col">
            <div className="flex justify-between items-start">
                <div className="flex flex-col">
                    <p className="text-sm text-slate-400 font-medium">{title}</p>
                    <p className="text-3xl font-bold text-white mt-1">{value}</p>
                </div>
                <div className="p-3 bg-slate-800/60 rounded-full border border-slate-700/50">
                    <Icon name={icon} className="w-6 h-6 text-cyan-400" />
                </div>
            </div>
            {trend && (
                <div className="mt-4 flex items-center gap-1 text-xs">
                    <Icon name="trending-up" className={`w-4 h-4 ${trendColor}`} />
                    <span className={trendColor}>{trend}</span>
                </div>
            )}
        </Card>
    );
};

import React from 'react';
import { Card } from '../Card';

const chartData = [
    { month: 'Jan', value: 65 },
    { month: 'Feb', value: 59 },
    { month: 'Mar', value: 80 },
    { month: 'Apr', value: 81 },
    { month: 'May', value: 56 },
    { month: 'Jun', value: 55 },
    { month: 'Jul', value: 40 },
];

export const PatientActivityChart: React.FC = () => {
    const maxValue = Math.max(...chartData.map(d => d.value));

    return (
        <Card className="p-6 h-full">
            <h2 className="text-xl font-bold text-white mb-4">Patient Activity</h2>
            <div className="flex justify-between items-end h-64 space-x-2">
                {chartData.map(data => {
                    const barHeight = (data.value / maxValue) * 100;
                    return (
                        <div key={data.month} className="flex-1 flex flex-col items-center justify-end">
                            <div 
                                className="w-full bg-cyan-500/30 rounded-t-md hover:bg-cyan-500/60 transition-all"
                                style={{ height: `${barHeight}%` }}
                                title={`${data.month}: ${data.value} patients`}
                            ></div>
                            <span className="text-xs text-slate-400 mt-2">{data.month}</span>
                        </div>
                    );
                })}
            </div>
        </Card>
    );
};

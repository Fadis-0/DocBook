import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export const Card: React.FC<CardProps> = ({ children, className = '', onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`bg-slate-700/20 backdrop-blur-xl border border-slate-600/30 rounded-2xl shadow-lg transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
};
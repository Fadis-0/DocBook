
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseClasses = 'px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900';

  const variantClasses = {
    primary: 'bg-cyan-500 text-white hover:bg-cyan-400 focus:ring-cyan-500 shadow-lg shadow-cyan-500/20',
    secondary: 'bg-slate-300/10 text-slate-200 border border-slate-300/20 backdrop-blur-lg hover:bg-slate-300/20 focus:ring-slate-400',
    ghost: 'text-slate-300 hover:bg-slate-300/10 hover:text-white',
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

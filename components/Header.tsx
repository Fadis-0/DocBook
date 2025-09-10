import React, { useState } from 'react';
import { Icon } from './Icon';
import { Button } from './Button';

interface HeaderProps {
    onGoHome: () => void;
    onGoToDashboard: () => void;
    isLoggedIn: boolean;
    onLogin: () => void;
    onLogout: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onGoHome, onGoToDashboard, isLoggedIn, onLogin, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = (
      <>
        <button onClick={onGoToDashboard} className="text-slate-300 hover:text-white transition-colors text-sm font-medium">For Doctors</button>
        <a href="#" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">Help</a>
      </>
  );

  const authSectionDesktop = isLoggedIn ? (
    <div className="relative group">
        <div className="w-9 h-9 bg-slate-700 rounded-full flex items-center justify-center cursor-pointer border-2 border-slate-600 group-hover:border-cyan-400 transition-colors">
            <Icon name="user" className="w-5 h-5 text-slate-300 group-hover:text-cyan-400" />
        </div>
        <div className="absolute top-full right-0 mt-2 w-40 bg-slate-800/80 backdrop-blur-lg border border-slate-700 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
            <button onClick={onLogout} className="w-full text-left px-4 py-2 text-sm text-slate-300 hover:bg-slate-700/50 flex items-center gap-2">
                <Icon name="log-out" className="w-4 h-4" />
                Log Out
            </button>
        </div>
    </div>
  ) : (
    <Button variant="secondary" onClick={onLogin} className="!py-1.5 !px-3 !text-sm">Login</Button>
  );

  const authSectionMobile = isLoggedIn ? (
     <div className="w-full border-t border-slate-700/50 pt-4 flex items-center gap-3">
        <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center">
            <Icon name="user" className="w-5 h-5 text-slate-300" />
        </div>
        <span className="text-white font-medium">My Account</span>
     </div>
  ) : (
      <Button variant='primary' className="w-full" onClick={onLogin}>Login</Button>
  );


  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/50 backdrop-blur-lg border-b border-slate-700/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button onClick={onGoHome} className="flex items-center gap-2 cursor-pointer">
            <Icon name="heart" className="w-8 h-8 text-cyan-400" />
            <span className="text-2xl font-bold text-white">DocBook</span>
          </button>
          <div className="hidden md:flex items-center gap-6">
            {navLinks}
            {authSectionDesktop}
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Icon name={isMenuOpen ? "x" : "menu"} className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-slate-900/95 backdrop-blur-lg border-t border-slate-700/50 animate-fade-in-down">
          <div className="px-4 pt-2 pb-4 flex flex-col items-start gap-4">
            {navLinks}
            <div className="w-full my-2 border-t border-slate-700/50"></div>
            {authSectionMobile}
          </div>
        </div>
      )}
    </header>
  );
};

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { DoctorSearchPage } from './pages/DoctorSearchPage';
import { DoctorDashboardPage } from './pages/DoctorDashboardPage';
import { LoginPage } from './pages/LoginPage';
import { SignUpPage } from './pages/SignUpPage';

type Page = 'home' | 'search' | 'dashboard' | 'login' | 'signup';

const App: React.FC = () => {
    const [page, setPage] = useState<Page>('home');
    const [initialFilters, setInitialFilters] = useState<any>({});
    const [initialSearchQuery, setInitialSearchQuery] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleGoToSearch = (params: { query?: string, filters?: any } = {}) => {
        setInitialFilters(params.filters || {});
        setInitialSearchQuery(params.query || '');
        setPage('search');
    }

    const handleGoHome = () => {
        setPage('home');
    }
    
    const handleGoToDashboard = () => {
        if (isLoggedIn) {
            setPage('dashboard');
        } else {
            setPage('login');
        }
    }

    const handleGoToLogin = () => {
        setPage('login');
    }

    const handleGoToSignUp = () => {
        setPage('signup');
    }

    const handleLogin = () => {
        setIsLoggedIn(true);
        setPage('dashboard');
    }

    const handleLogout = () => {
        setIsLoggedIn(false);
        setPage('home');
    }

    const renderContent = () => {
        switch(page) {
            case 'home':
                return <HomePage onGoToSearch={handleGoToSearch} onGoToDashboard={handleGoToDashboard} />;
            case 'search':
                return <DoctorSearchPage initialFilters={initialFilters} initialSearchQuery={initialSearchQuery} />;
            case 'dashboard':
                return isLoggedIn ? <DoctorDashboardPage onLogout={handleLogout} /> : <LoginPage onLogin={handleLogin} onGoToSignUp={handleGoToSignUp} />;
            case 'login':
                return <LoginPage onLogin={handleLogin} onGoToSignUp={handleGoToSignUp} />;
            case 'signup':
                return <SignUpPage onSignUp={handleLogin} onGoToLogin={handleGoToLogin} />;
            default:
                 return <HomePage onGoToSearch={handleGoToSearch} onGoToDashboard={handleGoToDashboard} />;
        }
    }


  return (
    <div className="min-h-screen bg-slate-900 text-slate-200">
      {page !== 'dashboard' && <Header 
        onGoHome={handleGoHome} 
        onGoToDashboard={handleGoToDashboard}
        isLoggedIn={isLoggedIn}
        onLogin={handleGoToLogin}
        onLogout={handleLogout}
      />}
      <main>
        {renderContent()}
      </main>
      <style>{`
        :root {
            --sidebar-width: 280px;
        }
        .animate-fade-in {
            animation: fadeIn 0.5s ease-in-out;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down {
            animation: fadeInDown 0.3s ease-in-out;
        }
        @keyframes fadeInDown {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-scale-in {
            animation: scaleIn 0.3s ease-in-out;
        }
        @keyframes scaleIn {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
        }
         .animate-pulse-slow {
            animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animate-pulse-slow-delay {
            animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
            animation-delay: 2s;
        }
        @keyframes pulse {
            50% {
                opacity: .5;
            }
        }
        .form-checkbox {
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            width: 1.25em;
            height: 1.25em;
            border: 1px solid rgb(71 85 105);
            border-radius: 0.25rem;
            display: inline-block;
            position: relative;
            cursor: pointer;
        }
        .form-checkbox:checked {
            background-color: #06b6d4;
            border-color: #06b6d4;
        }
        .form-checkbox:checked::after {
            content: '✓';
            font-size: 0.9em;
            color: white;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }
      `}</style>
    </div>
  );
};

export default App;
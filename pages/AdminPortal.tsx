
import React, { useState, useEffect } from 'react';
import ScrollReveal from '../components/ScrollReveal';

interface Query {
  id: number;
  name: string;
  email: string;
  company: string;
  message: string;
  timestamp: string;
}

const AdminPortal: React.FC = () => {
  const [passcode, setPasscode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [queries, setQueries] = useState<Query[]>([]);
  const [error, setError] = useState('');

  const targetCode = '1472';

  useEffect(() => {
    if (passcode === targetCode) {
      setIsAuthenticated(true);
      loadQueries();
    } else if (passcode.length >= 4) {
      setError('Invalid Access Code');
      setTimeout(() => setPasscode(''), 500);
      setTimeout(() => setError(''), 2000);
    }
  }, [passcode]);

  const loadQueries = () => {
    const data = JSON.parse(localStorage.getItem('sirenexis_queries') || '[]');
    setQueries(data);
  };

  const deleteQuery = (id: number) => {
    const updated = queries.filter(q => q.id !== id);
    setQueries(updated);
    localStorage.setItem('sirenexis_queries', JSON.stringify(updated));
  };

  const clearAll = () => {
    if (window.confirm('Delete all queries?')) {
      setQueries([]);
      localStorage.removeItem('sirenexis_queries');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-sirenexis-cream flex items-center justify-center p-6">
        <div className="max-w-md w-full text-center space-y-12">
          <ScrollReveal>
            <h1 className="text-4xl font-black tracking-tighter text-sirenexis-green uppercase">Staff Access</h1>
            <p className="text-sirenexis-green/60 font-medium">Enter authorization sequence</p>
          </ScrollReveal>

          <div className="flex justify-center space-x-4">
            {[0, 1, 2, 3].map((i) => (
              <div 
                key={i} 
                className={`w-12 h-16 rounded-2xl flex items-center justify-center text-2xl font-black transition-all duration-300 ${
                  passcode.length > i ? 'bg-sirenexis-green text-sirenexis-cream' : 'bg-white text-sirenexis-green/20'
                } ${error ? 'border-2 border-red-500 animate-shake' : ''}`}
              >
                {passcode[i] ? '•' : ''}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-4 max-w-[280px] mx-auto">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, '', 0, 'del'].map((val, i) => (
              <button
                key={i}
                onClick={() => {
                  if (val === 'del') setPasscode(p => p.slice(0, -1));
                  else if (val !== '') setPasscode(p => p + val);
                }}
                className="w-full aspect-square rounded-full bg-white text-sirenexis-green text-xl font-bold flex items-center justify-center hover:bg-sirenexis-green hover:text-sirenexis-cream transition-colors active:scale-90"
              >
                {val === 'del' ? '←' : val}
              </button>
            ))}
          </div>
          
          {error && <p className="text-red-500 font-bold animate-pulse">{error}</p>}
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 bg-sirenexis-cream min-h-screen">
      <div className="container mx-auto px-6">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
          <div>
            <h1 className="text-5xl font-black tracking-tighter text-sirenexis-green">Dashboard.</h1>
            <p className="text-sirenexis-green/60 font-bold uppercase tracking-widest text-xs mt-2">Active Inquiries</p>
          </div>
          <div className="flex space-x-4">
            <button onClick={loadQueries} className="px-6 py-2 bg-white text-sirenexis-green rounded-full font-bold text-sm shadow-sm hover:shadow-md transition-shadow">Refresh</button>
            <button onClick={clearAll} className="px-6 py-2 bg-red-50 text-red-600 rounded-full font-bold text-sm hover:bg-red-100 transition-colors">Clear All</button>
            <button onClick={() => setIsAuthenticated(false)} className="px-6 py-2 bg-sirenexis-green text-sirenexis-cream rounded-full font-bold text-sm">Logout</button>
          </div>
        </header>

        {queries.length === 0 ? (
          <div className="bg-white p-20 rounded-3xl text-center shadow-xl">
            <p className="text-2xl font-bold text-sirenexis-green/30 tracking-tight">No active inquiries found.</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {queries.map((q) => (
              <div key={q.id} className="bg-white p-8 rounded-3xl shadow-xl flex flex-col md:flex-row gap-8 relative group">
                <div className="flex-grow space-y-6">
                  <div className="flex flex-col md:flex-row justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-black text-sirenexis-green tracking-tight">{q.name}</h3>
                      <p className="text-sirenexis-green/60 font-bold text-sm uppercase tracking-widest">{q.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sirenexis-green/40 font-bold text-xs">{q.timestamp}</p>
                      <a href={`mailto:${q.email}`} className="text-sirenexis-green font-bold text-sm underline underline-offset-4">{q.email}</a>
                    </div>
                  </div>
                  <div className="p-6 bg-sirenexis-cream rounded-2xl italic text-sirenexis-green/80 font-medium">
                    "{q.message}"
                  </div>
                </div>
                <button 
                  onClick={() => deleteQuery(q.id)}
                  className="bg-red-50 text-red-500 p-4 rounded-2xl hover:bg-red-500 hover:text-white transition-all opacity-0 group-hover:opacity-100 flex items-center justify-center self-center"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPortal;

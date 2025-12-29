
import React, { useState, useEffect } from 'react';
import ScrollReveal from '../components/ScrollReveal';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [time, setTime] = useState(new Date().toLocaleTimeString('en-GB', { timeZone: 'Europe/London' }));
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-GB', { timeZone: 'Europe/London' }));
    }, 1000);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      clearInterval(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const existingQueries = JSON.parse(localStorage.getItem('sirenexis_queries') || '[]');
    const newQuery = {
      ...formData,
      id: Date.now(),
      timestamp: new Date().toLocaleString()
    };
    localStorage.setItem('sirenexis_queries', JSON.stringify([newQuery, ...existingQueries]));
    alert("Initiation Confirmed. London Hub is now processing your request.");
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const getRotation = () => {
    const centerX = window.innerWidth * 0.25; 
    const centerY = 500; 
    const angle = Math.atan2(mousePos.y - centerY, mousePos.x - centerX);
    return (angle * 180) / Math.PI + 90;
  };

  return (
    <div className="min-h-screen bg-sirenexis-cream text-sirenexis-green selection:bg-sirenexis-green selection:text-sirenexis-cream overflow-hidden relative">
      
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <svg width="100%" height="100%" className="filter blur-[100px]">
          <circle cx="20%" cy="30%" r="30%" fill="#052e23" className="animate-pulse" />
          <circle cx="80%" cy="70%" r="20%" fill="#052e23" />
        </svg>
      </div>

      <div className="container mx-auto px-6 pt-40 pb-20 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          
          <div className="w-full lg:w-5/12 sticky top-40">
            <ScrollReveal>
              <div className="space-y-12">
                <div className="relative">
                  <span className="text-[10px] font-black uppercase tracking-[0.6em] text-sirenexis-green/70 block mb-4">Origin Hub</span>
                  <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">London<br/>UK.</h2>
                </div>

                <div className="relative w-64 h-64 flex items-center justify-center group cursor-crosshair">
                  <div className="absolute inset-0 border border-sirenexis-green/10 rounded-full animate-[spin_20s_linear_infinite]" />
                  <div className="absolute inset-4 border border-sirenexis-green/5 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                  <div className="absolute inset-12 border border-dashed border-sirenexis-green/20 rounded-full" />
                  
                  <div 
                    className="absolute w-0.5 h-32 bg-sirenexis-green/40 origin-bottom transition-transform duration-500 ease-out pointer-events-none"
                    style={{ transform: `rotate(${getRotation()}deg) translateY(-100%)` }}
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-sirenexis-green rounded-full animate-ping" />
                  </div>
                  
                  {/* Central Hub Detail - Simple minimal point */}
                  <div className="relative z-10 bg-sirenexis-green w-4 h-4 rounded-full shadow-2xl" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 border-t border-sirenexis-green/10">
                  <div className="space-y-2">
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-sirenexis-green/60">Network Time</p>
                    <p className="text-2xl font-black">{time}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-sirenexis-green/60">Status</p>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
                      <p className="text-sm font-bold uppercase tracking-widest">Active Link</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="w-full lg:w-7/12">
            <ScrollReveal delay={200}>
              <form onSubmit={handleSubmit} className="space-y-20">
                <div className="group relative">
                  <label className="text-[10px] font-black uppercase tracking-[0.5em] text-sirenexis-green/70 group-focus-within:text-sirenexis-green transition-colors block mb-4">01 // Identity</label>
                  <input 
                    type="text"
                    required
                    className="w-full bg-transparent border-b-2 border-sirenexis-green/10 py-6 text-3xl md:text-6xl font-black outline-none focus:border-sirenexis-green transition-all placeholder:text-sirenexis-green/20"
                    placeholder="Enter Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-sirenexis-green transition-all duration-700 group-focus-within:w-full" />
                </div>

                <div className="group relative">
                  <label className="text-[10px] font-black uppercase tracking-[0.5em] text-sirenexis-green/70 group-focus-within:text-sirenexis-green transition-colors block mb-4">02 // Communication</label>
                  <input 
                    type="email"
                    required
                    className="w-full bg-transparent border-b-2 border-sirenexis-green/10 py-6 text-3xl md:text-6xl font-black outline-none focus:border-sirenexis-green transition-all placeholder:text-sirenexis-green/20"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-sirenexis-green transition-all duration-700 group-focus-within:w-full" />
                </div>

                <div className="group relative">
                  <label className="text-[10px] font-black uppercase tracking-[0.5em] text-sirenexis-green/70 group-focus-within:text-sirenexis-green transition-colors block mb-4">03 // Enterprise</label>
                  <input 
                    type="text"
                    className="w-full bg-transparent border-b-2 border-sirenexis-green/10 py-6 text-3xl md:text-6xl font-black outline-none focus:border-sirenexis-green transition-all placeholder:text-sirenexis-green/20"
                    placeholder="Organization"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-sirenexis-green transition-all duration-700 group-focus-within:w-full" />
                </div>

                <div className="group relative">
                  <label className="text-[10px] font-black uppercase tracking-[0.5em] text-sirenexis-green/70 group-focus-within:text-sirenexis-green transition-colors block mb-4">04 // Objective</label>
                  <textarea 
                    rows={2}
                    required
                    className="w-full bg-transparent border-b-2 border-sirenexis-green/10 py-6 text-3xl md:text-6xl font-black outline-none focus:border-sirenexis-green transition-all placeholder:text-sirenexis-green/20 resize-none"
                    placeholder="Briefly describe project"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-sirenexis-green transition-all duration-700 group-focus-within:w-full" />
                </div>

                <div className="pt-20">
                  <button 
                    type="submit"
                    className="group relative w-full h-32 md:h-40 bg-white border border-sirenexis-green/10 rounded-full overflow-hidden transition-all duration-500 hover:border-sirenexis-green active:scale-95 shadow-2xl"
                  >
                    <div className="absolute inset-0 bg-sirenexis-green translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)]" />
                    <span className="relative z-10 text-2xl md:text-4xl font-black tracking-widest uppercase transition-colors duration-500 group-hover:text-sirenexis-cream">
                      Initialize Connect
                    </span>
                  </button>
                </div>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

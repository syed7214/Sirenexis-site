
import React, { useState, useEffect, useRef } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import Counter from '../components/Counter';

const testimonials = [
    {
        id: 1,
        quote: "Sirenexis didn't just handle our emails; they doubled our engagement with their video edits. It feels like they're in the next room, not a different continent.",
        author: "Sarah J.",
        role: "London Real Estate",
        img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
    },
    {
        id: 2,
        quote: "The 7-day trial was flawless. We signed the contract immediately. The level of British nuance they bring to customer support is unmatched.",
        author: "Mike T.",
        role: "E-com Founder",
        img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
    },
    {
        id: 3,
        quote: "Finally, an outsourcing team that understands luxury. They've integrated into our workflow perfectly. Our customers have no idea they aren't in-house.",
        author: "Emma R.",
        role: "Property Manager",
        img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200"
    },
    {
        id: 4,
        quote: "Sirenexis didn't just fill a gap; they architected a new standard for our internal operations. The scalability they provide is unprecedented in the agency space.",
        author: "James L.",
        role: "Apex Fintech CEO",
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
    },
    {
        id: 5,
        quote: "Their creative team has a rare eye for luxury aesthetics. They've effectively become our digital brand guardians, elevating every asset we put out.",
        author: "Clara M.",
        role: "Creative Director, VELA",
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
    },
    {
        id: 6,
        quote: "Native fluency matters. Our CSAT scores hit an all-time high within the first month of partnering with the Sirenexis support ecosystem.",
        author: "David K.",
        role: "CloudScale Founder",
        img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
    }
];

const Experience: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollContainerRef.current) return;
      
      const rect = scrollContainerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const totalHeight = rect.height;
      const progress = Math.max(0, Math.min(-rect.top / (totalHeight - windowHeight), 1));
      
      const index = Math.min(
        Math.floor(progress * testimonials.length),
        testimonials.length - 1
      );
      
      setActiveIndex(index);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTestimonial = (index: number) => {
    if (!scrollContainerRef.current) return;
    const containerTop = scrollContainerRef.current.offsetTop;
    const containerHeight = scrollContainerRef.current.offsetHeight;
    const windowHeight = window.innerHeight;
    
    const scrollTarget = containerTop + (index / testimonials.length) * (containerHeight - windowHeight) + 50;
    
    window.scrollTo({
      top: scrollTarget,
      behavior: 'smooth'
    });
  };

  return (
    <div className="pt-32 bg-sirenexis-cream pb-32">
      <div className="container mx-auto px-6">
        <ScrollReveal>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-20 md:mb-32 max-w-4xl text-sirenexis-green">
                The Experience.
            </h1>
        </ScrollReveal>

        {/* Cinematic Main Visual */}
        <ScrollReveal>
            <div className="relative h-[50vh] md:h-[80vh] rounded-3xl overflow-hidden mb-24 md:mb-40 shadow-2xl">
                <img 
                    src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1920" 
                    className="w-full h-full object-cover grayscale brightness-50" 
                    alt="Luxury Modern Office" 
                />
                <div className="absolute inset-0 bg-sirenexis-green/40 mix-blend-multiply" />
                <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
                    <p className="text-sirenexis-cream text-xl md:text-5xl font-light tracking-tight italic max-w-4xl drop-shadow-lg leading-relaxed md:leading-normal">
                        "Excellence is not a department. It is an obsession that permeates every interaction."
                    </p>
                </div>
            </div>
        </ScrollReveal>

        {/* Scroll-Activated Testimonial Section */}
        <section 
            ref={scrollContainerRef}
            className="relative h-[400vh] md:h-[500vh] mb-40"
        >
            <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16 px-4 md:px-0">
                    <div className="w-full md:w-3/5">
                        <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] opacity-40 mb-6 md:mb-8 block text-sirenexis-green">Voices of Sirenexis</span>
                        <div className="relative h-[300px] md:h-[300px]">
                            {testimonials.map((t, idx) => (
                                <div 
                                    key={t.id} 
                                    className={`transition-all duration-1000 absolute inset-0 flex flex-col justify-center ${
                                        idx === activeIndex 
                                            ? 'opacity-100 translate-y-0 scale-100' 
                                            : 'opacity-0 translate-y-12 scale-95 pointer-events-none'
                                    }`}
                                >
                                    <p className="text-xl md:text-5xl font-black tracking-tight leading-tight md:leading-[1.1] mb-8 md:mb-12 text-sirenexis-green">
                                        "{t.quote}"
                                    </p>
                                    <div className="flex items-center space-x-4 md:space-x-6">
                                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-sirenexis-green/10 shadow-lg">
                                            <img src={t.img} alt={t.author} className="w-full h-full object-cover grayscale" />
                                        </div>
                                        <div>
                                            <p className="font-black text-lg md:text-xl text-sirenexis-green">{t.author}</p>
                                            <p className="text-[10px] md:text-sm font-bold opacity-50 text-sirenexis-green uppercase tracking-widest">{t.role}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <div className="flex space-x-2 md:space-x-3 mt-12 md:mt-20 pt-8">
                            {testimonials.map((_, idx) => (
                                <button 
                                    key={idx}
                                    onClick={() => scrollToTestimonial(idx)}
                                    className={`h-1.5 md:h-2 rounded-full transition-all duration-500 ${
                                        idx === activeIndex 
                                            ? 'bg-sirenexis-green w-10 md:w-16' 
                                            : 'bg-sirenexis-green/20 w-6 md:w-8 hover:bg-sirenexis-green/40'
                                    }`}
                                    aria-label={`Jump to testimonial ${idx + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="hidden md:block w-1/3">
                        <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                             {testimonials.map((t, idx) => (
                                <img 
                                    key={`img-${t.id}`}
                                    src={t.img.replace('w=200', 'w=800')} 
                                    className={`absolute inset-0 w-full h-full object-cover grayscale brightness-75 transition-all duration-1000 ${
                                        idx === activeIndex ? 'opacity-100 scale-110 rotate-1' : 'opacity-0 scale-100 rotate-0'
                                    }`} 
                                    alt={t.author} 
                                />
                            ))}
                            <div className="absolute inset-0 bg-gradient-to-t from-sirenexis-green/40 to-transparent" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Stats Bento Grid */}
        <section>
            <ScrollReveal>
                <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-8 md:mb-12 text-sirenexis-green">By The Numbers</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-auto md:h-[400px]">
                <div className="md:col-span-2 bg-sirenexis-green rounded-3xl p-8 md:p-12 text-sirenexis-cream flex flex-col justify-end shadow-2xl group overflow-hidden relative min-h-[250px] md:min-h-0">
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-1000">
                        <svg className="w-24 h-24 md:w-32 md:h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
                    </div>
                    <p className="text-5xl md:text-7xl font-black tracking-tighter relative z-10">
                        <Counter end={98.4} decimals={1} suffix="%" />
                    </p>
                    <p className="opacity-60 text-[10px] md:text-sm font-bold uppercase tracking-widest relative z-10 mt-2">Customer Satisfaction Rate</p>
                </div>
                <div className="bg-white rounded-3xl p-6 md:p-8 flex flex-col justify-end shadow-xl border border-sirenexis-green/5 hover:scale-[1.02] transition-transform duration-500 min-h-[150px] md:min-h-0">
                    <p className="text-4xl md:text-5xl font-black tracking-tighter text-sirenexis-green">
                        <Counter end={120} suffix="s" />
                    </p>
                    <p className="opacity-60 text-[10px] uppercase tracking-[0.3em] text-sirenexis-green font-black mt-2">Avg Response Time</p>
                </div>
                <div className="bg-white rounded-3xl p-6 md:p-8 flex flex-col justify-end shadow-xl border border-sirenexis-green/5 hover:scale-[1.02] transition-transform duration-500 min-h-[150px] md:min-h-0">
                    <p className="text-4xl md:text-5xl font-black tracking-tighter text-sirenexis-green">
                        <Counter end={24} />/<Counter end={7} />
                    </p>
                    <p className="opacity-60 text-[10px] uppercase tracking-[0.3em] text-sirenexis-green font-black mt-2">Global Operations</p>
                </div>
            </div>
        </section>
      </div>
    </div>
  );
};

export default Experience;

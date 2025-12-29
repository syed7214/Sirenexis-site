
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import MagneticButton from '../components/MagneticButton';

const Home: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const totalHeight = rect.height;
      const progress = Math.max(0, Math.min(-rect.top / (totalHeight - windowHeight), 1));
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const bgR = 232 - (232 - 5) * scrollProgress;
  const bgG = 226 - (226 - 46) * scrollProgress;
  const bgB = 217 - (217 - 35) * scrollProgress;
  const backgroundColor = `rgb(${bgR}, ${bgG}, ${bgB})`;

  const textR = 5 + (232 - 5) * scrollProgress;
  const textG = 46 + (226 - 46) * scrollProgress;
  const textB = 35 + (217 - 35) * scrollProgress;
  const textColor = `rgb(${textR}, ${textG}, ${textB})`;

  const textScale = 1 + scrollProgress * 4; 
  const textOpacity = 1 - scrollProgress * 1.4; 
  const buttonScale = 0.5 + scrollProgress * 0.5; 
  const buttonOpacity = Math.max(0, (scrollProgress - 0.4) * 2); 

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-sirenexis-green/30 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920" 
            className="w-full h-full object-cover grayscale brightness-50"
            alt="Office landscape"
          />
        </div>

        <div className="relative z-20 text-center text-sirenexis-cream px-6">
          <ScrollReveal>
            <h1 className="text-6xl md:text-[140px] font-black tracking-tighter mb-6 leading-none text-center">
              SCALABLE.<br />PERFECTED.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-sm md:text-2xl font-light opacity-80 tracking-[0.2em] uppercase px-4">
              London Strategy. Global Execution.
            </p>
          </ScrollReveal>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 animate-bounce opacity-40">
            <svg className="w-6 h-6 text-sirenexis-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
        </div>
      </section>

      {/* Seamless Portal Reveal Section */}
      <section 
        ref={containerRef}
        className="relative h-[250vh] transition-colors duration-150 ease-out"
        style={{ backgroundColor }}
      >
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
            <div 
                className="absolute flex flex-col items-center justify-center will-change-transform select-none"
                style={{ 
                    transform: `scale(${textScale})`,
                    opacity: textOpacity * 0.18,
                    color: textColor,
                    filter: `blur(${scrollProgress * 8}px)`, 
                }}
            >
                <div className="text-6xl md:text-[220px] font-black tracking-tighter whitespace-nowrap">SIRENEXIS</div>
            </div>

            <div 
                className="relative z-10 flex flex-col items-center justify-center text-center will-change-transform"
                style={{ 
                    transform: `scale(${buttonScale})`,
                    opacity: buttonOpacity,
                    visibility: buttonOpacity > 0 ? 'visible' : 'hidden'
                }}
            >
                <h2 className="text-sirenexis-cream text-2xl md:text-5xl font-bold tracking-tight mb-12 max-w-2xl px-10 leading-tight">
                    Premium support.<br />Without compromise.
                </h2>
                <Link to="/contact">
                    <MagneticButton className="px-10 py-6 md:px-16 md:py-8 bg-sirenexis-cream text-sirenexis-green rounded-full text-xl md:text-2xl font-black shadow-[0_20px_50px_rgba(0,0,0,0.4)] hover:scale-105 active:scale-95 transition-all">
                        Get Started
                    </MagneticButton>
                </Link>
            </div>
        </div>
      </section>

      {/* Trojan Horse Section */}
      <section className="py-24 md:py-32 bg-sirenexis-green text-sirenexis-cream overflow-hidden">
        <div className="container mx-auto px-6 mb-16 md:mb-20">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                <div>
                    <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-40 mb-4">Core Ecosystem</h2>
                    <h3 className="text-4xl md:text-7xl font-black tracking-tighter">What We Do.</h3>
                </div>
                <p className="text-lg md:text-xl opacity-60 max-w-sm font-medium leading-relaxed">
                    A multi-disciplinary engine built for modern enterprise growth. We bridge the gap between London's strategic vision and global excellence.
                </p>
            </div>
        </div>

        <div className="flex overflow-x-auto pb-12 px-6 md:px-12 space-x-6 md:space-x-8 scrollbar-hide no-scrollbar snap-x">
          {[
            { id: '01', title: 'Customer Support', desc: '24/7 human interaction across all platforms with native fluency. Our specialists are trained in high-stakes resolution and brand-aligned empathy, ensuring every customer feels like a priority.', img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800' },
            { id: '02', title: 'Video Editing', desc: 'Cinema-grade post-production for high-growth digital brands. We transform raw footage into high-retention assets designed to stop the scroll and drive conversions through elite storytelling.', img: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800' },
            { id: '03', title: 'Web Development', desc: 'Bespoke, high-performance digital experiences. Built with cutting-edge frameworks like React and Next.js, our sites are optimized for SEO, speed, and uncompromising visual fidelity.', img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800' },
            { id: '04', title: 'Social Media', desc: 'Aesthetic curation and brand authority management. We don\'t just post; we build ecosystems that command attention, foster community, and establish your brand as a market leader.', img: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800' },
            { id: '05', title: 'Google Ads', desc: 'ROI-focused search engine dominance. Our data-driven approach utilizes advanced tracking and high-intent keyword strategies to ensure every penny of your budget is a strategic investment.', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800' },
            { id: '06', title: 'Operations', desc: 'Backend infrastructure and process scaling. We build the systems that let you focus on your vision, from CRM management to complex process automation that works while you sleep.', img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800' },
          ].map((item) => (
            <div key={item.id} className="flex-shrink-0 w-[85vw] md:w-[500px] group snap-center transition-all duration-700">
              <div className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden mb-6 group-hover:shadow-[0_40px_100px_rgba(0,0,0,0.4)] transition-all duration-700 md:group-hover:-translate-y-4">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sirenexis-green/90 via-sirenexis-green/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 transition-transform duration-700 group-hover:-translate-y-4">
                    <span className="text-[10px] md:text-xs font-black opacity-50 block mb-2 transform transition-transform duration-700 group-hover:scale-110 group-hover:origin-left">{item.id}</span>
                    <h4 className="text-2xl md:text-3xl font-black tracking-tight mb-2 md:mb-4 group-hover:text-white transition-colors duration-700">{item.title}</h4>
                    <p className="text-xs md:text-sm opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-700 font-medium leading-relaxed translate-y-0 md:translate-y-4 md:group-hover:translate-y-0">
                      {item.desc}
                    </p>
                    <div className="h-0.5 w-0 group-hover:w-full bg-sirenexis-cream/30 mt-4 md:mt-6 transition-all duration-1000 ease-in-out" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-40 bg-sirenexis-cream">
        <div className="container mx-auto px-6 text-center max-w-4xl">
            <ScrollReveal>
                <h2 className="text-4xl md:text-8xl font-black tracking-tighter mb-8 md:mb-12 text-sirenexis-green leading-[1] md:leading-[0.9]">
                    YOUR WORLDWIDE <br className="hidden md:block" />POWERHOUSE.
                </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
                <Link to="/contact">
                    <MagneticButton className="px-10 py-5 md:px-12 md:py-6 bg-sirenexis-green text-sirenexis-cream rounded-full text-lg md:text-xl font-black hover:shadow-2xl transition-all">
                        Start 7-Day Trial
                    </MagneticButton>
                </Link>
            </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Home;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import Counter from '../components/Counter';

const Services: React.FC = () => {
  const navigate = useNavigate();

  const handleQuoteRequest = () => {
    navigate('/contact');
  };

  return (
    <div className="pt-32 bg-sirenexis-cream">
      <div className="container mx-auto px-6">
        <header className="mb-20 md:mb-32 max-w-4xl">
            <ScrollReveal>
                <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-tight md:leading-none mb-8 text-sirenexis-green">
                    Services.<br />Engineered for Scale.
                </h1>
                <p className="text-lg md:text-2xl text-sirenexis-green font-bold">
                    Every package is treated like a flagship product launch. We don't just provide labor; we provide infrastructure.
                </p>
            </ScrollReveal>
        </header>

        {/* Section 1 - Support */}
        <section className="py-12 md:py-24 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <ScrollReveal>
                <div className="rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl group cursor-none">
                    <img 
                        src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1200" 
                        className="w-full h-full object-cover grayscale brightness-75 transition-all duration-1000 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105" 
                        alt="Global Support Team" 
                    />
                </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
                <div className="space-y-8">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-sirenexis-green">24/7 Human Support. No Bots.</h2>
                    <p className="text-lg md:text-xl text-sirenexis-green font-medium leading-relaxed max-w-md">
                        Our global support teams provide seamless, high-nuance English support across all time zones. We don't believe in automation; we believe in empathy and British standards of service. 
                        <br /><br />
                        Our agents are trained to understand the subtleties of brand voice, ensuring every ticket and chat feels like it's coming from your headquarters.
                    </p>
                    <ul className="space-y-4 text-sm font-black text-sirenexis-green uppercase tracking-widest">
                        <li className="flex items-center space-x-3 group">
                            <span className="w-3 h-3 bg-sirenexis-green rounded-full transition-all group-hover:scale-150"></span>
                            <span>Native-level English fluency</span>
                        </li>
                        <li className="flex items-center space-x-3 group">
                            <span className="w-3 h-3 bg-sirenexis-green rounded-full transition-all group-hover:scale-150"></span>
                            <span>Multi-channel (Email, Chat, Phone)</span>
                        </li>
                    </ul>
                </div>
            </ScrollReveal>
        </section>

        {/* Section 2 - Creative Ops */}
        <section className="py-12 md:py-24 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <ScrollReveal className="order-2 md:order-1">
                <div className="space-y-8">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-sirenexis-green">Creative Ops. Film Quality.</h2>
                    <p className="text-lg md:text-xl text-sirenexis-green font-medium leading-relaxed max-w-md">
                        We turn raw footage into viral content. We bridge technical excellence and premium storytelling to ensure your brand's digital identity is as polished as its global operations.
                        <br /><br />
                        From short-form TikToks to high-end brand films, our editing suite is staffed by artists who understand pacing, color, and conversion triggers.
                    </p>
                    <div className="p-6 md:p-8 rounded-3xl bg-white italic font-black text-xl md:text-2xl text-sirenexis-green shadow-xl border border-sirenexis-green/5 hover:border-sirenexis-green/20 transition-all cursor-default">
                        "Outsourcing with cinematic standards."
                    </div>
                </div>
            </ScrollReveal>
            <ScrollReveal delay={200} className="order-1 md:order-2">
                <div className="rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl group">
                    <img 
                        src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1200" 
                        className="w-full h-full object-cover grayscale brightness-75 transition-all duration-1000 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105" 
                        alt="Professional Cinema Studio" 
                    />
                </div>
            </ScrollReveal>
        </section>

        {/* Section 3 - Web Development */}
        <section className="py-12 md:py-24 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <ScrollReveal>
                <div className="rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl group">
                    <img 
                        src="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=1200" 
                        className="w-full h-full object-cover grayscale brightness-75 transition-all duration-1000 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105" 
                        alt="Bespoke Web Development" 
                    />
                </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
                <div className="space-y-8">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-sirenexis-green">Web Dev. Built for Conversion.</h2>
                    <p className="text-lg md:text-xl text-sirenexis-green font-medium leading-relaxed max-w-md">
                        High-performance, bespoke web experiences that load at the speed of thought. We combine "Apple" levels of aesthetic polish with robust backend architecture.
                        <br /><br />
                        Whether it's a landing page for a new product or a complex internal dashboard, our code is clean, documented, and optimized for maximum speed and SEO.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <span className="px-4 py-2 bg-sirenexis-green text-sirenexis-cream text-[10px] font-black rounded-full uppercase hover:scale-110 transition-transform cursor-default">React</span>
                        <span className="px-4 py-2 bg-sirenexis-green text-sirenexis-cream text-[10px] font-black rounded-full uppercase hover:scale-110 transition-transform cursor-default">Next.js</span>
                        <span className="px-4 py-2 bg-sirenexis-green text-sirenexis-cream text-[10px] font-black rounded-full uppercase hover:scale-110 transition-transform cursor-default">Shopify</span>
                    </div>
                </div>
            </ScrollReveal>
        </section>

        {/* Section 4 - Social Media Management */}
        <section className="py-12 md:py-24 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <ScrollReveal className="order-2 md:order-1">
                <div className="space-y-8">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-sirenexis-green">Social. Aesthetic Authority.</h2>
                    <p className="text-lg md:text-xl text-sirenexis-green font-medium leading-relaxed max-w-md">
                        We don't just post; we curate. Our management team handles your entire social ecosystem, from content calendars to organic engagement strategies that command attention.
                        <br /><br />
                        We focus on building long-term brand equity through consistent, high-value interaction and visual excellence.
                    </p>
                </div>
            </ScrollReveal>
            <ScrollReveal delay={200} className="order-1 md:order-2">
                <div className="rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl group">
                    <img 
                        src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1200" 
                        className="w-full h-full object-cover grayscale brightness-75 transition-all duration-1000 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105" 
                        alt="Social Media Management" 
                    />
                </div>
            </ScrollReveal>
        </section>

        {/* Section 5 - Google Ads */}
        <section className="py-12 md:py-24 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <ScrollReveal>
                <div className="rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl group">
                    <img 
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" 
                        className="w-full h-full object-cover grayscale brightness-75 transition-all duration-1000 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105" 
                        alt="Google Ads Strategy" 
                    />
                </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
                <div className="space-y-8">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-sirenexis-green">Ads. Precision Scaling.</h2>
                    <p className="text-lg md:text-xl text-sirenexis-green font-medium leading-relaxed max-w-md">
                        Data-driven Google Ads campaigns that prioritize ROI. We use advanced tracking and high-intent keyword strategy to ensure your budget is an investment, not an expense.
                        <br /><br />
                        Our team constantly A/B tests and optimizes to lower your CAC while increasing your lifetime value.
                    </p>
                    <div className="bg-white p-8 rounded-3xl border border-sirenexis-green/5 shadow-lg group hover:border-sirenexis-green/20 transition-all cursor-default">
                        <p className="text-sm font-black uppercase text-sirenexis-green/40 mb-2 transition-colors group-hover:text-sirenexis-green">Peak Campaign Performance</p>
                        <p className="text-4xl font-black text-sirenexis-green uppercase transform transition-transform group-hover:scale-105 origin-left">
                           <Counter end={3} suffix="x" /> ROI
                        </p>
                    </div>
                </div>
            </ScrollReveal>
        </section>

        {/* Section 6 - Operations */}
        <section className="py-12 md:py-24 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <ScrollReveal className="order-2 md:order-1">
                <div className="space-y-8">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-sirenexis-green">Operations. Seamless Efficiency.</h2>
                    <p className="text-lg md:text-xl text-sirenexis-green font-medium leading-relaxed max-w-md">
                        We build the backend systems that let you focus on vision. From CRM management to complex process automation, we ensure your internal gears turn with silent precision.
                        <br /><br />
                        Our operations specialists work as an extension of your COO, mapping out workflows that remove friction and accelerate output.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <span className="px-4 py-2 bg-sirenexis-green text-sirenexis-cream text-[10px] font-black rounded-full uppercase hover:scale-110 transition-transform cursor-default">Automation</span>
                        <span className="px-4 py-2 bg-sirenexis-green text-sirenexis-cream text-[10px] font-black rounded-full uppercase hover:scale-110 transition-transform cursor-default">Scalability</span>
                    </div>
                </div>
            </ScrollReveal>
            <ScrollReveal delay={200} className="order-1 md:order-2">
                <div className="rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl group">
                    <img 
                        src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200" 
                        className="w-full h-full object-cover grayscale brightness-75 transition-all duration-1000 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105" 
                        alt="Business Operations Excellence" 
                    />
                </div>
            </ScrollReveal>
        </section>

        {/* Pricing Grid */}
        <section className="py-24 md:py-32">
            <div className="text-center mb-16 md:mb-20">
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-sirenexis-green uppercase">Service Tiers</h2>
                <p className="text-sirenexis-green font-black opacity-60 uppercase tracking-widest text-xs">Simple, scalable, transparent partnerships.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                {/* Maintenance */}
                <ScrollReveal>
                    <div className="group bg-white p-8 md:p-12 rounded-3xl flex flex-col h-full shadow-2xl md:hover:-translate-y-4 transition-all duration-500">
                        <h3 className="text-3xl font-black mb-2 text-sirenexis-green group-hover:translate-x-2 transition-transform">Maintenance</h3>
                        <p className="text-sm text-sirenexis-green font-bold mb-8 italic opacity-60">For developing brands.</p>
                        <ul className="space-y-4 mb-10 text-sirenexis-green/70 text-sm font-medium">
                            <li className="flex items-center space-x-3">
                                <span className="w-1.5 h-1.5 bg-sirenexis-green rounded-full"></span>
                                <span>Part-time Customer Support</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <span className="w-1.5 h-1.5 bg-sirenexis-green rounded-full"></span>
                                <span>Basic Video Post-Production</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <span className="w-1.5 h-1.5 bg-sirenexis-green rounded-full"></span>
                                <span>Web Monthly Maintenance</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <span className="w-1.5 h-1.5 bg-sirenexis-green rounded-full"></span>
                                <span>Weekly Social Management</span>
                            </li>
                        </ul>
                        <button onClick={handleQuoteRequest} className="mt-auto w-full py-4 bg-sirenexis-green text-sirenexis-cream rounded-full font-black group-hover:scale-105 transition-all shadow-xl hover:shadow-sirenexis-green/20">Request Quote</button>
                    </div>
                </ScrollReveal>

                {/* Growth */}
                <ScrollReveal delay={100}>
                    <div className="group bg-sirenexis-green p-8 md:p-12 rounded-3xl text-sirenexis-cream flex flex-col h-full transform md:-translate-y-8 shadow-[0_30px_60px_rgba(5,46,35,0.4)] relative z-10 md:hover:-translate-y-12 transition-all duration-500">
                        <div className="bg-white text-sirenexis-green text-xs uppercase font-black tracking-widest inline-block px-5 py-2 rounded-full mb-6 w-fit group-hover:scale-110 transition-transform">Featured</div>
                        <h3 className="text-3xl font-black mb-2 group-hover:translate-x-2 transition-transform">Growth</h3>
                        <p className="text-sm font-bold mb-8 opacity-80 italic">For scaling powerhouses.</p>
                        <ul className="space-y-4 mb-10 text-sirenexis-cream/70 text-sm font-medium">
                            <li className="flex items-center space-x-3">
                                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                                <span>Full-time Support Specialist</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                                <span>Cinema-Grade Creative Ops</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                                <span>Dedicated Web & CRO Lead</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                                <span>Advanced Google Ads Management</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                                <span>Omni-channel Social Presence</span>
                            </li>
                        </ul>
                        <button onClick={handleQuoteRequest} className="mt-auto w-full py-5 bg-white text-sirenexis-green rounded-full font-black group-hover:scale-105 transition-all text-lg shadow-2xl">Inquire for Growth</button>
                    </div>
                </ScrollReveal>

                {/* Enterprise */}
                <ScrollReveal delay={200}>
                    <div className="group bg-white p-8 md:p-12 rounded-3xl flex flex-col h-full shadow-2xl md:hover:-translate-y-4 transition-all duration-500">
                        <h3 className="text-3xl font-black mb-2 text-sirenexis-green group-hover:translate-x-2 transition-transform">Enterprise</h3>
                        <p className="text-sm text-sirenexis-green font-bold mb-8 italic opacity-60">Full-suite infrastructure.</p>
                        <ul className="space-y-4 mb-10 text-sirenexis-green/70 text-sm font-medium">
                            <li className="flex items-center space-x-3">
                                <span className="w-1.5 h-1.5 bg-sirenexis-green rounded-full"></span>
                                <span>Custom Support Pods (24/7)</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <span className="w-1.5 h-1.5 bg-sirenexis-green rounded-full"></span>
                                <span>Full-Stack Operations Team</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <span className="w-1.5 h-1.5 bg-sirenexis-green rounded-full"></span>
                                <span>Bespoke App & Software Dev</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <span className="w-1.5 h-1.5 bg-sirenexis-green rounded-full"></span>
                                <span>Dedicated Brand Strategy Hub</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <span className="w-1.5 h-1.5 bg-sirenexis-green rounded-full"></span>
                                <span>On-site Consulting Options</span>
                            </li>
                        </ul>
                        <button onClick={handleQuoteRequest} className="mt-auto w-full py-4 bg-sirenexis-green text-sirenexis-cream rounded-full font-black group-hover:scale-105 transition-all shadow-xl hover:shadow-sirenexis-green/20">Contact Sales</button>
                    </div>
                </ScrollReveal>
            </div>
        </section>
      </div>
    </div>
  );
};

export default Services;

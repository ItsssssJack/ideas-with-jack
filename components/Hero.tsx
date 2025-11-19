import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Loader2, Zap, ShieldCheck, LogOut, Gem } from 'lucide-react';

export const Hero: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');

    try {
      // Send to Make.com webhook
      const response = await fetch('https://hook.eu2.make.com/7nvml8tt66tvnjorrt6g84975djzts8p', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        // Handle error - could add error state here
        console.error('Webhook failed');
        setStatus('idle');
      }
    } catch (error) {
      console.error('Error submitting email:', error);
      setStatus('idle');
    }
  };

  return (
    <section id="newsletter" className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden min-h-screen flex items-center">
      {/* Background Decor */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-brand-900/20 rounded-full blur-[100px] opacity-40" />
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[100px] opacity-30" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center w-full">
        {/* Social Proof Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8 animate-fade-in-up hover:bg-white/10 transition-colors cursor-default">
           <Zap className="w-3 h-3 text-yellow-400" fill="currentColor" />
          <span className="text-xs font-medium text-yellow-400/90">25,000+ Entrepreneurs, Builders & Creators</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-7 leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600">
            One Email. One Big Idea.
          </span>
          <br className="hidden md:block" />
          Every Week.
        </h1>

        <p className="text-base md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Every week, I share the most valuable insight I've learned—whether it's about AI, business, tech, or building things people want. 3 minutes to read. Stuff I don't share anywhere else.
        </p>

        {/* Signup Form */}
        <div className="max-w-lg mx-auto mb-6 relative">
          {status === 'success' ? (
            <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-6 text-center animate-fade-in backdrop-blur-sm">
              <div className="w-12 h-12 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="font-bold text-white text-lg">You're on the list!</h3>
              <p className="text-slate-300">Check your inbox for something valuable.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="relative group">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  {/* Mobile-only visual indicator */}
                  <div className="absolute -top-8 left-0 sm:hidden text-xs font-semibold text-yellow-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse"></span>
                    Start here
                  </div>

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full h-16 sm:h-14 px-6 rounded-full border-2 border-yellow-500/30 bg-white/[0.08] backdrop-blur-xl text-white text-[17px] sm:text-[16px] font-medium placeholder:text-slate-400 placeholder:font-normal focus:border-yellow-500 focus:ring-4 focus:ring-yellow-500/30 transition-all duration-200 outline-none shadow-[0_0_20px_rgba(234,179,8,0.15)] focus:shadow-[0_0_30px_rgba(234,179,8,0.3)] hover:bg-white/[0.12] active:scale-[0.99]"
                    autoComplete="email"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="h-16 sm:h-14 px-10 sm:px-8 bg-yellow-500 text-black rounded-full font-bold text-base transition-all hover:scale-105 hover:bg-yellow-400 disabled:opacity-70 disabled:hover:scale-100 flex items-center justify-center gap-2 shadow-lg shadow-yellow-500/20 min-w-[160px]"
                >
                  {status === 'loading' ? (
                    <Loader2 className="animate-spin w-5 h-5" />
                  ) : (
                    <>
                      Get Started <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

        <div className="text-xs text-slate-500 mb-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <span className="flex items-center gap-1.5">
            <ShieldCheck size={14} className="text-emerald-500"/> No spam.
          </span>
          <span className="flex items-center gap-1.5">
            <LogOut size={14} className="text-slate-400"/> Unsubscribe anytime.
          </span>
          <span className="flex items-center gap-1.5">
            <Gem size={14} className="text-blue-400"/> 100% valuable.
          </span>
        </div>

        {/* Subscriber Faces */}
        <div className="flex flex-col items-center gap-3 mb-12">
          <img
            src="/subscriber-faces.png"
            alt="Trusted by thousands of entrepreneurs"
            className="h-12 w-auto"
          />
          <p className="text-sm text-slate-400">
            Trusted by <span className="text-white font-semibold">25,000+ entrepreneurs</span> worldwide
          </p>
        </div>

        {/* Stats Grid */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-12 pt-8 border-t border-white/5 max-w-4xl mx-auto">
          {[
            { label: '7-Figure Founder' },
            { label: '4,000+ Businesses Scaled' },
            { label: 'Top-100 UK Entrepreneur' },
          ].map((stat, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-yellow-500/10 flex items-center justify-center border border-yellow-500/20">
                 <CheckCircle2 size={12} className="text-yellow-400" strokeWidth={3} />
              </div>
              <span className="text-sm font-medium text-slate-300">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
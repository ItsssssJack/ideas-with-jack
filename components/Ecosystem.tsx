import React from 'react';
import { Check, ArrowUpRight, Users, Building2, BarChart3, Clock, DollarSign, RefreshCw } from 'lucide-react';

export const Ecosystem: React.FC = () => {
  return (
    <section id="ecosystem" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Want to Go Deeper?</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Already subscribed? Here's how to work with me directly:
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-10 mb-16">

          {/* Community Card - Left */}
          <div className="relative rounded-[2rem] p-6 md:p-8 flex flex-col h-full bg-[#080c16] border border-white/5 overflow-hidden group transition-all duration-300 hover:border-blue-500/50">
            {/* Background Gradient */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-900/10 rounded-full blur-[100px] opacity-50 pointer-events-none" />

            <div className="flex items-center justify-between mb-8">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-white border border-white/10">
                <Users size={28} />
              </div>
              <span className="px-4 py-1.5 rounded-full bg-slate-800/50 border border-slate-700 text-xs font-semibold text-slate-300">
                For Founders & Agencies
              </span>
            </div>

            <h3 className="text-3xl font-bold text-white mb-4">AI Automations with Jack</h3>
            <p className="text-slate-400 mb-8 leading-relaxed text-lg">
              Get your first paying AI client in 90 days, guaranteed. 107 plug-and-play systems, 24/7 technical support.
            </p>

            <ul className="space-y-4 mb-10 flex-1">
              {[
                "Step-by-step roadmap to first 5 clients",
                "$22K+ in tool discounts (n8n, Make, Stripe)",
                "Weekly live coaching calls & Hotseats",
                "100% Technical solution guarantee"
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 text-blue-500">
                    <Check size={18} strokeWidth={3} />
                  </div>
                  <span className="text-slate-300 font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="w-full py-4 rounded-xl bg-white hover:bg-slate-200 text-slate-900 font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-white/5 group-hover:scale-[1.02]">
              Join Community <ArrowUpRight size={20} />
            </button>
          </div>

          {/* Agency Card - Right */}
          <div className="relative rounded-[2rem] p-6 md:p-8 flex flex-col h-full bg-[#0B0F19] border border-white/5 overflow-hidden group transition-all duration-300 hover:border-purple-500/50">
             {/* Background Gradient */}
             <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-purple-900/10 rounded-full blur-[100px] opacity-50 pointer-events-none" />

            <div className="flex items-center justify-between mb-8">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-white border border-white/10">
                <Building2 size={28} />
              </div>
              <span className="px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-300">
                Teddy AI
              </span>
            </div>

            <h3 className="text-3xl font-bold text-white mb-4">Become an AI Native Business</h3>
            <p className="text-slate-400 mb-8 leading-relaxed text-lg">
              Deploy high ROI systems in 60 days. Trusted by 3,500+ organizations.
            </p>

            <ul className="space-y-4 mb-10 flex-1">
              {[
                "739 AI systems launched across clients",
                "$83M in documented client growth",
                "57-day average deployment time",
                "98% client retention rate"
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 text-purple-500">
                    <Check size={18} strokeWidth={3} />
                  </div>
                  <span className="text-slate-300 font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://cal.com/jackroberts/teddy-15?overlayCalendar=true"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-purple-900/20 group-hover:scale-[1.02]"
            >
              Let's Chat <ArrowUpRight size={20} />
            </a>
          </div>

        </div>

        {/* Video Section */}
        <div className="max-w-4xl mx-auto mt-20">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">See Inside the Community</h3>
            <p className="text-slate-400 text-lg">Watch how we help founders build and scale with AI</p>
          </div>

          <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black">
            <iframe
              src="https://www.loom.com/embed/e7a9f2faf0f741a2ab084267790ee4dd"
              frameBorder="0"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
              title="AI Automations Overview"
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
};
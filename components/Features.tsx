import React from 'react';
import { Clock, FileText, TrendingUp } from 'lucide-react';

export const Features: React.FC = () => {
  const features = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Short & Practical',
      desc: "No fluff. Just the most valuable thing I've learned that week, condensed into a 3-minute read you can apply immediately.",
      color: 'bg-amber-500/10 text-amber-400',
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Exclusive Insights',
      desc: "Real lessons from scaling businesses, staying ahead in tech, and building in public. The honest stuff I don't post on social media.",
      color: 'bg-purple-500/10 text-purple-400',
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Whatever's Most Valuable",
      desc: "AI tools one week, business strategy the next, tech trends after that. The newsletter adapts to what matters most right now.",
      color: 'bg-blue-500/10 text-blue-400',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background via-surface to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What You Get Every Week</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">Three promises I make with every email I send</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="relative group"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative p-10 rounded-3xl bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col">
                <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg animate-[pulse_5s_ease-in-out_infinite]`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed text-base flex-1">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
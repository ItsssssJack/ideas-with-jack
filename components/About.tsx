import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-background overflow-hidden relative">
      {/* Divider line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Side */}
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-yellow-500"></div>
                <span className="text-yellow-400 text-sm font-bold tracking-wider uppercase">
                About The Author
                </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Howdy from Jack <span className="inline-block animate-wave origin-bottom-right">👋</span>
            </h2>
            
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>
                I've built a <span className="text-white font-semibold">7-figure AI Automation business</span> in just 12 months and help run the largest paid AI community in the world.
              </p>
              <p>
                I've helped <span className="text-white font-semibold">4,000+ businesses scale</span> and taught thousands of founders how to actually implement tech that matters.
              </p>
              <p>
                Before AI, I was building tech startups, scaling businesses, and learning hard lessons about entrepreneurship. I exited successfully and landed as a <span className="text-white font-semibold">Top-100 UK Entrepreneur</span>. This newsletter is where I share all of it—not just AI.
              </p>
            </div>

            <div className="mt-10 p-6 rounded-2xl bg-white/5 border border-white/5 border-l-4 border-l-yellow-500">
               <p className="text-xl font-serif italic text-slate-300">
                 "The best lessons aren't taught in courses—they're earned through building, failing, and trying again. I share mine every week."
               </p>
            </div>
          </div>

          {/* Image Side */}
          <div className="order-1 lg:order-2 relative">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-blue-600/20 blur-3xl -z-10" />

            {/* Single Hero Image */}
            <div className="relative group">
                <img
                    src="/jack-collage.png?v=3"
                    alt="Jack Roberts"
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
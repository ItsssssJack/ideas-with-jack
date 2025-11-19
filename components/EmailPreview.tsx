import React from 'react';
import { Download, Paperclip } from 'lucide-react';

export const EmailPreview: React.FC = () => {
  return (
    <section className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <span className="text-yellow-500 font-bold tracking-wider uppercase text-xs mb-2 block">What's inside the box?</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">Real emails. Real strategies. No fluff.</h2>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl shadow-black/50 overflow-hidden border border-white/10 relative transform hover:scale-[1.01] transition-transform duration-500">
          
          {/* Email Header Sim */}
          <div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg">The $40,000 AI Blueprint</h3>
              <div className="flex items-center gap-2 text-sm text-slate-500 mt-1">
                <span className="w-6 h-6 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 text-white flex items-center justify-center font-bold text-xs">J</span>
                <span className="font-medium text-slate-700">From: Ideas with Jack</span>
              </div>
            </div>
            <span className="text-xs font-mono text-slate-400 bg-white px-2 py-1 rounded border border-slate-100">Just now</span>
          </div>

          {/* Email Body */}
          <div className="p-8 md:p-12 prose prose-slate max-w-none">
            <p className="text-lg text-slate-800 font-serif">Howdy, it's Jack 👋</p>
            <p className="text-slate-600">
              I recently closed a client for <strong className="bg-yellow-100 text-yellow-800 px-1 rounded">$40,000</strong> using a single automated workflow. It wasn't magic, and it wasn't complicated.
            </p>
            <p className="text-slate-600">
              Most agencies try to sell "AI" as a concept. Big mistake. Clients don't buy AI. They buy time and money.
            </p>
            <blockquote className="border-l-4 border-yellow-500 pl-4 italic text-slate-700 bg-slate-50 py-2 pr-2 rounded-r">
              "Stop selling the drill. Start selling the hole in the wall."
            </blockquote>
            <p className="text-slate-600">
              Here is the exact breakdown of the proposal I sent (click to download below), including the n8n workflow screenshot.
            </p>

            {/* Attachment Card */}
            <div className="mt-8 border border-slate-200 rounded-xl p-4 flex items-center gap-4 hover:bg-slate-50 transition-colors cursor-pointer group">
              <div className="w-12 h-12 bg-red-100 text-red-500 rounded-lg flex items-center justify-center shrink-0">
                <Paperclip size={24} />
              </div>
              <div className="flex-1">
                <p className="font-bold text-slate-900 group-hover:text-red-600 transition-colors">40k_Blueprint_2025.pdf</p>
                <p className="text-xs text-slate-500">1.2 MB • Click to download</p>
              </div>
              <Download size={20} className="text-slate-400 group-hover:text-slate-600" />
            </div>

            <div className="mt-8 pt-8 border-t border-slate-100">
              <p className="font-serif text-slate-800">Love & Automation 🩵🤖</p>
              <p className="font-bold mt-2">Jack</p>
            </div>
          </div>

          <div className="bg-slate-50 p-4 text-center border-t border-slate-100">
            <a href="#newsletter" className="text-blue-600 font-medium text-sm hover:underline">
              Read more like this in the newsletter &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
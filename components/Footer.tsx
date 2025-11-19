import React from 'react';
import { Zap, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-slate-400 py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 group mb-4">
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 p-1 rounded-lg">
                <Zap className="w-4 h-4 text-white" fill="currentColor" />
              </div>
              <span className="font-bold text-lg tracking-tight text-white">
                Ideas with <span className="text-white">Jack</span>
              </span>
            </div>
            <p className="max-w-xs text-slate-500 mb-6">
              Weekly insights on entrepreneurship, AI, tech, and building things that matter. Short, valuable, practical.
            </p>
            <div className="flex gap-4">
              <a href="https://www.youtube.com/@Itssssss_Jack" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all duration-300">
                <Youtube size={18} />
              </a>
              <a href="https://www.instagram.com/jackroberts___/?hl=en" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="https://www.linkedin.com/in/jack-roberts-ai-automations/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Explore</h4>
            <ul className="space-y-3">
              <li><a href="#newsletter" className="hover:text-white transition-colors">Newsletter</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Jack</a></li>
              <li><a href="#ecosystem" className="hover:text-white transition-colors">Community</a></li>
              <li><a href="#ecosystem" className="hover:text-white transition-colors">Agency</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-slate-600">
            © 2025 AI Jack. All Rights Reserved.
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
            Love & Automation 🩵🤖
          </div>
        </div>
      </div>
    </footer>
  );
};
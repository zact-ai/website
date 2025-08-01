import React from 'react';
import { ArrowRight, Github, BookOpen, Zap, Brain, Users, Calendar } from 'lucide-react';

interface CTAProps {
  onOpenWaitlist?: () => void;
}

const CTA = ({ onOpenWaitlist }: CTAProps) => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-black opacity-5"></div>
      
      {/* Animated Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-black/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-black/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <div className="bg-black text-white p-16 lg:p-20 relative overflow-hidden">
          {/* Background Grid */}
          <div className="absolute inset-0 bg-grid opacity-20"></div>
          
          {/* Brain Icon */}
          <div className="absolute top-8 right-8">
            <Brain size={32} className="text-white/30" />
          </div>

          <div className="relative z-10 space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-black leading-tight tracking-tighter">
                BUILD YOUR
                <br />
                AI-FIRST{' '}
                <span className="relative">
                  COMPANY
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-white"></div>
                </span>
                {' '}TODAY
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto font-light">
                Join founders and teams who are already running their companies with AI agents. 
                Book a call to see how Zact can transform your business.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={onOpenWaitlist}
                className="group relative bg-white text-black px-12 py-5 font-black text-lg tracking-wide hover:bg-gray-100 transition-all duration-300 overflow-hidden inline-block text-center"
              >
                <span className="relative z-10 flex items-center justify-center">
                  BOOK A CALL
                  <Calendar className="ml-3 group-hover:translate-x-2 transition-transform duration-300" size={20} />
                </span>
              </button>
              
              <a href="https://github.com/zact-ai/zact" className="group flex items-center justify-center space-x-3 border-2 border-white/30 hover:border-white text-white px-12 py-5 font-bold tracking-wide hover:bg-white/10 transition-all duration-300">
                <Github className="group-hover:rotate-12 transition-transform duration-300" size={20} />
                <span>VIEW ON GITHUB</span>
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/20">
              <div className="text-center">
                <div className="text-4xl font-black text-white mb-2">FREE</div>
                <div className="text-white/60 font-medium tracking-wider uppercase">2-3 Agents</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-white mb-2">$79</div>
                <div className="text-white/60 font-medium tracking-wider uppercase">Per Agent/Month</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-white mb-2">0</div>
                <div className="text-white/60 font-medium tracking-wider uppercase">Hiring Required</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
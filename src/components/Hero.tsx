import React, { useState, useEffect } from 'react';
import { ArrowRight, Terminal, Zap, Users, Brain, Building2, Calendar } from 'lucide-react';

interface HeroProps {
  onOpenWaitlist?: () => void;
}

const Hero = ({ onOpenWaitlist }: HeroProps) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  
  const fullText = "THE OS TO RUN YOUR ENTIRE COMPANY WITH AI AGENTS";
  const words = fullText.split(' ');

  useEffect(() => {
    if (currentIndex < words.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prev => prev + (prev ? ' ' : '') + words[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 200);
      return () => clearTimeout(timeout);
    } else {
      setIsTyping(false);
    }
  }, [currentIndex, words]);

  return (
    <section className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-30 mix-blend-overlay bg-noise"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="text-center space-y-12">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full animate-fade-in-up opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            <Brain size={16} className="text-white" />
            <span className="text-white/90 font-medium tracking-wide">AI AGENT PLATFORM</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tighter">
              <div className="min-h-[1.2em] flex flex-wrap justify-center items-center">
                {currentText}
                {isTyping && (
                  <span className="inline-block w-2 h-16 md:h-20 lg:h-24 bg-white animate-blink ml-2"></span>
                )}
              </div>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed font-light animate-fade-in-up opacity-0" style={{ animationDelay: '2s', animationFillMode: 'forwards' }}>
              Install AI agents as employees. Every function of your company — from marketing to legal to finance — 
              run by specialized AI agents. Build your dream team without hiring people.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up opacity-0" style={{ animationDelay: '2.5s', animationFillMode: 'forwards' }}>
            <button 
              onClick={onOpenWaitlist}
              className="group relative bg-white text-black px-12 py-5 font-black text-lg tracking-wide hover:bg-gray-100 transition-all duration-300 overflow-hidden inline-block"
            >
              <span className="relative z-10 flex items-center">
                BOOK A CALL
                <Calendar className="ml-3 group-hover:translate-x-2 transition-transform duration-300" size={20} />
              </span>
            </button>
            
            <button 
              onClick={onOpenWaitlist}
              className="group flex items-center space-x-3 text-white/70 hover:text-white transition-colors duration-300 font-medium tracking-wide"
            >
              <Users size={20} className="group-hover:rotate-12 transition-transform duration-300" />
              <span className="relative">
                JOIN WAITLIST
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto animate-fade-in-up opacity-0" style={{ animationDelay: '3s', animationFillMode: 'forwards' }}>
            <div className="text-center border-r border-white/20 last:border-r-0">
              <div className="text-3xl md:text-4xl font-black text-white mb-2">7+</div>
              <div className="text-sm text-white/60 font-medium tracking-wider uppercase">AGENT TYPES</div>
            </div>
            <div className="text-center border-r border-white/20 last:border-r-0">
              <div className="text-3xl md:text-4xl font-black text-white mb-2">$79</div>
              <div className="text-sm text-white/60 font-medium tracking-wider uppercase">PER AGENT/MONTH</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-white mb-2">0</div>
              <div className="text-sm text-white/60 font-medium tracking-wider uppercase">HIRING NEEDED</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default Hero;
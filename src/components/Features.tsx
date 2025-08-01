import React from 'react';
import { Code2, Globe, Layers, Zap, Shield, GitBranch, Users, Building2, Brain, Briefcase, DollarSign, FileText, TrendingUp, MessageSquare } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "MODULAR AI AGENTS",
      description: "Install specialized agents for every company function. FinanceGPT, LegalBot, GrowthPilot, and more. Each agent acts like a full-time employee.",
      highlight: "7+ Agents"
    },
    {
      icon: Building2,
      title: "COMPLETE COMPANY STACK",
      description: "From marketing to legal to finance — every function of your company run by AI agents. Zapier + LangGraph + Retool + OpenAI merged into one.",
      highlight: "All-in-One"
    },
    {
      icon: Users,
      title: "ZERO HIRING NEEDED",
      description: "Build your dream team without hiring people. Install agents like apps, configure them once, and let them run your company autonomously.",
      highlight: "No Headcount"
    },
    {
      icon: DollarSign,
      title: "PREDICTABLE COSTS",
      description: "$79/month per active agent. No salaries, benefits, or hiring costs. Scale your company with predictable, transparent pricing.",
      highlight: "$79/Agent"
    },
    {
      icon: Shield,
      title: "ENTERPRISE SECURITY",
      description: "Built-in permissions, audit logging, and secure connectors. All communication encrypted and sandboxed. Keep your company data safe.",
      highlight: "Enterprise"
    },
    {
      icon: TrendingUp,
      title: "AUTONOMOUS GROWTH",
      description: "Agents learn from every decision you make, building a personalized company brain. They optimize, A/B test, and scale automatically.",
      highlight: "Self-Learning"
    }
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-black opacity-5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block bg-black text-white px-6 py-2 font-bold tracking-wider text-sm mb-8">
            FEATURES
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-black mb-6 leading-tight tracking-tighter">
            YOUR COMPANY
            <br />
            RUN BY{' '}
            <span className="relative">
              AI AGENTS
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-black"></div>
            </span>
          </h2>
          <p className="text-xl text-black/60 max-w-3xl mx-auto font-light">
            Zact provides a complete AI agent platform where every function of your company is automated and optimized.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white border-2 border-black hover:bg-black hover:text-white transition-all duration-500 p-8 overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-grid opacity-5 group-hover:opacity-10 transition-opacity duration-500"></div>
              
              {/* Highlight Badge */}
              <div className="absolute top-4 right-4 bg-black text-white group-hover:bg-white group-hover:text-black px-3 py-1 text-xs font-bold tracking-wider transition-all duration-500">
                {feature.highlight}
              </div>

              <div className="relative z-10">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 border-2 border-black group-hover:border-white transition-colors duration-500">
                    <feature.icon className="w-8 h-8 text-black group-hover:text-white transition-colors duration-500" />
                  </div>
                </div>
                
                <h3 className="text-xl font-black text-black group-hover:text-white mb-4 tracking-wide transition-colors duration-500">
                  {feature.title}
                </h3>
                
                <p className="text-black/70 group-hover:text-white/80 leading-relaxed transition-colors duration-500">
                  {feature.description}
                </p>

                {/* Hover Arrow */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                  <div className="w-8 h-8 border border-white flex items-center justify-center">
                    <div className="w-4 h-0.5 bg-white"></div>
                    <div className="absolute w-2 h-2 border-r border-t border-white transform rotate-45 translate-x-1"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
import React from 'react';
import { Brain, DollarSign, FileText, TrendingUp, MessageSquare, Users, Shield, Zap, ArrowRight } from 'lucide-react';

interface AgentsProps {
  onOpenWaitlist?: () => void;
}

const Agents = ({ onOpenWaitlist }: AgentsProps) => {
  const agents = [
    {
      icon: DollarSign,
      title: "FinanceGPT",
      description: "Manages bookkeeping, budgeting, burn rate analysis, creates investor reports",
      capabilities: ["QuickBooks Integration", "Burn Rate Analysis", "Investor Reports", "Budget Forecasting"],
      color: "bg-green-500"
    },
    {
      icon: Shield,
      title: "LegalBot",
      description: "Drafts contracts, manages compliance, registers entities across jurisdictions",
      capabilities: ["Contract Generation", "Compliance Monitoring", "Entity Registration", "Legal Research"],
      color: "bg-blue-500"
    },
    {
      icon: TrendingUp,
      title: "GrowthPilot",
      description: "Builds landing pages, runs ads, A/B tests copy, and optimizes CAC automatically",
      capabilities: ["Landing Page Creation", "Ad Campaign Management", "A/B Testing", "CAC Optimization"],
      color: "bg-purple-500"
    },
    {
      icon: MessageSquare,
      title: "InboxAgent",
      description: "Answers sales and support emails, auto-routes leads to CRM",
      capabilities: ["Email Response", "Lead Routing", "CRM Integration", "Support Ticket Management"],
      color: "bg-orange-500"
    },
    {
      icon: Users,
      title: "HRAgent",
      description: "Manages contractors, payroll, and onboarding through Deel/Remote APIs",
      capabilities: ["Contractor Management", "Payroll Processing", "Onboarding Automation", "Compliance Tracking"],
      color: "bg-pink-500"
    },
    {
      icon: Brain,
      title: "ProductManagerGPT",
      description: "Creates PRDs, monitors analytics, prioritizes roadmap",
      capabilities: ["PRD Creation", "Analytics Monitoring", "Roadmap Prioritization", "Feature Planning"],
      color: "bg-indigo-500"
    },
    {
      icon: Zap,
      title: "SupportAgent",
      description: "Trains itself on docs and answers support tickets via Zendesk/Intercom",
      capabilities: ["Documentation Training", "Ticket Resolution", "Knowledge Base Management", "Customer Support"],
      color: "bg-yellow-500"
    }
  ];

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid opacity-10"></div>
      
      {/* Animated Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block bg-white text-black px-6 py-2 font-bold tracking-wider text-sm mb-8">
            AI AGENTS
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tighter">
            YOUR DREAM TEAM
            <br />
            OF{' '}
            <span className="relative">
              AI AGENTS
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-white"></div>
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto font-light">
            Install specialized agents for every function of your company. Each agent acts like a full-time employee with expertise in their domain.
          </p>
        </div>

        {/* Infinite Scroll Container */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {/* First set of cards */}
            {agents.map((agent, index) => (
              <div
                key={`first-${index}`}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/20 hover:bg-white/10 transition-all duration-500 p-8 overflow-hidden flex-shrink-0 w-80 lg:w-96 mx-4"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-grid opacity-5 group-hover:opacity-10 transition-opacity duration-500"></div>
                
                {/* Agent Icon */}
                <div className="relative z-10 mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${agent.color} rounded-lg group-hover:scale-110 transition-transform duration-500`}>
                    <agent.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-black text-white mb-4 tracking-wide">
                    {agent.title}
                  </h3>
                  
                  <p className="text-white/70 leading-relaxed mb-6">
                    {agent.description}
                  </p>

                  {/* Capabilities */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-bold text-white/50 tracking-wider uppercase mb-3">
                      Capabilities
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {agent.capabilities.map((capability, capIndex) => (
                        <span
                          key={capIndex}
                          className="inline-block bg-white/10 text-white/80 px-3 py-1 text-xs font-medium rounded-full border border-white/20"
                        >
                          {capability}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Join Waitlist Button */}
                  <div className="mt-6">
                    <button 
                      onClick={onOpenWaitlist}
                      className="group/btn w-full bg-white/10 hover:bg-white/20 text-white border border-white/30 hover:border-white/50 px-6 py-3 font-bold tracking-wide transition-all duration-300"
                    >
                      <span className="flex items-center justify-center">
                        JOIN WAITLIST
                        <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" size={16} />
                      </span>
                    </button>
                  </div>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {agents.map((agent, index) => (
              <div
                key={`second-${index}`}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/20 hover:bg-white/10 transition-all duration-500 p-8 overflow-hidden flex-shrink-0 w-80 lg:w-96 mx-4"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-grid opacity-5 group-hover:opacity-10 transition-opacity duration-500"></div>
                
                {/* Agent Icon */}
                <div className="relative z-10 mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${agent.color} rounded-lg group-hover:scale-110 transition-transform duration-500`}>
                    <agent.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-black text-white mb-4 tracking-wide">
                    {agent.title}
                  </h3>
                  
                  <p className="text-white/70 leading-relaxed mb-6">
                    {agent.description}
                  </p>

                  {/* Capabilities */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-bold text-white/50 tracking-wider uppercase mb-3">
                      Capabilities
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {agent.capabilities.map((capability, capIndex) => (
                        <span
                          key={capIndex}
                          className="inline-block bg-white/10 text-white/80 px-3 py-1 text-xs font-medium rounded-full border border-white/20"
                        >
                          {capability}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Join Waitlist Button */}
                  <div className="mt-6">
                    <button 
                      onClick={onOpenWaitlist}
                      className="group/btn w-full bg-white/10 hover:bg-white/20 text-white border border-white/30 hover:border-white/50 px-6 py-3 font-bold tracking-wide transition-all duration-300"
                    >
                      <span className="flex items-center justify-center">
                        JOIN WAITLIST
                        <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" size={16} />
                      </span>
                    </button>
                  </div>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-white/60 mb-6 font-medium">
            More agents coming soon. Request custom agents for your specific needs.
          </p>
          <button 
            onClick={onOpenWaitlist}
            className="group bg-white text-black px-8 py-4 font-bold tracking-wide hover:bg-gray-100 transition-all duration-300"
          >
            <span className="flex items-center">
              JOIN WAITLIST
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={16} />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Agents; 
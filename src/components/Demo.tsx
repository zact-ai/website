import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Terminal, Play, Brain, Users, DollarSign, ArrowRight, CheckCircle, Clock, Zap, MessageSquare, Send, User, Bot, FileText, Globe, CreditCard, TrendingUp, Building2, Palette, BarChart3, Shield, Mail, Calendar, Target, Globe2, Euro } from 'lucide-react';

interface DemoProps {
  onOpenWaitlist?: () => void;
}

interface Notification {
  id: number;
  type: 'success' | 'info' | 'warning';
  title: string;
  message: string;
  agent: string;
  timestamp: Date;
}

interface ChatMessage {
  id: number;
  type: 'user' | 'agent';
  agent?: string;
  message: string;
  timestamp: Date;
  isTyping?: boolean;
}

interface WorkflowStep {
  id: number;
  title: string;
  status: 'pending' | 'active' | 'completed';
  icon: React.ComponentType<any>;
  description: string;
  duration: number;
}

const Demo = ({ onOpenWaitlist }: DemoProps) => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isSimulationRunning, setIsSimulationRunning] = useState(false);
  const [simulationStep, setSimulationStep] = useState(0);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [activeAgents, setActiveAgents] = useState<string[]>([]);
  const [workflowSteps, setWorkflowSteps] = useState<WorkflowStep[]>([]);
  const [currentMetrics, setCurrentMetrics] = useState<Record<string, { current: number; target: number; unit: string }>>({});

  const demos = [
    {
      title: "MARKETING CAMPAIGN LAUNCH",
      description: "Watch how GrowthPilot automatically creates landing pages, runs ads, and optimizes campaigns.",
      userPrompt: "Launch a campaign for our AI PDF app targeting French students. $200 budget.",
      workflowSteps: [
        { id: 1, title: "Market Research", status: 'pending', icon: Target, description: "Analyzing French student demographics", duration: 3000 },
        { id: 2, title: "Landing Page", status: 'pending', icon: Globe, description: "Creating French-optimized page", duration: 4000 },
        { id: 3, title: "Ad Creation", status: 'pending', icon: Palette, description: "Generating 20 ad variations", duration: 3500 },
        { id: 4, title: "Campaign Launch", status: 'pending', icon: TrendingUp, description: "Deploying on Meta & Google", duration: 3000 },
        { id: 5, title: "Analytics Setup", status: 'pending', icon: BarChart3, description: "Real-time tracking & optimization", duration: 2500 }
      ],
      metrics: {
        budget: { current: 0, target: 200, unit: '$' },
        ads: { current: 0, target: 20, unit: 'variations' },
        reach: { current: 0, target: 50000, unit: 'students' }
      },
      steps: [
        {
          agent: "GrowthPilot",
          action: "Analyzing target audience and market research",
          duration: 3000,
          notifications: [
            { type: 'info', title: 'Market Research', message: 'Analyzing French student demographics and behavior patterns', agent: 'GrowthPilot' }
          ],
          chatMessages: [
            { type: 'agent', agent: 'GrowthPilot', message: 'I\'ll help you launch a campaign for your AI PDF app targeting French students. Let me start by analyzing the market and creating a comprehensive strategy.' }
          ]
        },
        {
          agent: "GrowthPilot",
          action: "Creating landing page with localized content",
          duration: 4000,
          notifications: [
            { type: 'success', title: 'Landing Page Created', message: 'French-optimized landing page ready at zact-pdf.fr', agent: 'GrowthPilot' }
          ],
          chatMessages: [
            { type: 'agent', agent: 'GrowthPilot', message: 'I\'ve created a French-optimized landing page with localized content, testimonials, and a clear value proposition for students.' }
          ]
        },
        {
          agent: "GrowthPilot",
          action: "Generating 20 ad variations for A/B testing",
          duration: 3500,
          notifications: [
            { type: 'info', title: 'Ad Creation', message: 'Generated 20 ad variations with different headlines and visuals', agent: 'GrowthPilot' }
          ],
          chatMessages: [
            { type: 'agent', agent: 'GrowthPilot', message: 'I\'ve created 20 ad variations with different headlines, visuals, and targeting options. Each variation is optimized for French student interests.' }
          ]
        },
        {
          agent: "GrowthPilot",
          action: "Launching campaigns on Meta & Google Ads",
          duration: 3000,
          notifications: [
            { type: 'success', title: 'Campaigns Launched', message: 'Active on Meta ($120) and Google Ads ($80)', agent: 'GrowthPilot' }
          ],
          chatMessages: [
            { type: 'agent', agent: 'GrowthPilot', message: 'Campaigns are now live! I\'ve allocated $120 to Meta for social targeting and $80 to Google Ads for search intent.' }
          ]
        },
        {
          agent: "GrowthPilot",
          action: "Setting up real-time analytics and optimization",
          duration: 2500,
          notifications: [
            { type: 'info', title: 'Analytics Setup', message: 'Real-time tracking and A/B testing framework active', agent: 'GrowthPilot' }
          ],
          chatMessages: [
            { type: 'agent', agent: 'GrowthPilot', message: 'Analytics are now tracking conversions, click-through rates, and cost-per-acquisition. I\'ll automatically optimize based on performance data.' }
          ]
        }
      ]
    },
    {
      title: "LEGAL CONTRACT GENERATION",
      description: "See how LegalBot drafts contracts, manages compliance, and handles international legal requirements.",
      userPrompt: "Need an NDA for a designer in Germany. Set up contract + payment.",
      workflowSteps: [
        { id: 1, title: "Legal Analysis", status: 'pending', icon: Shield, description: "Reviewing German employment law", duration: 3000 },
        { id: 2, title: "Contract Draft", status: 'pending', icon: FileText, description: "Creating DACH-compliant NDA", duration: 4000 },
        { id: 3, title: "Digital Signing", status: 'pending', icon: Mail, description: "Sending via Docusign", duration: 2500 },
        { id: 4, title: "Payment Setup", status: 'pending', icon: CreditCard, description: "Creating Deel contract", duration: 3500 },
        { id: 5, title: "Filing", status: 'pending', icon: CheckCircle, description: "Storing in legal vault", duration: 2000 }
      ],
      metrics: {
        compliance: { current: 0, target: 100, unit: '%' },
        contracts: { current: 0, target: 2, unit: 'documents' },
        time: { current: 0, target: 15, unit: 'minutes' }
      },
      steps: [
        {
          agent: "LegalBot",
          action: "Analyzing German legal requirements and DACH compliance",
          duration: 3000,
          notifications: [
            { type: 'info', title: 'Legal Analysis', message: 'Reviewing German employment law and DACH region requirements', agent: 'LegalBot' }
          ],
          chatMessages: [
            { type: 'agent', agent: 'LegalBot', message: 'I\'ll help you create a compliant NDA for your German designer. Let me analyze the legal requirements for the DACH region.' }
          ]
        },
        {
          agent: "LegalBot",
          action: "Generating DACH-compliant NDA with German legal framework",
          duration: 4000,
          notifications: [
            { type: 'success', title: 'NDA Generated', message: 'DACH-compliant NDA ready with German legal protections', agent: 'LegalBot' }
          ],
          chatMessages: [
            { type: 'agent', agent: 'LegalBot', message: 'I\'ve created a comprehensive NDA that complies with German law, including data protection (GDPR) and employment regulations.' }
          ]
        },
        {
          agent: "LegalBot",
          action: "Preparing contract for digital signature via Docusign",
          duration: 2500,
          notifications: [
            { type: 'info', title: 'Docusign Setup', message: 'Contract prepared and sent to designer@email.com', agent: 'LegalBot' }
          ],
          chatMessages: [
            { type: 'agent', agent: 'LegalBot', message: 'The NDA has been sent to your designer via Docusign for digital signature. They\'ll receive an email with secure signing instructions.' }
          ]
        },
        {
          agent: "LegalBot",
          action: "Creating Deel payment contract with German tax compliance",
          duration: 3500,
          notifications: [
            { type: 'success', title: 'Payment Contract', message: 'Deel contract created with German tax compliance', agent: 'LegalBot' }
          ],
          chatMessages: [
            { type: 'agent', agent: 'LegalBot', message: 'I\'ve set up the payment contract through Deel with proper German tax compliance, including VAT handling and employment classification.' }
          ]
        },
        {
          agent: "LegalBot",
          action: "Contract workflow completed and filed in legal vault",
          duration: 2000,
          notifications: [
            { type: 'success', title: 'Workflow Complete', message: 'All contracts filed and payment scheduled', agent: 'LegalBot' }
          ],
          chatMessages: [
            { type: 'agent', agent: 'LegalBot', message: 'Perfect! Your NDA is signed, payment is scheduled, and everything is filed in your legal vault. The designer can start work immediately.' }
          ]
        }
      ]
    },
    {
      title: "FINANCIAL REPORTING",
      description: "Watch FinanceGPT analyze burn rate, create investor reports, and manage company finances.",
      userPrompt: "Generate our monthly investor report and analyze burn rate",
      workflowSteps: [
        { id: 1, title: "Data Sync", status: 'pending', icon: BarChart3, description: "Connecting to QuickBooks", duration: 3000 },
        { id: 2, title: "Analysis", status: 'pending', icon: TrendingUp, description: "Processing transactions", duration: 4000 },
        { id: 3, title: "Calculations", status: 'pending', icon: DollarSign, description: "Computing burn rate", duration: 3000 },
        { id: 4, title: "Report Gen", status: 'pending', icon: FileText, description: "Creating investor report", duration: 3500 },
        { id: 5, title: "Distribution", status: 'pending', icon: Mail, description: "Sending to stakeholders", duration: 2500 }
      ],
      metrics: {
        burnRate: { current: 0, target: 45, unit: 'K/month' },
        runway: { current: 0, target: 8.2, unit: 'months' },
        transactions: { current: 0, target: 1247, unit: 'processed' }
      },
      steps: [
        {
          agent: "FinanceGPT",
          action: "Connecting to QuickBooks and analyzing transaction data",
          duration: 3000,
          notifications: [
            { type: 'info', title: 'Data Sync', message: 'Connected to QuickBooks API and syncing transactions', agent: 'FinanceGPT' }
          ],
          chatMessages: [
            { type: 'agent', agent: 'FinanceGPT', message: 'I\'ll analyze your financial data and create a comprehensive investor report. Let me start by connecting to your accounting systems.' }
          ]
        },
        {
          agent: "FinanceGPT",
          action: "Analyzing monthly expenses and revenue patterns",
          duration: 4000,
          notifications: [
            { type: 'info', title: 'Financial Analysis', message: 'Processing 1,247 transactions from last month', agent: 'FinanceGPT' }
          ],
          chatMessages: [
            { type: 'agent', agent: 'FinanceGPT', message: 'I\'ve analyzed all your transactions from last month. I can see clear patterns in your revenue growth and expense categories.' }
          ]
        },
        {
          agent: "FinanceGPT",
          action: "Calculating burn rate and runway projections",
          duration: 3000,
          notifications: [
            { type: 'success', title: 'Burn Rate Calculated', message: 'Current burn rate: $45K/month, runway: 8.2 months', agent: 'FinanceGPT' }
          ],
          chatMessages: [
            { type: 'agent', agent: 'FinanceGPT', message: 'Your current burn rate is $45K/month with $370K in the bank. At this rate, you have 8.2 months of runway remaining.' }
          ]
        },
        {
          agent: "FinanceGPT",
          action: "Generating comprehensive investor report with key metrics",
          duration: 3500,
          notifications: [
            { type: 'success', title: 'Report Generated', message: 'Investor report ready with growth metrics and projections', agent: 'FinanceGPT' }
          ],
          chatMessages: [
            { type: 'agent', agent: 'FinanceGPT', message: 'I\'ve created a detailed investor report including revenue growth (23% MoM), customer acquisition costs, and financial projections for the next quarter.' }
          ]
        },
        {
          agent: "FinanceGPT",
          action: "Sending report to investors and scheduling follow-up",
          duration: 2500,
          notifications: [
            { type: 'success', title: 'Report Sent', message: 'Investor report delivered to 12 stakeholders', agent: 'FinanceGPT' }
          ],
          chatMessages: [
            { type: 'agent', agent: 'FinanceGPT', message: 'The investor report has been sent to all stakeholders. I\'ve also scheduled a follow-up meeting for next week to discuss the financial projections.' }
          ]
        }
      ]
    }
  ];

  const startSimulation = () => {
    setIsSimulationRunning(true);
    setSimulationStep(0);
    setNotifications([]);
    setChatMessages([]);
    setActiveAgents([]);
    setWorkflowSteps(demos[activeDemo].workflowSteps.map(step => ({ ...step, status: 'pending' as const })));
    setCurrentMetrics(demos[activeDemo].metrics as unknown as Record<string, { current: number; target: number; unit: string }>);
    
    const currentDemo = demos[activeDemo];
    
    // Add initial user message
    setChatMessages([{
      id: 1,
      type: 'user',
      message: currentDemo.userPrompt,
      timestamp: new Date()
    }]);

    currentDemo.steps.forEach((step, index) => {
      const stepDelay = currentDemo.steps.slice(0, index).reduce((acc, s) => acc + s.duration, 0);
      
      setTimeout(() => {
        setSimulationStep(index + 1);
        setActiveAgents(prev => [...prev, step.agent]);
        
        // Update workflow step status
        setWorkflowSteps(prev => prev.map((ws, i) => 
          i === index ? { ...ws, status: 'active' as const } : ws
        ));

        // Animate metrics
        const metrics = currentDemo.metrics as unknown as Record<string, { current: number; target: number; unit: string }>;
        Object.keys(metrics).forEach((key, metricIndex) => {
          setTimeout(() => {
            setCurrentMetrics((prev: Record<string, { current: number; target: number; unit: string }>) => ({
              ...prev,
              [key]: {
                ...prev[key],
                current: Math.round(metrics[key].target * (index + 1) / currentDemo.steps.length)
              }
            }));
          }, stepDelay + (metricIndex * 500));
        });

        // Complete workflow step after delay
        setTimeout(() => {
          setWorkflowSteps(prev => prev.map((ws, i) => 
            i === index ? { ...ws, status: 'completed' as const } : ws
          ));
        }, stepDelay + step.duration);
        
        // Add notifications
        step.notifications.forEach((notification, notifIndex) => {
          setTimeout(() => {
            setNotifications(prev => [...prev, {
              id: Date.now() + notifIndex,
              type: notification.type as 'success' | 'info' | 'warning',
              title: notification.title,
              message: notification.message,
              agent: notification.agent,
              timestamp: new Date()
            }]);
          }, stepDelay + (notifIndex * 500));
        });

        // Add chat messages
        step.chatMessages.forEach((chatMsg, chatIndex) => {
          setTimeout(() => {
            setChatMessages(prev => [...prev, {
              id: Date.now() + chatIndex,
              type: chatMsg.type as 'user' | 'agent',
              agent: chatMsg.agent,
              message: chatMsg.message,
              timestamp: new Date()
            }]);
          }, stepDelay + (chatIndex * 800));
        });
      }, stepDelay);
    });

    // End simulation
    setTimeout(() => {
      setIsSimulationRunning(false);
    }, currentDemo.steps.reduce((acc, step) => acc + step.duration, 0));
  };

  const resetSimulation = () => {
    setIsSimulationRunning(false);
    setSimulationStep(0);
    setNotifications([]);
    setChatMessages([]);
    setActiveAgents([]);
    setWorkflowSteps(demos[activeDemo].workflowSteps.map(step => ({ ...step, status: 'pending' as const })));
    setCurrentMetrics(demos[activeDemo].metrics as unknown as Record<string, { current: number; target: number; unit: string }>);
  };

  useEffect(() => {
    resetSimulation();
  }, [activeDemo]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-400';
      case 'active': return 'text-yellow-400';
      default: return 'text-white/40';
    }
  };

  const getStatusBg = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500/20 border-green-500/30';
      case 'active': return 'bg-yellow-500/20 border-yellow-500/30';
      default: return 'bg-white/5 border-white/20';
    }
  };

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid opacity-10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block bg-white text-black px-6 py-2 font-bold tracking-wider text-sm mb-8">
            DEMO
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tighter">
            SEE YOUR COMPANY
            <br />
            RUN BY{' '}
            <span className="relative">
              AI AGENTS
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-white"></div>
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto font-light">
            Real examples of how AI agents work together to run every function of your company autonomously.
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 lg:p-12">
          {/* Demo Navigation */}
          <div className="flex justify-center mb-12">
            <div className="flex flex-col sm:flex-row space-y-1 sm:space-y-0 sm:space-x-1 bg-white/10 backdrop-blur-sm border border-white/20 p-1 w-full sm:w-auto">
              {demos.map((demo, index) => (
                <button
                  key={index}
                  onClick={() => setActiveDemo(index)}
                  className={`px-4 sm:px-6 py-3 font-bold text-xs sm:text-sm tracking-wider transition-all duration-300 text-center ${
                    activeDemo === index
                      ? 'bg-white text-black'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {demo.title}
                </button>
              ))}
            </div>
          </div>

          {/* Demo Content */}
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Left: Workflow Visualization */}
            <div className="bg-black border-2 border-white/20 overflow-hidden rounded-lg">
              {/* Workflow Header */}
              <div className="flex items-center justify-between bg-white/10 px-6 py-4 border-b border-white/20">
                <div className="flex items-center space-x-3">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <TrendingUp size={16} className="text-white/60" />
                  <span className="text-white/60 font-mono text-sm">Workflow Progress</span>
                </div>
              </div>

              {/* Workflow Steps */}
              <div className="p-6 space-y-4">
                {workflowSteps.map((step, index) => (
                  <div key={step.id} className={`flex items-center space-x-4 p-4 rounded-lg border transition-all duration-500 ${getStatusBg(step.status)}`}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${getStatusColor(step.status)}`}>
                      {step.status === 'completed' ? (
                        <CheckCircle size={20} />
                      ) : step.status === 'active' ? (
                        <div className="w-4 h-4 border-2 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <step.icon size={20} />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className={`font-bold text-sm ${getStatusColor(step.status)}`}>{step.title}</div>
                      <div className="text-white/60 text-xs">{step.description}</div>
                    </div>
                    {step.status === 'active' && (
                      <div className="text-yellow-400 text-xs font-mono">LIVE</div>
                    )}
                  </div>
                ))}
              </div>

              {/* Metrics Dashboard */}
              <div className="px-4 py-3 border-t border-white/20">
                <h4 className="text-white font-bold mb-3 text-sm">Live Metrics</h4>
                <div className="grid grid-cols-3 gap-2">
                  {Object.entries(currentMetrics).map(([key, metric]: [string, any]) => (
                    <div key={key} className="text-center">
                      <div className="text-lg font-black text-white">
                        {metric.current}{metric.unit}
                      </div>
                      <div className="text-white/60 text-xs capitalize">{key}</div>
                      <div className="w-full bg-white/10 rounded-full h-1 mt-1">
                        <div 
                          className="bg-green-400 h-1 rounded-full transition-all duration-500"
                          style={{ width: `${(metric.current / metric.target) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Center: Chat Interface */}
            <div className="bg-black border-2 border-white/20 overflow-hidden rounded-lg">
              {/* Chat Header */}
              <div className="flex items-center justify-between bg-white/10 px-6 py-4 border-b border-white/20">
                <div className="flex items-center space-x-3">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <Brain size={16} className="text-white/60" />
                  <span className="text-white/60 font-mono text-sm">Agent Communication</span>
                </div>
                <div className="flex items-center space-x-2">
                  {isSimulationRunning && (
                    <div className="flex items-center space-x-2 text-green-400">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-xs font-mono">LIVE</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Active Agents Bar */}
              <div className="bg-white/5 px-6 py-3 border-b border-white/10">
                <div className="flex items-center space-x-4">
                  <span className="text-white/60 text-sm font-medium">Active Agents:</span>
                  <div className="flex space-x-2">
                    {activeAgents.map((agent, index) => (
                      <div key={index} className="flex items-center space-x-2 bg-white/10 px-3 py-1 rounded-full">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-white text-xs font-medium">{agent}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Chat Messages */}
              <div className="h-96 overflow-y-auto p-6 space-y-4">
                {chatMessages.map((message) => (
                  <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`flex items-start space-x-3 max-w-xs lg:max-w-md ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        message.type === 'user' 
                          ? 'bg-blue-500' 
                          : 'bg-green-500'
                      }`}>
                        {message.type === 'user' ? (
                          <User size={16} className="text-white" />
                        ) : (
                          <Bot size={16} className="text-white" />
                        )}
                      </div>
                      <div className={`rounded-lg px-4 py-2 ${
                        message.type === 'user'
                          ? 'bg-blue-500 text-white'
                          : 'bg-white/10 text-white'
                      }`}>
                        {message.agent && (
                          <div className="text-xs font-bold text-green-400 mb-1">{message.agent}</div>
                        )}
                        <p className="text-sm">{message.message}</p>
                        <div className="text-xs opacity-60 mt-1">
                          {message.timestamp.toLocaleTimeString()}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Progress Bar */}
              <div className="px-6 py-4 border-t border-white/20">
                <div className="flex items-center justify-between text-white/60 mb-2">
                  <span>Workflow Progress</span>
                  <span>{Math.round((simulationStep / demos[activeDemo].steps.length) * 100)}%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div 
                    className="bg-green-400 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(simulationStep / demos[activeDemo].steps.length) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Right: Notifications and Controls */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-black text-white mb-4 tracking-wide">
                  {demos[activeDemo].title}
                </h3>
                <p className="text-white/70 leading-relaxed text-lg">
                  {demos[activeDemo].description}
                </p>
              </div>
              
              {/* Notifications Panel */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/20 p-6 rounded-lg">
                <h4 className="text-white font-bold mb-4 flex items-center">
                  <MessageSquare size={16} className="mr-2" />
                  Agent Notifications
                </h4>
                <div className="space-y-3 max-h-48 overflow-y-auto">
                  {notifications.map((notification) => (
                    <div key={notification.id} className={`flex items-start space-x-3 p-3 rounded-lg ${
                      notification.type === 'success' ? 'bg-green-500/10 border border-green-500/20' :
                      notification.type === 'warning' ? 'bg-yellow-500/10 border border-yellow-500/20' :
                      'bg-blue-500/10 border border-blue-500/20'
                    }`}>
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        notification.type === 'success' ? 'bg-green-400' :
                        notification.type === 'warning' ? 'bg-yellow-400' :
                        'bg-blue-400'
                      }`}></div>
                      <div className="flex-1">
                        <div className="text-white font-medium text-sm">{notification.title}</div>
                        <div className="text-white/70 text-xs">{notification.message}</div>
                        <div className="text-white/50 text-xs mt-1">{notification.agent}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Simulation Controls */}
              <div className="space-y-4">
                {!isSimulationRunning ? (
                  <button 
                    onClick={startSimulation}
                    className="group flex items-center space-x-4 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 px-8 py-4 transition-all duration-300 w-full justify-center"
                  >
                <Play className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white font-bold tracking-wide">RUN SIMULATION</span>
                  </button>
                ) : (
                  <button 
                    onClick={resetSimulation}
                    className="group flex items-center space-x-4 bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 hover:border-red-500/50 px-8 py-4 transition-all duration-300 w-full justify-center"
                  >
                    <span className="text-red-400 font-bold tracking-wide">STOP SIMULATION</span>
              </button>
                )}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 pt-8">
                <div className="border border-white/20 p-4 text-center">
                  <div className="text-2xl font-black text-white mb-1">24/7</div>
                  <div className="text-white/60 text-sm font-medium tracking-wider uppercase">Autonomous</div>
                </div>
                <div className="border border-white/20 p-4 text-center">
                  <div className="text-2xl font-black text-white mb-1">$0</div>
                  <div className="text-white/60 text-sm font-medium tracking-wider uppercase">Hiring Cost</div>
                </div>
              </div>

              {/* Join Waitlist Button */}
              <button 
                onClick={onOpenWaitlist}
                className="group flex items-center space-x-4 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 px-8 py-4 transition-all duration-300 w-full justify-center"
              >
                <ArrowRight className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform duration-300" />
                <span className="text-white font-bold tracking-wide">JOIN WAITLIST</span>
              </button>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center mt-12 space-x-4">
            <button
              onClick={() => setActiveDemo(activeDemo > 0 ? activeDemo - 1 : demos.length - 1)}
              className="p-4 border border-white/20 hover:border-white/40 hover:bg-white/10 transition-all duration-300"
            >
              <ChevronLeft size={20} className="text-white" />
            </button>
            <button
              onClick={() => setActiveDemo(activeDemo < demos.length - 1 ? activeDemo + 1 : 0)}
              className="p-4 border border-white/20 hover:border-white/40 hover:bg-white/10 transition-all duration-300"
            >
              <ChevronRight size={20} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
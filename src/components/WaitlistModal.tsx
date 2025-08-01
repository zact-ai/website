import React, { useState, useEffect } from 'react';
import { Mail, Building2, Users, Calendar, ArrowRight, CheckCircle, X } from 'lucide-react';
import { waitlistService, WaitlistData } from '../services/waitlistService';

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (command: string, eventName: string, params: any) => void;
  }
}

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WaitlistModal = ({ isOpen, onClose }: WaitlistModalProps) => {
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setEmail('');
      setCompany('');
      setRole('');
      setIsSubmitted(false);
      setError('');
    }
  }, [isOpen]);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const waitlistData: WaitlistData = {
      email,
      company,
      role,
      timestamp: new Date().toISOString(),
      source: 'zact-landing-page'
    };

    try {
      // Submit to waitlist service
      const response = await waitlistService.submitWaitlist(waitlistData);

      if (response.success) {
        // Track analytics
        waitlistService.trackEvent(waitlistData);

        // Send welcome email
        await waitlistService.sendWelcomeEmail(email);

        setIsSubmitted(true);
      } else {
        setError(response.message);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setError('Something went wrong. Please try again or contact us directly.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleCloseClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-2xl bg-black border-2 border-white/20 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={handleCloseClick}
          className="absolute top-4 right-4 z-20 w-8 h-8 border border-white/20 hover:border-white/40 flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 bg-black/50 backdrop-blur-sm"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Background Grid */}
        <div className="absolute inset-0 bg-grid opacity-10"></div>
        
        {/* Animated Elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative z-10 p-8 lg:p-12">
          <div className="text-center mb-8">
            <div className="inline-block bg-white text-black px-6 py-2 font-bold tracking-wider text-sm mb-6">
              JOIN WAITLIST
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight tracking-tighter">
              BE AMONG THE FIRST
              <br />
              TO RUN YOUR COMPANY
              <br />
              WITH{' '}
              <span className="relative">
                AI AGENTS
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-white"></div>
              </span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto font-light">
              Join the waitlist for early access to Zact. Be the first to experience the future of work where AI agents run your entire company.
            </p>
          </div>

          {!isSubmitted ? (
            <div className="bg-white/5 backdrop-blur-sm border border-white/20 p-6 lg:p-8 rounded-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-lg text-sm">
                    {error}
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-white/80 font-bold tracking-wide text-sm">
                      EMAIL ADDRESS
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40" size={20} />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 px-12 py-4 font-medium tracking-wide focus:outline-none focus:border-white/50 transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-white/80 font-bold tracking-wide text-sm">
                      COMPANY NAME
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40" size={20} />
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        required
                        className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 px-12 py-4 font-medium tracking-wide focus:outline-none focus:border-white/50 transition-all duration-300"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-white/80 font-bold tracking-wide text-sm">
                    YOUR ROLE
                  </label>
                  <div className="relative">
                    <Users className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40" size={20} />
                    <select
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      required
                      className="w-full bg-white/10 border border-white/20 text-white px-12 py-4 font-medium tracking-wide focus:outline-none focus:border-white/50 transition-all duration-300 appearance-none"
                    >
                      <option value="" className="bg-black text-white">Select your role</option>
                      <option value="founder" className="bg-black text-white">Founder/CEO</option>
                      <option value="cto" className="bg-black text-white">CTO/Technical Lead</option>
                      <option value="marketing" className="bg-black text-white">Marketing Lead</option>
                      <option value="operations" className="bg-black text-white">Operations Manager</option>
                      <option value="other" className="bg-black text-white">Other</option>
                    </select>
                    <ArrowRight className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/40 rotate-90" size={20} />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="group w-full bg-white text-black px-12 py-5 font-black text-lg tracking-wide hover:bg-gray-100 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="flex items-center justify-center">
                    {isLoading ? 'JOINING WAITLIST...' : 'JOIN WAITLIST'}
                    {!isLoading && <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-300" size={20} />}
                  </span>
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-white/60 text-sm">
                  Or{' '}
                  <a href="#waitlist" className="text-white hover:text-white/80 font-medium underline">
                    book a call
                  </a>{' '}
                  to discuss your specific needs
                </p>
              </div>
            </div>
          ) : (
            <div className="bg-white/5 backdrop-blur-sm border border-white/20 p-6 lg:p-8 rounded-lg text-center">
              <div className="flex justify-center mb-6">
                <CheckCircle className="text-green-400" size={48} />
              </div>
              <h3 className="text-2xl font-black text-white mb-4">
                YOU'RE ON THE WAITLIST!
              </h3>
              <p className="text-white/70 max-w-2xl mx-auto leading-relaxed">
                Thank you for joining the waitlist! We'll notify you as soon as Zact is ready for early access. 
                In the meantime, we'll send you updates about our progress and exclusive insights about AI agents.
              </p>
              <div className="mt-8 flex justify-center">
                <button
                  onClick={handleCloseClick}
                  className="group flex items-center space-x-3 border-2 border-white/30 hover:border-white text-white px-8 py-4 font-bold tracking-wide hover:bg-white/10 transition-all duration-300"
                >
                  <Calendar className="group-hover:scale-110 transition-transform duration-300" size={20} />
                  <span>CLOSE</span>
                </button>
              </div>
            </div>
          )}

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-lg mb-3">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-black text-white mb-2">Early Access</h3>
              <p className="text-white/70 text-sm">Be among the first to experience AI agents running your company</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-lg mb-3">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-black text-white mb-2">Priority Support</h3>
              <p className="text-white/70 text-sm">Get dedicated support and custom agent development</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-lg mb-3">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-black text-white mb-2">Exclusive Community</h3>
              <p className="text-white/70 text-sm">Join our private community of AI-first founders</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitlistModal; 
import React from 'react';
import { Github, Twitter, Linkedin, Mail, ArrowUpRight, Brain } from 'lucide-react';

const Footer = () => {
  const links = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Agents', href: '#agents' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Demo', href: '#demo' }
    ],
    developers: [
      { name: 'API Reference', href: '/docs/api' },
      { name: 'Agent Marketplace', href: '/marketplace' },
      { name: 'SDKs', href: '/docs/sdks' }
    ],
    company: [
      { name: 'About', href: '/about' },
      { name: 'Blog', href: '/blog' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' }
    ]
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/zact-ai/zact', label: 'GitHub' },
    { icon: Twitter, href: 'https://twitter.com/zact_ai', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/company/zact-ai', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:hello@zact.dev', label: 'Email' }
  ];

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid opacity-10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center">
              <div className="relative">
                <span className="text-3xl font-black text-white tracking-tight">
                  ZACT
                </span>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </div>
            </div>
            <p className="text-white/70 max-w-md leading-relaxed">
              The OS to run your entire company with AI agents. Install specialized agents for every function — 
              from marketing to legal to finance. Build your dream team without hiring people.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="group w-12 h-12 border border-white/20 hover:border-white flex items-center justify-center hover:bg-white/10 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={20} className="text-white/70 group-hover:text-white transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-black mb-6 tracking-wide">PRODUCT</h3>
            <ul className="space-y-4">
              {links.product.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="group flex items-center text-white/70 hover:text-white transition-colors duration-300 font-medium"
                  >
                    <span className="relative">
                      {link.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                    </span>
                    <ArrowUpRight size={14} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-black mb-6 tracking-wide">DEVELOPERS</h3>
            <ul className="space-y-4">
              {links.developers.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="group flex items-center text-white/70 hover:text-white transition-colors duration-300 font-medium"
                  >
                    <span className="relative">
                      {link.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                    </span>
                    <ArrowUpRight size={14} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-black mb-6 tracking-wide">COMPANY</h3>
            <ul className="space-y-4">
              {links.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="group flex items-center text-white/70 hover:text-white transition-colors duration-300 font-medium"
                  >
                    <span className="relative">
                      {link.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                    </span>
                    <ArrowUpRight size={14} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 font-medium">
            © 2024 ZACT. ALL RIGHTS RESERVED.
          </p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#privacy" className="text-white/60 hover:text-white font-medium transition-colors duration-300">
              PRIVACY POLICY
            </a>
            <a href="#terms" className="text-white/60 hover:text-white font-medium transition-colors duration-300">
              TERMS OF SERVICE
            </a>
            <a href="#cookies" className="text-white/60 hover:text-white font-medium transition-colors duration-300">
              COOKIE POLICY
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
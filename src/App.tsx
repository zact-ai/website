import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Agents from './components/Agents';
import Demo from './components/Demo';
import CTA from './components/CTA';
import WaitlistModal from './components/WaitlistModal';
import Footer from './components/Footer';

const HomePage = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const openWaitlist = () => setIsWaitlistOpen(true);
  const closeWaitlist = () => setIsWaitlistOpen(false);

  return (
    <div className="min-h-screen bg-white">
      <Header onOpenWaitlist={openWaitlist} />
      <Hero onOpenWaitlist={openWaitlist} />
      <Features />
      <Agents onOpenWaitlist={openWaitlist} />
      <Demo onOpenWaitlist={openWaitlist} />
      <CTA onOpenWaitlist={openWaitlist} />
      <Footer />
      <WaitlistModal isOpen={isWaitlistOpen} onClose={closeWaitlist} />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
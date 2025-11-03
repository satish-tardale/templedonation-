
import React, { useState } from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import DonationSection from './components/sections/DonationSection';
import About from './components/sections/About';
import Events from './components/sections/Events';
import Campaigns from './components/sections/Campaigns';
import Gallery from './components/sections/Gallery';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import LoginModal from './components/ui/LoginModal';
import DonationModal from './components/ui/DonationModal';

const App: React.FC = () => {
  const [isDonationModalOpen, setDonationModalOpen] = useState(false);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  return (
    <div className="bg-light font-sans text-dark">
      <Header 
        onDonateClick={() => setDonationModalOpen(true)} 
        onLoginClick={() => setLoginModalOpen(true)}
      />
      <main>
        <Hero onDonateClick={() => setDonationModalOpen(true)} />
        <DonationSection onDonateClick={() => setDonationModalOpen(true)} />
        <About />
        <Campaigns />
        <Events />
        <Testimonials />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      {isDonationModalOpen && <DonationModal onClose={() => setDonationModalOpen(false)} />}
      {isLoginModalOpen && <LoginModal onClose={() => setLoginModalOpen(false)} />}
    </div>
  );
};

export default App;
   
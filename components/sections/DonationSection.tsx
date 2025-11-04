
import React from 'react';

interface DonationSectionProps {
  onDonateClick: () => void;
}

const DonationSection: React.FC<DonationSectionProps> = ({ onDonateClick }) => {
  return (
    <section id="donate" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark mb-4">Support Our Sacred Mission</h2>
        <p className="max-w-3xl mx-auto text-accent text-lg mb-8">
          Your generosity helps us maintain this sacred space, organize community events, and perform charitable activities. Every contribution, big or small, makes a profound difference.
        </p>
        <div className="flex justify-center">
          <button
            onClick={onDonateClick}
            className="bg-primary text-white font-bold py-4 px-12 rounded-full text-lg hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Donate Securely Online
          </button>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;
   
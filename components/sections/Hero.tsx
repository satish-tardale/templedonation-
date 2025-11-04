
import React from 'react';

interface HeroProps {
  onDonateClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onDonateClick }) => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/1920/1080?random=1"
          alt="Beautiful temple architecture"
          className="w-full h-full object-cover animate-[zoom_20s_ease-in-out_infinite]"
          style={{ animation: 'zoom 20s ease-in-out infinite' }}
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <style>{`
        @keyframes zoom {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
      `}</style>
      
      <div className="relative z-10 p-6 flex flex-col items-center animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-extrabold mb-4 leading-tight tracking-wide" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
          Find Peace, Foster Community
        </h1>
        <p className="max-w-3xl text-lg md:text-xl lg:text-2xl mb-8 font-light" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
          Welcome to a sanctuary of tranquility and devotion. Join us in our mission to spread harmony and support our sacred space.
        </p>
        <button 
          onClick={onDonateClick}
          className="bg-primary text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-primary-dark transition-all duration-300 shadow-2xl hover:shadow-lg transform hover:-translate-y-1"
        >
          Contribute to Our Cause
        </button>
      </div>
    </section>
  );
};

export default Hero;
   

import React, { useState } from 'react';

interface DonationModalProps {
  onClose: () => void;
}

const DonationModal: React.FC<DonationModalProps> = ({ onClose }) => {
  const [amount, setAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');
  const presetAmounts = [25, 50, 100, 250];

  const handleAmountClick = (value: number) => {
    setAmount(value);
    setCustomAmount('');
  };
  
  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCustomAmount(value);
    const numericValue = parseInt(value, 10);
    if (!isNaN(numericValue) && numericValue > 0) {
      setAmount(numericValue);
    }
  }

  const selectedAmount = customAmount ? parseInt(customAmount, 10) || 0 : amount;

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg relative transform transition-transform duration-300 animate-slide-in-up">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        
        <div className="p-8">
          <h2 className="text-3xl font-serif font-bold text-center text-dark mb-2">Make a Donation</h2>
          <p className="text-center text-accent mb-6">Your support is a blessing to our community.</p>

          <div className="mb-6">
            <div className="flex bg-secondary rounded-full p-1">
              <button 
                onClick={() => setDonationType('one-time')}
                className={`w-1/2 py-2 rounded-full font-semibold transition-colors ${donationType === 'one-time' ? 'bg-primary text-white shadow' : 'text-accent'}`}
              >
                One-Time
              </button>
              <button 
                onClick={() => setDonationType('monthly')}
                className={`w-1/2 py-2 rounded-full font-semibold transition-colors ${donationType === 'monthly' ? 'bg-primary text-white shadow' : 'text-accent'}`}
              >
                Monthly
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            {presetAmounts.map(val => (
              <button key={val} onClick={() => handleAmountClick(val)} className={`py-3 px-4 border-2 rounded-lg font-bold text-lg transition-colors ${amount === val && !customAmount ? 'bg-primary border-primary text-white' : 'border-gray-300 text-dark hover:border-primary'}`}>
                ${val}
              </button>
            ))}
          </div>

          <div className="relative mb-6">
             <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">$</span>
             <input 
                type="number"
                placeholder="Custom Amount"
                value={customAmount}
                onChange={handleCustomAmountChange}
                className="w-full py-3 pl-8 pr-4 border-2 border-gray-300 rounded-lg font-bold text-lg focus:outline-none focus:border-primary"
             />
          </div>
          
          <button className="w-full bg-primary text-white font-bold py-4 rounded-lg text-lg hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Donate ${selectedAmount}
          </button>

          <p className="text-xs text-gray-400 text-center mt-4">
            🔒 Secure transaction powered by Stripe.
          </p>
        </div>
      </div>
       <style>{`
          @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes slide-in-up {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
          .animate-slide-in-up { animation: slide-in-up 0.4s ease-out forwards; }
        `}</style>
    </div>
  );
};

export default DonationModal;
   
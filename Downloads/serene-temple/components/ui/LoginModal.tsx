
import React from 'react';

interface LoginModalProps {
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md relative transform transition-transform duration-300 animate-slide-in-up">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        
        <div className="p-8">
          <h2 className="text-3xl font-serif font-bold text-center text-dark mb-2">Member Login</h2>
          <p className="text-center text-accent mb-6">Access your donation history and profile.</p>

          <form className="space-y-4">
            <div>
              <label htmlFor="login-email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input type="email" id="login-email" className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div>
              <label htmlFor="login-password" className="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" id="login-password" className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">Remember me</label>
              </div>
              <div className="text-sm">
                <a href="#" className="font-medium text-primary hover:text-primary-dark">Forgot your password?</a>
              </div>
            </div>
            <div>
              <button type="submit" className="w-full mt-4 bg-primary text-white font-bold py-3 px-6 rounded-md hover:bg-primary-dark transition-colors duration-300">
                Sign In
              </button>
            </div>
          </form>

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

export default LoginModal;
   
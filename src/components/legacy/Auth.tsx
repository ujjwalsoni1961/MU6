import React, { useState } from 'react';
import { ChromeButton, LiquidCard } from './ChromeUI';
import { Logo } from './Logo';
import { AppView } from '../../types';
import { Mail, Lock, User as UserIcon, ArrowRight, Wallet } from 'lucide-react';

interface AuthProps {
  currentView: AppView;
  onNavigate: (view: AppView) => void;
  onLogin: () => void;
}

export const Auth: React.FC<AuthProps> = ({ currentView, onNavigate, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate auth delay
    setTimeout(() => {
        onLogin();
    }, 800);
  };

  const isLogin = currentView === AppView.LOGIN;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden">
       {/* Background Elements */}
       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
           <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] caustic-orb opacity-40 mix-blend-multiply"></div>
           <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] caustic-orb opacity-40 mix-blend-multiply" style={{ animationDirection: 'reverse', animationDuration: '20s' }}></div>
       </div>

       <div className="w-full max-w-md z-10 animate-fade-in">
           <div className="text-center mb-8">
               <div className="inline-block p-4 rounded-full bg-white/30 backdrop-blur-md border border-white/50 mb-4 shadow-xl">
                   <Logo className="w-12 h-12" />
               </div>
               <h1 className="text-4xl font-light text-gray-900 tracking-tight mb-2">
                   {isLogin ? 'Welcome Back' : 'Join the Collective'}
               </h1>
               <p className="text-gray-500 font-light">
                   {isLogin ? 'Enter the stream.' : 'Mint your identity.'}
               </p>
           </div>

           <LiquidCard className="p-8 backdrop-blur-xl bg-white/40">
               <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                   {!isLogin && (
                       <div className="relative group">
                           <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" size={20} />
                           <input 
                                type="text" 
                                placeholder="Username"
                                className="w-full bg-white/50 border border-white/60 rounded-xl py-3 pl-12 pr-4 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:bg-white/80 focus:shadow-md transition-all"
                           />
                       </div>
                   )}
                   
                   <div className="relative group">
                       <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" size={20} />
                       <input 
                            type="email" 
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-white/50 border border-white/60 rounded-xl py-3 pl-12 pr-4 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:bg-white/80 focus:shadow-md transition-all"
                       />
                   </div>

                   <div className="relative group">
                       <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" size={20} />
                       <input 
                            type="password" 
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-white/50 border border-white/60 rounded-xl py-3 pl-12 pr-4 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:bg-white/80 focus:shadow-md transition-all"
                       />
                   </div>

                   <ChromeButton type="submit" className="w-full mt-2 group" variant="primary">
                       {isLogin ? 'Enter MU6' : 'Create Account'}
                       <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                   </ChromeButton>

                   <div className="relative flex py-2 items-center">
                        <div className="flex-grow border-t border-gray-300/50"></div>
                        <span className="flex-shrink-0 mx-4 text-gray-400 text-xs uppercase tracking-widest">Or continue with</span>
                        <div className="flex-grow border-t border-gray-300/50"></div>
                   </div>

                   <ChromeButton type="button" variant="secondary" className="w-full text-sm">
                       <Wallet size={18} className="mr-2" />
                       Connect Wallet
                   </ChromeButton>
               </form>
           </LiquidCard>

           <div className="text-center mt-6">
               <p className="text-gray-500 text-sm">
                   {isLogin ? "Don't have an account? " : "Already have an account? "}
                   <button 
                        onClick={() => onNavigate(isLogin ? AppView.SIGNUP : AppView.LOGIN)}
                        className="text-blue-600 font-semibold hover:underline"
                   >
                       {isLogin ? 'Sign Up' : 'Log In'}
                   </button>
               </p>
           </div>
       </div>
    </div>
  );
};

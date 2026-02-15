import React, { useState } from 'react';
import { User, Music, Wallet, ArrowRight, ShieldCheck, Zap, Globe } from 'lucide-react';
import { ConnectWallet } from "@thirdweb-dev/react";

interface LoginProps {
  onLogin?: (role: 'consumer' | 'artist') => void;
}

export const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [role, setRole] = useState<'consumer' | 'artist'>('consumer');
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden p-6">
      
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[10%] left-[10%] w-[40vw] h-[40vw] bg-primary/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[30vw] h-[30vw] bg-purple-500/10 rounded-full blur-[80px]"></div>
      </div>

      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-8 z-10">
        
        {/* Left Side: Branding & Info */}
        <div className="flex flex-col justify-center space-y-8 p-4 lg:p-8 text-center lg:text-left">
          <div className="space-y-2">
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter text-text-main">
              mu<span className="text-primary-dark">6</span>
            </h1>
            <p className="text-xl text-text-muted font-light">
              The future of music streaming & ownership.
            </p>
          </div>

          <div className="space-y-6 hidden lg:block">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/40 flex items-center justify-center shadow-sm">
                <Music className="text-primary-dark" size={24} />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-text-main">Stream & Collect</h3>
                <p className="text-sm text-text-muted">Listen to music and own NFT tracks.</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/40 flex items-center justify-center shadow-sm">
                <ShieldCheck className="text-secondary" size={24} />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-text-main">True Ownership</h3>
                <p className="text-sm text-text-muted">Artists get paid directly. Fans own the music.</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/40 flex items-center justify-center shadow-sm">
                <Zap className="text-orange-400" size={24} />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-text-main">Instant Payouts</h3>
                <p className="text-sm text-text-muted">Smart contracts handle royalties instantly.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Auth Card */}
        <div className="flex items-center justify-center">
          <div className="glass-panel w-full max-w-md p-8 rounded-3xl relative overflow-hidden transition-all duration-500 hover:shadow-glass">
            
            {/* Role Switcher */}
            <div className="flex bg-white/30 p-1.5 rounded-2xl mb-8 relative">
              <div 
                className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-white shadow-sm rounded-xl transition-all duration-300 ease-out ${role === 'artist' ? 'translate-x-[calc(100%+6px)]' : 'translate-x-0'}`}
              ></div>
              
              <button 
                onClick={() => setRole('consumer')}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl relative z-10 transition-colors duration-300 ${role === 'consumer' ? 'text-text-main font-bold' : 'text-text-muted hover:text-text-main'}`}
              >
                <User size={18} />
                <span>Listener</span>
              </button>
              
              <button 
                onClick={() => setRole('artist')}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl relative z-10 transition-colors duration-300 ${role === 'artist' ? 'text-text-main font-bold' : 'text-text-muted hover:text-text-main'}`}
              >
                <Music size={18} />
                <span>Artist</span>
              </button>
            </div>

            <div className="space-y-6 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-text-main">
                  {role === 'consumer' ? 'Welcome Back, Fan!' : 'Artist Portal Access'}
                </h2>
                <p className="text-text-muted text-sm">
                  {role === 'consumer' 
                    ? 'Connect your wallet to start streaming and collecting.' 
                    : 'Manage your releases, check earnings, and connect with fans.'}
                </p>
              </div>

              {/* Connect Button Area */}
              <div 
                className="relative group"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-500 to-primary rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                
                {/* 
                  Using a custom wrapper for Thirdweb ConnectWallet or simulating it 
                  since we want to control the UI. 
                  If ConnectWallet is fully styled by the library, we might wrap it.
                  Here we use a custom button that WOULD trigger the wallet connection 
                  or we can render the actual component if available.
                */}
                <button 
                  className="relative w-full bg-white text-text-main font-bold py-4 px-6 rounded-xl shadow-lg flex items-center justify-between group overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98]"
                  onClick={() => onLogin && onLogin(role)}
                >
                  <span className="flex items-center gap-3 relative z-10">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary-dark">
                      <Wallet size={16} />
                    </div>
                    Connect Wallet
                  </span>
                  <ArrowRight size={20} className="text-text-muted group-hover:text-primary-dark group-hover:translate-x-1 transition-all relative z-10" />
                  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white via-white to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </button>
              </div>

              <div className="pt-4 border-t border-glass-border">
                <p className="text-xs text-text-muted">
                  By connecting, you agree to our <a href="#" className="underline hover:text-primary-dark">Terms of Service</a> & <a href="#" className="underline hover:text-primary-dark">Privacy Policy</a>.
                </p>
              </div>
            </div>

          </div>
          
          {/* Floating badge for added visual interest */}
          <div className="absolute -bottom-6 -right-6 hidden lg:block animate-float" style={{ animationDelay: '2s' }}>
            <div className="glass-card p-4 rounded-2xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white">
                <Globe size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-text-main">Web3 Ready</p>
                <p className="text-[10px] text-text-muted">Polygon Network</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

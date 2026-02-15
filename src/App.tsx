import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

// Consumer Screens
import { Home } from './screens/consumer/Home';
import { Search } from './screens/consumer/Search';
import { Library } from './screens/consumer/Library';
import { SongDetail } from './screens/consumer/SongDetail';
import { ArtistProfile } from './screens/consumer/ArtistProfile';
import { Marketplace } from './screens/consumer/Marketplace';
import { NFTDetail } from './screens/consumer/NFTDetail';
import { UserProfile } from './screens/consumer/UserProfile';

// Artist Screens
import { ArtistDashboard } from './screens/artist/ArtistDashboard';
import { ArtistUpload } from './screens/artist/ArtistUpload';
import { ArtistSongs } from './screens/artist/ArtistSongs';
import { ArtistEarnings } from './screens/artist/ArtistEarnings';
import { ArtistNFTManager } from './screens/artist/ArtistNFTManager';

// Admin Screens
import { AdminDashboard } from './screens/admin/AdminDashboard';
import { AdminUsers } from './screens/admin/AdminUsers';
import { AdminSongs } from './screens/admin/AdminSongs';
import { AdminTransactions } from './screens/admin/AdminTransactions';
import { AdminContracts } from './screens/admin/AdminContracts';

// Shared Layout Components
import { Header } from './components/shared/Header';
import { MiniPlayer } from './components/shared/MiniPlayer';
import { FullPlayer } from './components/shared/FullPlayer';
import { Sidebar } from './components/shared/Sidebar';
import { CurrencyProvider } from './context/CurrencyContext';
import { Login } from './screens/auth/Login';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('auth-login');
  const [isSwitcherOpen, setIsSwitcherOpen] = useState(false);
  const [consumerMode, setConsumerMode] = useState<'streaming' | 'nft'>('streaming');
  const [isPlayerExpanded, setIsPlayerExpanded] = useState(false);

  // Helper to render the correct screen
  const renderScreen = () => {
    switch (currentScreen) {
      case 'consumer-home': return <Home mode={consumerMode} />;
      case 'consumer-search': return <Search mode={consumerMode} />;
      case 'consumer-library': return <Library mode={consumerMode} />;
      case 'consumer-song-detail': return <SongDetail mode={consumerMode} />;
      case 'consumer-artist-profile': return <ArtistProfile mode={consumerMode} />;
      case 'consumer-marketplace': return <Marketplace />;
      case 'consumer-nft-detail': return <NFTDetail />;
      case 'consumer-profile': return <UserProfile />;
      
      case 'artist-dashboard': return <ArtistDashboard />;
      case 'artist-upload': return <ArtistUpload />;
      case 'artist-songs': return <ArtistSongs />;
      case 'artist-earnings': return <ArtistEarnings />;
      case 'artist-nft-manager': return <ArtistNFTManager />;

      case 'admin-dashboard': return <AdminDashboard />;
      case 'admin-users': return <AdminUsers />;
      case 'admin-songs': return <AdminSongs />;
      case 'admin-transactions': return <AdminTransactions />;
      case 'admin-contracts': return <AdminContracts />;
      
      case 'auth-login': return <Login onLogin={(role) => setCurrentScreen(role === 'artist' ? 'artist-dashboard' : 'consumer-home')} />;

      default: return <Home mode={consumerMode} />;
    }
  };

  // Determine layout based on screen type
  const isConsumer = currentScreen.startsWith('consumer');
  const isArtist = currentScreen.startsWith('artist');
  const isAdmin = currentScreen.startsWith('admin');
  const isAuth = currentScreen.startsWith('auth');

  return (
    <CurrencyProvider>
      <div className="fixed inset-0 bg-bg-base font-sans text-text-main selection:bg-primary/30 flex items-center justify-center overflow-hidden">
        {/* Fluid Background */}
        <div className="fluid-canvas">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
        </div>

        {/* Screen Switcher (Demo Only) */}
        <div className={`fixed top-4 left-4 z-[100] transition-all duration-300 ${isSwitcherOpen ? 'w-64' : 'w-12'}`}>
          <button 
            onClick={() => setIsSwitcherOpen(!isSwitcherOpen)}
            className="absolute -right-3 top-2 bg-white/50 backdrop-blur-md border border-white/40 text-text-main p-1 rounded-full shadow-lg z-10 hover:scale-110 transition-transform"
          >
            {isSwitcherOpen ? <ChevronDown size={14} className="rotate-90" /> : <ChevronRight size={14} />}
          </button>
          
          {isSwitcherOpen && (
            <div className="glass-panel rounded-2xl p-4 max-h-[80vh] overflow-y-auto border border-white/30 shadow-xl">
              <h3 className="text-xs font-bold uppercase tracking-wider text-text-muted mb-4">Screen Switcher</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-purple-600 mb-2 text-sm">Authentication</h4>
                  <div className="space-y-1 pl-2 border-l border-purple-500/20">
                    <button
                      onClick={() => setCurrentScreen('auth-login')}
                      className={`block text-xs w-full text-left py-1 hover:text-purple-600 transition-colors ${currentScreen === 'auth-login' ? 'text-purple-600 font-bold' : 'text-text-muted'}`}
                    >
                      Login / Signup
                    </button>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-primary-dark mb-2 text-sm">Consumer App</h4>
                  <div className="space-y-1 pl-2 border-l border-primary/20">
                    {[
                      { id: 'consumer-home', label: 'Home' },
                      { id: 'consumer-search', label: 'Search' },
                      { id: 'consumer-library', label: 'Library' },
                      { id: 'consumer-song-detail', label: 'Song Detail' },
                      { id: 'consumer-artist-profile', label: 'Artist Profile' },
                      { id: 'consumer-marketplace', label: 'Marketplace' },
                      { id: 'consumer-nft-detail', label: 'NFT Detail' },
                      { id: 'consumer-profile', label: 'User Profile' },
                    ].map(screen => (
                      <button
                        key={screen.id}
                        onClick={() => setCurrentScreen(screen.id)}
                        className={`block text-xs w-full text-left py-1 hover:text-primary-dark transition-colors ${currentScreen === screen.id ? 'text-primary-dark font-bold' : 'text-text-muted'}`}
                      >
                        {screen.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-secondary mb-2 text-sm">Artist Dashboard</h4>
                  <div className="space-y-1 pl-2 border-l border-secondary/20">
                    {[
                      { id: 'artist-dashboard', label: 'Dashboard' },
                      { id: 'artist-upload', label: 'Upload' },
                      { id: 'artist-songs', label: 'My Songs' },
                      { id: 'artist-earnings', label: 'Earnings' },
                      { id: 'artist-nft-manager', label: 'NFT Manager' },
                    ].map(screen => (
                      <button
                        key={screen.id}
                        onClick={() => setCurrentScreen(screen.id)}
                        className={`block text-xs w-full text-left py-1 hover:text-secondary transition-colors ${currentScreen === screen.id ? 'text-secondary font-bold' : 'text-text-muted'}`}
                      >
                        {screen.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-green-600 mb-2 text-sm">Admin Portal</h4>
                  <div className="space-y-1 pl-2 border-l border-green-500/20">
                    {[
                      { id: 'admin-dashboard', label: 'Dashboard' },
                      { id: 'admin-users', label: 'Users' },
                      { id: 'admin-songs', label: 'Content' },
                      { id: 'admin-transactions', label: 'Transactions' },
                      { id: 'admin-contracts', label: 'Contracts' },
                    ].map(screen => (
                      <button
                        key={screen.id}
                        onClick={() => setCurrentScreen(screen.id)}
                        className={`block text-xs w-full text-left py-1 hover:text-green-600 transition-colors ${currentScreen === screen.id ? 'text-green-600 font-bold' : 'text-text-muted'}`}
                      >
                        {screen.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Main App Shell - Floating Glass Container */}
        <div className="app-shell w-[95vw] max-w-[1600px] h-[92vh] flex overflow-hidden relative z-10 shadow-2xl">
          {isConsumer ? (
            <div className="flex-1 flex flex-col h-full overflow-hidden">
              <Header 
                activeTab={currentScreen.replace('consumer-', '')} 
                onTabChange={(tab) => setCurrentScreen(`consumer-${tab}`)} 
                mode={consumerMode}
                onModeChange={setConsumerMode}
              />
              <main className="flex-1 overflow-y-auto scrollbar-hide p-6 md:p-10 pb-32">
                {renderScreen()}
              </main>
              {consumerMode === 'streaming' && (
                <>
                  {!isPlayerExpanded && (
                    <MiniPlayer 
                      title="Neon Nights" 
                      artist="Cyber Soul" 
                      cover="https://picsum.photos/seed/neon/400/400" 
                      onExpand={() => setIsPlayerExpanded(true)}
                    />
                  )}
                  {isPlayerExpanded && (
                    <FullPlayer 
                      title="Neon Nights" 
                      artist="Cyber Soul" 
                      cover="https://picsum.photos/seed/neon/400/400" 
                      onClose={() => setIsPlayerExpanded(false)}
                      isNFT={true}
                      price={0.05}
                    />
                  )}
                </>
              )}
            </div>
          ) : (
            <div className="flex-1 flex h-full overflow-hidden">
              <Sidebar 
                role={isArtist ? 'artist' : 'admin'} 
                activeTab={currentScreen.replace(isArtist ? 'artist-' : 'admin-', '')}
                onTabChange={(tab) => setCurrentScreen(`${isArtist ? 'artist' : 'admin'}-${tab}`)}
              />
              <main className="flex-1 overflow-y-auto scrollbar-hide p-6 md:p-10 bg-white/30 backdrop-blur-sm">
                {renderScreen()}
              </main>
            </div>
          )}
        </div>
      </div>
    </CurrencyProvider>
  );
};

export default App;

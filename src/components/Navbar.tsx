import { useState, useEffect } from 'react';

interface NavbarProps {
  onSearch: (query: string) => void;
}

export default function Navbar({ onSearch }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-[#141414]' : 'bg-gradient-to-b from-black/80 to-transparent'}`}>
      <div className="flex items-center justify-between px-4 md:px-12 py-3">
        <div className="flex items-center gap-6">
          {/* Netflix Logo */}
          <svg viewBox="0 0 111 30" className="h-6 md:h-8 fill-[#e50914]" aria-label="Netflix">
            <path d="M105.06 1.519l-2.416 7.852-2.45-7.852h-5.486v26.4h4.42V10.09l2.85 8.54h1.36l2.85-8.54v17.83h4.42V1.519h-5.548zM90.47 1.519h-4.42v26.4h4.42V1.519zM80.76 1.519h-4.42v26.4h4.42V1.519zM70.68 1.519h-4.42v26.4h4.42V1.519zM55.42 1.519l-5.86 17.59-5.86-17.59h-5.14v26.4h4.42V11.79l4.42 13.27h4.2l4.42-13.27v16.13h4.42V1.519h-5.02zM36.02 1.519h-4.42v26.4h4.42V1.519zM24.72 1.519h-4.42v26.4h4.42V1.519zM14.64 1.519h-4.42v26.4h4.42V1.519zM5.86 1.519L0 27.919h4.42l1.44-5.72h4.86l1.44 5.72h4.42L10.72 1.519H5.86zm2.22 7.56l1.86 7.41H6.22l1.86-7.41z"/>
          </svg>
          
          <div className="hidden md:flex items-center gap-4 text-sm text-gray-300">
            <a href="#" className="text-white font-semibold hover:text-gray-400 transition">Home</a>
            <a href="#" className="hover:text-white transition">TV Shows</a>
            <a href="#" className="hover:text-white transition">Movies</a>
            <a href="#" className="hover:text-white transition">New & Popular</a>
            <a href="#" className="hover:text-white transition">My List</a>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          {showSearch ? (
            <div className="flex items-center bg-black/80 border border-white/50 px-2">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Titles, people, genres"
                className="bg-transparent text-white text-sm px-2 py-1 w-40 md:w-56 outline-none"
                value={searchQuery}
                onChange={handleSearchChange}
                autoFocus
              />
              <button onClick={() => { setShowSearch(false); setSearchQuery(''); onSearch(''); }}>
                <svg className="w-5 h-5 text-white cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ) : (
            <button onClick={() => setShowSearch(true)}>
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          )}
          
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          
          <div className="w-8 h-8 rounded bg-gradient-to-br from-red-500 to-yellow-500 flex items-center justify-center cursor-pointer">
            <span className="text-white text-xs font-bold">U</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

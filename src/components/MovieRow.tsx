import { useRef, useState } from 'react';
import { Movie } from '../data/movies';

interface MovieRowProps {
  title: string;
  movies: Movie[];
  onPlay: (movie: Movie) => void;
  onMoreInfo: (movie: Movie) => void;
}

export default function MovieRow({ title, movies, onPlay, onMoreInfo }: MovieRowProps) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (rowRef.current) {
      const scrollAmount = direction === 'left' ? -800 : 800;
      rowRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if (rowRef.current) {
      setShowLeftArrow(rowRef.current.scrollLeft > 0);
    }
  };

  return (
    <div className="relative px-4 md:px-12 mb-8 group/row">
      <h2 className="text-lg md:text-xl font-bold text-white mb-2 hover:text-gray-300 cursor-pointer transition">
        {title}
        <span className="text-[#54b9c5] text-sm ml-2 opacity-0 group-hover/row:opacity-100 transition-opacity">
          Explore All →
        </span>
      </h2>
      
      <div className="relative -mx-4 md:-mx-12">
        {/* Left Arrow */}
        {showLeftArrow && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-0 bottom-0 z-20 w-12 bg-black/50 hover:bg-black/80 flex items-center justify-center opacity-0 group-hover/row:opacity-100 transition-opacity"
          >
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* Movie Cards */}
        <div
          ref={rowRef}
          onScroll={handleScroll}
          className="flex gap-1.5 overflow-x-scroll scrollbar-hide px-4 md:px-12 scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="flex-shrink-0 w-[200px] md:w-[240px] relative cursor-pointer group/card"
              onMouseEnter={() => setHoveredId(movie.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => onMoreInfo(movie)}
            >
              <div className={`relative overflow-hidden rounded transition-all duration-300 ${hoveredId === movie.id ? 'scale-110 z-10 shadow-2xl' : ''}`}>
                <img
                  src={movie.thumbnail}
                  alt={movie.title}
                  className="w-full aspect-video object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=225&fit=crop`;
                  }}
                />
                
                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent transition-opacity ${hoveredId === movie.id ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <h3 className="text-white text-sm font-bold mb-1 truncate">{movie.title}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <button
                        onClick={(e) => { e.stopPropagation(); onPlay(movie); }}
                        className="w-7 h-7 bg-white rounded-full flex items-center justify-center hover:bg-white/80 transition"
                      >
                        <svg className="w-4 h-4 text-black ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); }}
                        className="w-7 h-7 border-2 border-gray-400 rounded-full flex items-center justify-center hover:border-white transition"
                      >
                        <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); }}
                        className="w-7 h-7 border-2 border-gray-400 rounded-full flex items-center justify-center hover:border-white transition"
                      >
                        <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                        </svg>
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); onMoreInfo(movie); }}
                        className="w-7 h-7 border-2 border-gray-400 rounded-full flex items-center justify-center hover:border-white transition ml-auto"
                      >
                        <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-green-500 font-semibold">{movie.match}% Match</span>
                      <span className="border border-gray-500 text-gray-400 px-1">{movie.rating}</span>
                    </div>
                    <div className="flex gap-1 mt-1">
                      {movie.genre.slice(0, 3).map((g, i) => (
                        <span key={i} className="text-gray-300 text-xs">
                          {i > 0 && <span className="text-gray-600 mr-1">•</span>}
                          {g}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-0 bottom-0 z-20 w-12 bg-black/50 hover:bg-black/80 flex items-center justify-center opacity-0 group-hover/row:opacity-100 transition-opacity"
        >
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

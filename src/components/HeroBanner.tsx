import { useState } from 'react';
import { Movie } from '../data/movies';

interface HeroBannerProps {
  movie: Movie;
  onPlay: (movie: Movie) => void;
  onMoreInfo: (movie: Movie) => void;
}

export default function HeroBanner({ movie, onPlay, onMoreInfo }: HeroBannerProps) {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <div className="relative w-full h-[85vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={movie.backdrop}
          alt={movie.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1920&h=1080&fit=crop`;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute bottom-[20%] left-4 md:left-12 max-w-xl z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
          {movie.title}
        </h1>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-green-500 font-semibold">{movie.match}% Match</span>
          <span className="text-gray-400">{movie.year}</span>
          <span className="border border-gray-400 text-gray-400 px-1.5 py-0.5 text-xs">{movie.rating}</span>
          <span className="text-gray-400">{movie.duration}</span>
        </div>
        <p className="text-gray-200 text-sm md:text-base mb-6 line-clamp-3">
          {movie.description}
        </p>
        <div className="flex items-center gap-3">
          <button
            onClick={() => onPlay(movie)}
            className="flex items-center gap-2 bg-white text-black font-bold px-6 md:px-8 py-2 md:py-3 rounded hover:bg-white/80 transition text-sm md:text-base"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
            Play
          </button>
          <button
            onClick={() => onMoreInfo(movie)}
            className="flex items-center gap-2 bg-gray-500/70 text-white font-bold px-6 md:px-8 py-2 md:py-3 rounded hover:bg-gray-500/50 transition text-sm md:text-base"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            More Info
          </button>
        </div>
      </div>

      {/* Mute Button */}
      <button
        onClick={() => setIsMuted(!isMuted)}
        className="absolute bottom-[20%] right-4 md:right-12 border border-gray-400 rounded-full p-2 hover:border-white transition"
      >
        {isMuted ? (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          </svg>
        )}
      </button>

      {/* Rating Badge */}
      <div className="absolute bottom-[20%] right-20 md:right-28 flex items-center">
        <span className="bg-gray-800/80 border-l-2 border-white text-white px-3 py-1 text-sm">
          {movie.rating}
        </span>
      </div>
    </div>
  );
}

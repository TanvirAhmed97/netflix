import { useEffect } from 'react';
import { Movie } from '../data/movies';

interface MovieModalProps {
  movie: Movie;
  onClose: () => void;
  onPlay: (movie: Movie) => void;
}

export default function MovieModal({ movie, onClose, onPlay }: MovieModalProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-8 pb-8 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-3xl mx-4 bg-[#181818] rounded-lg overflow-hidden shadow-2xl animate-fade-in z-10">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 bg-[#181818] rounded-full flex items-center justify-center hover:bg-[#2a2a2a] transition"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* YouTube Video Player */}
        <div className="relative aspect-video bg-black">
          <iframe
            src={`https://www.youtube.com/embed/${movie.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
            title={movie.title}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#181818] to-transparent pointer-events-none" />
        </div>

        {/* Movie Info */}
        <div className="px-8 md:px-12 pb-8 -mt-16 relative z-10">
          {/* Action Buttons */}
          <div className="flex items-center gap-3 mb-6">
            <button
              onClick={() => onPlay(movie)}
              className="flex items-center gap-2 bg-white text-black font-bold px-8 py-2 rounded hover:bg-white/80 transition"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
              Play
            </button>
            <button className="w-10 h-10 border-2 border-gray-400 rounded-full flex items-center justify-center hover:border-white transition">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
            <button className="w-10 h-10 border-2 border-gray-400 rounded-full flex items-center justify-center hover:border-white transition">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
              </svg>
            </button>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-green-500 font-semibold">{movie.match}% Match</span>
                <span className="text-gray-400">{movie.year}</span>
                <span className="border border-gray-400 text-gray-400 px-1.5 py-0.5 text-xs">{movie.rating}</span>
                <span className="text-gray-400">{movie.duration}</span>
                <span className="border border-gray-600 text-gray-400 px-1.5 py-0.5 text-xs rounded">HD</span>
              </div>
              <p className="text-white text-sm md:text-base leading-relaxed">
                {movie.description}
              </p>
            </div>
            <div className="text-sm">
              <p className="text-gray-400 mb-2">
                <span className="text-gray-500">Genres: </span>
                <span className="text-white">{movie.genre.join(', ')}</span>
              </p>
              <p className="text-gray-400 mb-2">
                <span className="text-gray-500">This show is: </span>
                <span className="text-white">Exciting, Suspenseful</span>
              </p>
              <p className="text-gray-400">
                <span className="text-gray-500">Audio: </span>
                <span className="text-white">English, Spanish [Original]</span>
              </p>
            </div>
          </div>

          {/* About Section */}
          <div className="mt-8 pt-6 border-t border-gray-700">
            <h3 className="text-white text-lg font-semibold mb-4">
              About {movie.title}
            </h3>
            <div className="space-y-2 text-sm">
              <p className="text-gray-400">
                <span className="text-gray-500">Cast: </span>
                <span className="text-white">Actor One, Actor Two, Actor Three, Actor Four</span>
              </p>
              <p className="text-gray-400">
                <span className="text-gray-500">Creators: </span>
                <span className="text-white">Creator Name</span>
              </p>
              <p className="text-gray-400">
                <span className="text-gray-500">Genres: </span>
                <span className="text-white">{movie.genre.join(', ')}</span>
              </p>
              <p className="text-gray-400">
                <span className="text-gray-500">Maturity rating: </span>
                <span className="border border-gray-400 text-white px-1.5 py-0.5 text-xs mr-2">{movie.rating}</span>
                <span>Recommended for mature audiences</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import MovieRow from './components/MovieRow';
import MovieModal from './components/MovieModal';
import YouTubePlayer from './components/YouTubePlayer';
import Footer from './components/Footer';
import {
  Movie,
  featuredMovie,
  trendingNow,
  popularOnNetflix,
  actionMovies,
  comedyMovies,
  myList,
  newReleases
} from './data/movies';

export default function App() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [playingMovie, setPlayingMovie] = useState<Movie | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const allMovies = useMemo(() => [
    ...trendingNow,
    ...popularOnNetflix,
    ...actionMovies,
    ...comedyMovies,
    ...myList,
    ...newReleases
  ], []);

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase();
    return allMovies.filter(movie =>
      movie.title.toLowerCase().includes(query) ||
      movie.genre.some(g => g.toLowerCase().includes(query)) ||
      movie.description.toLowerCase().includes(query)
    );
  }, [searchQuery, allMovies]);

  const handlePlay = (movie: Movie) => {
    setSelectedMovie(null);
    setPlayingMovie(movie);
  };

  const handleMoreInfo = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  const handleClosePlayer = () => {
    setPlayingMovie(null);
  };

  return (
    <div className="min-h-screen bg-[#141414]">
      <Navbar onSearch={setSearchQuery} />

      {/* Search Results */}
      {searchQuery.trim() ? (
        <div className="pt-24 px-4 md:px-12">
          <h2 className="text-white text-xl font-bold mb-6">
            {searchResults.length > 0
              ? `Results for "${searchQuery}"`
              : `No results for "${searchQuery}"`
            }
          </h2>
          {searchResults.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
              {searchResults.map(movie => (
                <div
                  key={movie.id}
                  className="cursor-pointer group"
                  onClick={() => handleMoreInfo(movie)}
                >
                  <div className="relative overflow-hidden rounded aspect-video">
                    <img
                      src={movie.thumbnail}
                      alt={movie.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=225&fit=crop`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition">
                      <div className="absolute bottom-2 left-2 right-2">
                        <p className="text-white text-sm font-semibold truncate">{movie.title}</p>
                        <p className="text-green-500 text-xs">{movie.match}% Match</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <svg className="w-16 h-16 text-gray-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <p className="text-gray-400 text-lg">Your search did not have any matches.</p>
              <p className="text-gray-500 text-sm mt-2">Suggestions:</p>
              <ul className="text-gray-500 text-sm mt-1 space-y-1">
                <li>Try different keywords</li>
                <li>Try more general keywords</li>
                <li>Try checking your spelling</li>
              </ul>
            </div>
          )}
        </div>
      ) : (
        <>
          {/* Hero Banner */}
          <HeroBanner
            movie={featuredMovie}
            onPlay={handlePlay}
            onMoreInfo={handleMoreInfo}
          />

          {/* Movie Rows */}
          <div className="-mt-24 relative z-10">
            <MovieRow
              title="Trending Now"
              movies={trendingNow}
              onPlay={handlePlay}
              onMoreInfo={handleMoreInfo}
            />
            <MovieRow
              title="Popular on Netflix"
              movies={popularOnNetflix}
              onPlay={handlePlay}
              onMoreInfo={handleMoreInfo}
            />
            <MovieRow
              title="Action & Adventure"
              movies={actionMovies}
              onPlay={handlePlay}
              onMoreInfo={handleMoreInfo}
            />
            <MovieRow
              title="Comedies"
              movies={comedyMovies}
              onPlay={handlePlay}
              onMoreInfo={handleMoreInfo}
            />
            <MovieRow
              title="My List"
              movies={myList}
              onPlay={handlePlay}
              onMoreInfo={handleMoreInfo}
            />
            <MovieRow
              title="New Releases"
              movies={newReleases}
              onPlay={handlePlay}
              onMoreInfo={handleMoreInfo}
            />
          </div>

          {/* Footer */}
          <Footer movies={allMovies} onMoreInfo={handleMoreInfo} />
        </>
      )}

      {/* Movie Detail Modal */}
      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={handleCloseModal}
          onPlay={handlePlay}
        />
      )}

      {/* YouTube Player */}
      {playingMovie && (
        <YouTubePlayer
          movie={playingMovie}
          onClose={handleClosePlayer}
        />
      )}
    </div>
  );
}

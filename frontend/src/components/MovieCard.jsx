import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <Link to={`/movie/${movie.imdbID}`}>
      <div className="border rounded shadow p-2 hover:scale-105 transition">
        
        {/* Poster OR fallback */}
        {movie.Poster ? (
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="w-full h-[300px] object-cover rounded"
          />
        ) : (
          <div className="w-full h-[300px] flex flex-col items-center justify-center bg-gray-200 rounded">
            <span className="text-lg">🎬</span>
            <span className="text-gray-600 text-sm">
              No Image Available
            </span>
          </div>
        )}

        <h3 className="mt-2 font-semibold">{movie.Title}</h3>
        <p className="text-sm text-gray-500">{movie.Year}</p>
      </div>
    </Link>
  );
}

export default MovieCard;
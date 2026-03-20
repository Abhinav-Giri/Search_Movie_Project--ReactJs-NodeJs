import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../services/api";

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieDetails(id).then((res) => {
      setMovie(res.data.data);
    });
  }, [id]);

  if (!movie) return <p className="text-center">Loading...</p>;

  return (
    <div className="p-4 max-w-[800px] mx-auto">
      
      {movie.Poster ? (
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="w-[300px] mx-auto"
        />
      ) : (
        <div className="w-[300px] h-[450px] mx-auto flex items-center justify-center bg-gray-200">
          <span>No Image Available</span>
        </div>
      )}

      <h2 className="text-2xl font-bold mt-4 text-center">
        {movie.Title}
      </h2>

      <p className="mt-2">{movie.Plot}</p>
      <p className="mt-2 text-gray-600">Year: {movie.Year}</p>
      <p className="text-gray-600">Genre: {movie.Genre}</p>
    </div>
  );
}

export default MovieDetail;
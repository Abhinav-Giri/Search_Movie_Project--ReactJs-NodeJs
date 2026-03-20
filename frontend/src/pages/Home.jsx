import { useState, useEffect } from "react";
import Result from "../components/Result";
import { fetchMovies } from "../services/api";

function Home() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("batman");
  const [page, setPage] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const getMovies = async () => {
    try {
      setLoading(true);
      setErrorMessage("");

      const response = await fetchMovies(search, page);

      setMovies(response.data.data || []);
    } catch (error) {
      console.error(error);
      setErrorMessage("Failed to fetch movies");
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      getMovies();
    }, 500);

    return () => clearTimeout(timer);
  }, [search, page]);

  return (
    <div className="max-w-[1240px] mx-auto p-4">
      
      {/* Search */}
      <input
        type="search"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1); // reset page
        }}
        placeholder="Search movies..."
        className="w-full border p-3 rounded mb-4"
      />

      {/* Loading */}
      {loading && <p className="text-center">Loading...</p>}

      {/* Error */}
      {errorMessage && (
        <p className="text-red-500 text-center">{errorMessage}</p>
      )}

      {/* Results */}
      {!loading && !errorMessage && <Result movies={movies} />}

      {/* Pagination */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="px-4 py-2 border rounded"
        >
          Prev
        </button>

        <span>Page {page}</span>

        <button
          onClick={() => setPage(page + 1)}
          className="px-4 py-2 border rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Home;
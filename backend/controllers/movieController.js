const api = require("../config/axios");
const { formatMovies } = require("../utils/posterHelper");

// Search Movies with Pagination
const searchMovies = async (req, res) => {
  try {
    const { searchKey, page = 1 } = req.query;

    if (!searchKey) {
      return res.status(400).json({
        success: false,
        message: "searchKey is required",
      });
    }

    const response = await api.get("/", {
      params: {
        apikey: process.env.OMDB_API_KEY,
        s: searchKey,
        page,
      },
    });

    const movies = formatMovies(response.data.Search);

    res.json({
      success: true,
      totalResults: response.data.totalResults,
      page: Number(page),
      data: movies,
    });
  } catch (error) {
    console.error("Search Error:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to fetch movies",
    });
  }
};

// Movie Details
const getMovieDetails = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await api.get("/", {
      params: {
        apikey: process.env.OMDB_API_KEY,
        i: id,
      },
    });

    const movie = {
  ...response.data,
  Poster:
    response.data.Poster && response.data.Poster !== "Currently Not Available"
      ? response.data.Poster
      : null,
};

    res.json({
      success: true,
      data: movie,
    });
  } catch (error) {
    console.error("Detail Error:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to fetch movie details",
    });
  }
};

module.exports = {
  searchMovies,
  getMovieDetails,
};

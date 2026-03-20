const express = require("express");
const router = express.Router();

const {
  searchMovies,
  getMovieDetails,
} = require("../controllers/movieController");

router.get("/search", searchMovies);
router.get("/movie/:id", getMovieDetails);

module.exports = router;

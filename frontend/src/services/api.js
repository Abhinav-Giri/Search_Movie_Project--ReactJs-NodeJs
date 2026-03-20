import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 5000,
});

export const fetchMovies = (search, page = 1) => {
  return api.get(`/search?searchKey=${search}&page=${page}`);
};

export const fetchMovieDetails = (id) => {
  return api.get(`/movie/${id}`);
};
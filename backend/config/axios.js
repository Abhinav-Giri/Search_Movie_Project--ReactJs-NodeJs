const axios = require("axios");

const api = axios.create({
  baseURL: process.env.OMDB_BASE_URL,
  timeout: 5000,
});

module.exports = api;
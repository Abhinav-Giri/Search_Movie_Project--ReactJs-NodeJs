const express = require("express");
const errorHandler = require("./middlewares/globalErrorMiddleware");
const cors = require("cors");
require("dotenv").config();

const movieRoutes = require("./routes/movieRoutes");

const app = express();

app.use(cors({
    origin: [
      "http://localhost:3000",
      "https://searchmovie-rho.vercel.app",
    ],
    methods: ["GET"],
  }));
app.use(express.json());

app.use("/", movieRoutes);

app.get("/", (req, res) => {
  res.send("OMDB API running...");
});
app.use(errorHandler);

const PORT = process.env.PORT || 4200;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

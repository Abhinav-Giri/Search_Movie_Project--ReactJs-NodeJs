const express = require("express");
const cors = require("cors");
require("dotenv").config();

const movieRoutes = require("./routes/movieRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", movieRoutes);

app.get("/", (req, res) => {
  res.send("OMDB API running...");
});

const PORT = process.env.PORT || 4200;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const yogaPoses = require("./data/yogaPoses.json");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.get("/api/poses", (req, res) => {
  res.json(yogaPoses);
});
app.get("/api/poses/search", (req, res) => {
  const { name } = req.query;
  const results = yogaPoses.filter((pose) =>
    pose.sanskrit_name.toLowerCase().includes(name.toLowerCase())
  );
  res.json(results);
});

app.use((err, req, res, next) => {
  console.error(err);

  const statusCode = err.statusCode || 500;
  const errorMessage =
    err.message || "Something went wrong. Please try again later.";

  res.status(statusCode).json({
    success: false,
    message: errorMessage,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

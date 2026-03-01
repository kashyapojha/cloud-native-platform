require("./config/db");

const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);

app.get("/health", (req, res) => {
  res.json({ status: "Auth Service Running" });
});

app.listen(4001, () => {
  console.log("Auth Service running on port 4001");
});
require("./config/db");

const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/users", userRoutes);

app.get("/health", (req, res) => {
  res.json({ status: "User Service Running" });
});

const PORT = process.env.PORT || 4002;
app.listen(PORT, () => {
  console.log(`User Service running on port ${PORT}`);
});
require("dotenv").config();
require("./config/db");

const express = require("express");
const cors = require("cors");
const productRoutes = require("./routes/productRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", productRoutes);

app.get("/health", (req, res) => {
  res.json({ status: "Product Service Running" });
});

app.listen(process.env.PORT, () => {
  console.log(`Product Service running on port ${process.env.PORT}`);
});
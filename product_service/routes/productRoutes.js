const express = require("express");
const router = express.Router();
const { authenticateToken } = require("../middleware/auth");
const { getProducts, addProduct } = require("../controllers/productController");

// All routes require JWT
router.get("/products", authenticateToken, getProducts);
router.post("/products", authenticateToken, addProduct);

module.exports = router;
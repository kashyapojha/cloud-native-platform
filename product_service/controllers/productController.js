const db = require("../config/db");

const getProducts = (req, res) => {
  db.query("SELECT * FROM products", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

const addProduct = (req, res) => {
  const { name, price, description } = req.body;
  db.query(
    "INSERT INTO products (name, price, description) VALUES (?, ?, ?)",
    [name, price, description],
    (err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: "Product added", id: results.insertId });
    }
  );
};

module.exports = { getProducts, addProduct };
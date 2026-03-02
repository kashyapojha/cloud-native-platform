const db = require("../config/db");

exports.getAllUsers = (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

exports.addUser = (req, res) => {
  const { name, email, age } = req.body;
  if (!name || !email || !age) {
    return res.status(400).json({ message: "Name, email, age required" });
  }

  db.query(
    "INSERT INTO users (name, email, age) VALUES (?, ?, ?)",
    [name, email, age],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.status(201).json({ message: "User added successfully" });
    }
  );
};
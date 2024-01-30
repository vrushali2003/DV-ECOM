const express = require("express");
const cors = require('cors');
const app = express();

app.use(cors());

app.get("/api", (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.json({ message: "this is from backend" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

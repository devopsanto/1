const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Jenkins + Docker 🚀");
});

app.listen(1000, () => {
  console.log("App running on port 1000");
});

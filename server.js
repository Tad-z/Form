const express = require("express");
const app = express();

//set up views engine to use ejs template package
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  return 1;
});

app.post("/book-ride", function (req, res) {
  return 1;
});

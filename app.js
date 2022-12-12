const express = require("express");

const bookingRouter = require("./routes/bookingRoutes");

const app = express();

// Body parser, reading data from body into req.body
app.use(express.json());

app.use("/bookings", bookingRouter);

//set up views engine to use ejs template package
app.set("view engine", "ejs");

module.exports = app;

const path = require("path")
const express = require("express");
const morgan = require("morgan");

const bookingRouter = require("./routes/bookingRoutes");

const app = express();

// Body parser, reading data from body into req.body
app.use(express.json());

//Logs requests to the console
app.use(morgan("dev"));

app.use(express.static(path.join(__dirname, 'views')));
app.use("/bookings", bookingRouter);

module.exports = app;

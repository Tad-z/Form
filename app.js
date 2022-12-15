const path = require("path")
const express = require("express");
const fs = require("fs");
const morgan = require("morgan");
const engines = require('consolidate');
const mustache = require('mustache');

const bookingRouter = require("./routes/bookingRoutes");

const app = express();

// Body parser, reading data from body into req.body
app.use(express.json());

//Logs requests to the console
app.use(morgan("dev"));

app.use(express.static(path.join(__dirname, 'views')));
app.engine('html', engines.mustache);
app.set('view engine', 'html');

app.use("/bookings", bookingRouter);
function checkFile(file) {
    return fs.existsSync("./views/" + file + ".html");
}


app.get("/:filename", (req, res) => {
    try {   
        let fileString = req.params.filename.toString()
        if (checkFile(fileString)) {
            res.render(fileString);
        } else {
            console.log("File not found");
        }
    } catch (err) {
        console.log(err);
    }
});

app.get("/", (req, res) => {
    res.render("index.html");
});




module.exports = app;

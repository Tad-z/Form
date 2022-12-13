const express = require("express");
const{ getAllBookings, createBooking, deleteAllBookings } = require("./../controllers/bookingController");

const router = express.Router();

router.get("/", getAllBookings);
router.post("/", createBooking);
router.delete("/", deleteAllBookings);

module.exports = router;

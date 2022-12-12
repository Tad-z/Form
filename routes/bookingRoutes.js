const express = require("express");
const bookingController = require("./../controllers/bookingController");

const router = express.Router();

router.get("/bookings", bookingController.getAllBookings);
router.post("/add-booking", bookingController.createBooking);

module.exports = router;

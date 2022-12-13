const Booking = require("../models/formModel");

exports.getAllBookings = async function (req, res) {
  try {
    const bookings = await Booking.find().exec();
    if (!bookings.length) return res.json([]);
    const count = bookings.length;
    res.status(200).json({
      status: "success",
      message: "Bookings retrieved successfully",
      count,
      data: {
        bookings,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.createBooking = async function (req, res) {
  try {
    const newBooking = await Booking.create({
      fullName: req.body.fullName,
      Department: req.body.Department,
      Level: req.body.Level,
      phoneNumber: req.body.phoneNumber,
      departureDate: req.body.departureDate,
      dropOffPoint: req.body.dropOffPoint,
      noOfLuggage: req.body.noOfLuggage,
    });
    res.status(201).json({
      status: "success",
      data: {
        newBooking,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

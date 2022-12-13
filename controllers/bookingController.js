const Booking = require('../models/formModel')


exports.getAllBookings = async function (req, res) {
  try {
    const bookings = await Booking.find().exec();
    if (!bookings.length) return res.json([]);
    const count = bookings.length;
    res.status(200).json({
      message: "Bookings retrieved successfully",
      count,
      bookings,
    });
  } catch (err) {
    console.log(err.message);
  }
};

exports.createBooking = async function (req, res) {
  try {
    const booking = new Booking({
      fullName: req.body.fullName,
      Department: req.body.Department, 
      Level: req.body.Level,
      phoneNumber: req.body.phoneNumber,
      departureDate: req.body.departureDate,
      dropOffPoint: req.body.dropOffPoint,
      noOfLuggage: req.body.noOfLuggage,
    });
    const b = await booking.save();
    res.status(201).json(q);
  } catch (err) {
    console.log(err.message);
  }
};

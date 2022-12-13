const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const formSchema = new Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full Name is required"],
    },
    Department: {
      type: String,
      required: [true, "Department field is required"],
    },
    Level: {
      type: Number,
      required: [true, "Level is required"],
    },
    phoneNumber: {
      type: Number,
      required: [true, "Phone Number is required"],
    },
    departureDate: {
      type: Date,
      required: [true, "Departure date is required"],
    },
    dropOffPoint: {
      type: String,
      required: [true, "Drop off point is required"],
    },
    noOfLuggage: {
      type: Number,
      required: [true, "Number of Luggages is required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Booking", formSchema);

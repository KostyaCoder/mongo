const { Schema, model } = require("mongoose");

const carSchema = new Schema({
  model: String,
  manufacturer: String,
  yearIssue: Number,
  mileage: Number,
  color: String,
  insured: Boolean,
});

module.exports.Car = model("Car", carSchema);

const { Schema, model } = require("mongoose");

const carSchema = new Schema({
  model: { type: String, required: true },
  manufacturer: { type: String, required: true },
  yearIssue: { type: Number },
  mileage: { type: Number, default: 0 },
  color: { type: String },
  insured: { type: Boolean, default: false, required: true },
});

module.exports.Car = model("Car", carSchema);

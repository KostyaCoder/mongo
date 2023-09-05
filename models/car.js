const { Schema, model } = require("mongoose");

const carSchema = new Schema({
  model: { type: String, required: true },
  manufacturer: { type: String, required: true },
  yearIssue: { type: Number },
  mileage: { type: Number, default: 0 },
  color: { type: String },
  insured: { type: Boolean, default: false, required: true },
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
      required: true,
    },
  ],
  dealers: [
    {
      type: Schema.Types.ObjectId,
      ref: "carDealer",
      required: true,
    },
  ],
});

module.exports = model("Car", carSchema);

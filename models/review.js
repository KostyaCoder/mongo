const { Schema, model } = require("mongoose");

const reviewSchema = new Schema({
  text: { type: String, required: true },
  grade: { type: Number, default: 3 },
  author: { type: String },
  isRecomend: { type: Boolean, default: false },
  car: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Car",
  },
});

module.exports.Car = model("Review", reviewSchema);

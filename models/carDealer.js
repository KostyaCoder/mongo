const { Schema, model } = require("mongoose");

const carDealerSchema = new Schema({
  name: { type: String, required: true },
  address: { type: String },
  cars: [
    {
      type: Schema.Types.ObjectId,
      ref: "Car",
      required: true,
    },
  ],
});

module.exports = model("carDealer", carDealerSchema);

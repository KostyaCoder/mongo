const mongoose = require("mongoose");
const { DB_URL } = require("../constants");
const Car = require("./car");
const carDealer = require("./carDealer");
const Review = require("./review");

connectToDb().catch((err) => console.log(err));

async function connectToDb() {
  await mongoose.connect(DB_URL);
}

module.exports = { Car, carDealer, Review };

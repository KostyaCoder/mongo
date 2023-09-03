const mongoose = require("mongoose");
const { DB_URL } = require("../constants");
module.exports = { Car } = require("./car");

connectToDb().catch((err) => console.log(err));

async function connectToDb() {
  await mongoose.connect(DB_URL);
}

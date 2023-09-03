const mongoose = require("mongoose");
const { DB_URL } = require("../constants");

connectToDb().catch((err) => console.log(err));

async function connectToDb() {
  await mongoose.connect(DB_URL);
}

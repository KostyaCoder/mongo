const { Dealer } = require("../models");

module.exports.createDealer = async ({ car, body }) => {
  const newDealer = await Dealer.create({ ...body, cars: [car._id] });

  await car.updateOne({ $push: { dealers: newDealer._id } });

  return newDealer;
};


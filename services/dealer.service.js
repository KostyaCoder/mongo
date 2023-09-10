const { Dealer } = require("../models");

module.exports.createDealer = async ({ car, body }) => {
  const newDealer = await Dealer.create({ ...body, cars: [car._id] });

  await car.updateOne({ $push: { dealers: newDealer._id } });

  return newDealer;
};

module.exports.findDealers = async (
  filter,
  select,
  populate = "",
  populateSelect = ""
) => {
  const dealers = await Dealer.find(filter, select).populate(
    populate,
    populateSelect
  );

  return dealers;
};

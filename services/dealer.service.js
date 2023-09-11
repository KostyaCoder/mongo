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

module.exports.deleteDealer = async ({dealersId, car}) => {
  const dealer = await Dealer.findOneAndDelete({
    _id: dealersId,
    cars: car._id,
  });

  if (!dealer) {
    return next(createHttpError(404, "Dealer not found"));
  }

  await car.updateOne({ $pull: { dealers: dealersId } });
  await dealer.updateOne({ $pull: { cars: car._id } });

  return dealer;
};

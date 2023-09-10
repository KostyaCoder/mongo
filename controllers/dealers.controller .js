const DealerService = require("../services/dealer.service");

module.exports.createDealer = async (req, res, next) => {
  try {
    const { car, body } = req;

    const review = await DealerService.createDealer({
      body,
      car,
    });

    res.status(201).send({ data: review });
  } catch (error) {
    next(error);
  }
};

module.exports.getAllDealers = async (req, res, next) => {
  try {
    const dealers = await DealerService.findDealers(
      {},
      "-__v",
      "cars",
      "-__v -dealers"
    );

    res.send({ data: dealers });
  } catch (error) {
    next(error);
  }
};


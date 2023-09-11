const { Dealer } = require("../models");
const DealerService = require("../services/dealer.service");

module.exports.createDealer = async (req, res, next) => {
  try {
    const { car, body } = req;

    const dealer = await DealerService.createDealer({
      body,
      car,
    });

    res.status(201).send({ data: dealer });
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

module.exports.getDealer = async (req, res, next) => {
  try {
    const {
      params: { dealersId },
      car: { _id: carId },
    } = req;

    const dealer = await DealerService.findDealers(
      {
        _id: dealersId,
        cars: carId,
      },
      "-__v",
      "cars",
      "-__v -dealers"
    );

    if (!dealer) {
      return next(createHttpError(404, "Dealer not found"));
    }

    res.send({ data: dealer });
  } catch (error) {
    next(error);
  }
};

module.exports.updateDealer = async (req, res, next) => {
  try {
    const {
      car: { _id: carId },
      params: { dealersId },
      body,
    } = req;

    const updatedDealer = await Dealer.findOneAndUpdate(
      {
        _id: dealersId,
        cars: carId,
      },
      body,
      { new: true }
    );

    if (!updatedDealer) {
      return next(createHttpError(404, "Dealer not found"));
    }

    res.send({ data: updatedDealer });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteDealer = async (req, res, next) => {
  try {
    const {
      car,
      params: { dealersId },
    } = req;

    const dealer = await DealerService.deleteDealer({dealersId, car});
    
    res.send({ data: dealer });
  } catch (error) {
    next(error);
  }
};

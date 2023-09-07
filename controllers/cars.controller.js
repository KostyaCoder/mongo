const createHttpError = require("http-errors");
const { Car } = require("../models");

module.exports.createCar = async (req, resp, next) => {
  try {
    const { body } = req;
    const car = await Car.create(body);

    resp.status(201).send({ data: car });
  } catch (error) {
    next(error);
  }
};

module.exports.getCars = async (req, resp, next) => {
  try {
    const cars = await Car.find({}, "-__v").populate("reviews", "-__v");

    resp.status(200).send({ data: cars });
  } catch (error) {
    next(error);
  }
};

module.exports.getCar = async (req, resp, next) => {
  try {
    const {
      params: { carId },
    } = req;

    const car = await Car.findById(carId);

    resp.status(200).send({ data: car });
  } catch (error) {
    next(error);
  }
};

module.exports.updateCar = async (req, resp, next) => {
  try {
    const {
      params: { carId },
      body,
    } = req;

    const car = await Car.findByIdAndUpdate(carId, body, { new: true });

    resp.status(200).send({ data: car });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteCar = async (req, resp, next) => {
  try {
    const {
      params: { carId },
    } = req;

    const car = await Car.findByIdAndDelete(carId);

    resp.status(200).send({ data: car });
  } catch (error) {
    next(error);
  }
};

const createHttpError = require("http-errors");

module.exports.createCar = async (req, resp, next) => {
  const { body } = req;

  try {
    resp.status(201).send({ data: body });
  } catch (error) {
    next(error);
  }
};

module.exports.getCars = async (req, resp, next) => {
  try {
    resp.status(200).send({ data: [] });
  } catch (error) {
    next(error);
  }
};

module.exports.getCar = async (req, resp, next) => {
  const { carId } = req;

  try {
    resp.status(200).send({ data: carId });
  } catch (error) {
    next(error);
  }
};

module.exports.updateCar = async (req, resp, next) => {
  const { carId } = req;

  try {
    resp.status(200).send({ data: carId });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteCar = async (req, resp, next) => {
  const { carId } = req;

  try {
    resp.status(200).send({ data: carId });
  } catch (error) {
    next(error);
  }
};

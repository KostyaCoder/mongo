const { Review, Car } = require("../models");

module.exports.deleteCar = async ({ carId }) => {
  const car = await Car.findByIdAndDelete(carId);

  if (!car) {
    return next(createHttpError(404, "Car not found"));
  }

  await Review.deleteMany({
    _id: { $in: car.reviews },
  });

  return car;
};

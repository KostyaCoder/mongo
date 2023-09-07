const createHttpError = require("http-errors");
const ReviewService = require("../services/review.service");
const { Review } = require("../models");

module.exports.createReview = async (req, res, next) => {
  try {
    const { car, body } = req;

    const review = await ReviewService.createReview({
      body,
      car,
    });

    res.status(201).send({ data: review });
  } catch (error) {
    next(error);
  }
};

module.exports.getAllReviews = async (req, res, next) => {
  try {
    const reviews = await ReviewService.findReviews();

    res.send({ data: reviews });
  } catch (error) {
    next(error);
  }
};

module.exports.getCarReviews = async (req, res, next) => {
  try {
    const { car } = req;

    const carReviews = await ReviewService.findReviews(
      {
        car: car._id,
      },
      "-__v",
      "car",
      "-__v -reviews"
    );

    res.send({ data: carReviews });
  } catch (error) {
    next(error);
  }
};

module.exports.getReview = async (req, res, next) => {
  try {
    const {
      params: { reviewId },
      car: { _id: carId },
    } = req;

    const review = await ReviewService.findReviews(
      {
        _id: reviewId,
        car: carId,
      },
      "-__v",
      "car",
      "-__v -reviews"
    );

    if (!review) {
      return next(createHttpError(404, "Review not found"));
    }

    res.send({ data: review });
  } catch (error) {
    next(error);
  }
};

module.exports.updateReview = async (req, res, next) => {
  try {
    const {
      car: { _id: carId },
      params: { reviewId },
      body,
    } = req;

    const updatedReview = await Review.findOneAndUpdate(
      {
        _id: reviewId,
        car: carId,
      },
      body,
      { new: true }
    );

    if (!updatedReview) {
      return next(createHttpError(404, "Review not found"));
    }

    res.send({ data: updatedReview });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteReview = async (req, res, next) => {
  try {
    const {
      car,
      params: { reviewId },
    } = req;

    const review = await Review.findOneAndDelete({
      _id: reviewId,
      car: car._id,
    });

    car.updateOne({ $pull: { reviews: reviewId } });

    if (!review) {
      return next(createHttpError(404, "Review not found"));
    }

    res.send({ data: review });
  } catch (error) {
    next(error);
  }
};

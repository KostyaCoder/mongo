const { Review } = require("../models");

module.exports.createReview = async ({ car, body }) => {
  const newReview = await Review.create({
    ...body,
    car: car._id,
  });

  await car.updateOne({ $push: { reviews: newReview._id } });

  return newReview;
};

module.exports.findReviews = async (
  filter,
  select,
  populate = "",
  populateSelect = ""
) => {
  const reviews = await Review.find(filter, select).populate(
    populate,
    populateSelect
  );

  return reviews;
};

module.exports.deleteReview = async ({ car, reviewId }) => {
  const review = await Review.findOneAndDelete({
    _id: reviewId,
    car: car._id,
  });

  if (!review) {
    return next(createHttpError(404, "Review not found"));
  }

  car.updateOne({ $pull: { reviews: reviewId } });

  return review;
};

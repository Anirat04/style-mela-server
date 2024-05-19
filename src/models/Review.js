const { model, Schema } = require("mongoose");

const reviewSchema = new Schema({
  reviewText: String,
  reviewerName: String,
  reviewerEmail: String,
  // reviewRating: data.rating,
  date: String,
});

const Review = model("Review", reviewSchema);

module.exports = Review;

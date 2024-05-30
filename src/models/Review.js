const { model, Schema } = require("mongoose");

const reviewSchema = new Schema({
  productID:String,
  reviewText: String,
  reviewerName: String,
  reviewerEmail: String,
  reviewRating: String,
  date: String,
});

const Review = model("Review", reviewSchema);

module.exports = Review;

const Review = require("../../../models/Review");

const allReviews = async (req, res) => {
  const result = await Review.find();
  res.send(result);
};

module.exports = allReviews;

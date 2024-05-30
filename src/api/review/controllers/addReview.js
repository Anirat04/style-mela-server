const Review = require("../../../models/Review");

const addReview = async (req, res) => {
  try {
    const {
      productID,
      reviewText,
      reviewerName,
      reviewerEmail,
      reviewRating,
      date,
    } = req.body.review;

    const review = new Review({
      productID,
      reviewText,
      reviewerName,
      reviewerEmail,
      reviewRating,
      date,
    });

    // const review = req.body.review;

    console.log(review);

    await review.save();

    // Send success response
    res.status(201).json({ message: "Review added successfully" });
  } catch (err) {
    console.error("Error saving Review data:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = addReview;

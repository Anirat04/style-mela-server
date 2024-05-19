const router = require("express").Router();
const { addReview, allReviews } = require("../../api/review");

// const { addReview } = require("../../api/review/addReview");
// const allReviews = require("../../api/review/allReviews");

router.post("/addReview", addReview);
router.get("/reviews", allReviews);

module.exports = router;

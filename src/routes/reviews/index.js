const { addReview, allReviews } = require("../../api/review/controllers");
const router = require("express").Router();

router.post("/addReview", addReview);
router.get("/reviews", allReviews);

module.exports = router;

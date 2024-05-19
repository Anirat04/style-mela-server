const router = require("express").Router();
const {
  getALLProducts,
  addProduct,
  getSingleProduct,
  addReview,
} = require("../../api/products/controllers");

router.get("/all-products", getALLProducts);
router.get("/single-product/:id", getSingleProduct);
router.post("/add-product", addProduct);
// router.post("/addReview", addReview);

module.exports = router;

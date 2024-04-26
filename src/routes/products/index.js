const router = require('express').Router()
const { getALLProducts, addProduct } = require('../../api/products/controllers');

router.get("/all-products", getALLProducts);
router.post("/add-product", addProduct);

module.exports = router;
const router = require('express').Router()
const { getALLProducts, postProduct } = require('../../api/products/controllers');

router.get("/allProperties", getALLProducts);
router.post("/markdown", postProduct);

module.exports = router;
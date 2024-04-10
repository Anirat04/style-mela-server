const router = require('express').Router()
const { getALLProducts } = require('../../api/products/controllers');

router.get("/allProperties", getALLProducts);

module.exports = router;
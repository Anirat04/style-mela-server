const Product = require("../../../models/Product");

const getALLProducts = async (req, res) => {
    const result = await Product.find();
    res.send(result);
}

module.exports = getALLProducts;
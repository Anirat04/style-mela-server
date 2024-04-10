const {Schema, model} = require('mongoose')

const ProductSchema = new Schema({
    productID : {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        default: ""
    },
    description: {
        type: String,
        default: "",
    }
})

const Product = model('Product', ProductSchema);

module.exports = Product;
const { Schema, model } = require('mongoose')

// Define the color schema
const colorSchema = new Schema({
    value: String,
    label: String,
    color: String
}, { _id: false }); // Exclude _id from color subdocuments

// Define the listing category schema
const categorySchema = new Schema({
    value: String,
    label: String
}, { _id: false }); // Exclude _id from category subdocuments

// Define the material schema
const materialSchema = new Schema({
    value: String,
    label: String
}, { _id: false }); // Exclude _id from material subdocuments

// Define the image schema
const imageSchema = new Schema({
    url: String,
    thumbnail: Boolean
}, { _id: false }); // Exclude _id from image subdocuments

// Define the main schema
const ProductSchema = new Schema({
    brand: {},
    colors: [colorSchema],
    description: String,
    discount: Number,
    images: [imageSchema],
    listingCategory: [categorySchema],
    materials: [materialSchema],
    price: Number,
    shortDescription: String,
    stockQuantity: Number,
    title: String
});

const Product = model('Product', ProductSchema);

module.exports = Product;
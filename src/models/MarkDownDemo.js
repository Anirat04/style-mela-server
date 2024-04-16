const { Schema, model } = require('mongoose');

// Define a Mongoose schema
const markdownSchema = new Schema({
    content: {
        type: String,
        required: true
    }
});

// Create a Mongoose model
const Markdown = model('Markdown', markdownSchema);

module.exports = Markdown;

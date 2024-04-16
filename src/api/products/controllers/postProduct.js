const Markdown = require('../../../models/MarkDownDemo')

const postProduct = async (req, res) => {
    try {
        // Extract Markdown content from request body
        const { content } = req.body;

        // Create a new Markdown document
        const markdown = new Markdown({ content });

        // Save Markdown document to the database
        await markdown.save();

        // Send success response
        res.status(201).json({ message: 'Markdown data saved successfully' });
    } catch (err) {
        console.error('Error saving Markdown data:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = postProduct;
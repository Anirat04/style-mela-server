// const Markdown = require('../../../models/MarkDownDemo')
const Product = require('../../../models/Product')

const addProduct = async (req, res) => {
    try {
        // Extract Product content from request body
        // const ProductData = req.body
        // console.log(ProductData);
        const { title, shortDescription, price, discount, stockQuantity, images, brand, colors, materials, listingCategory, description } = req.body.ProductData;
        // console.log('This is content', content);

        // const product = new Product({ ProductData });
        const product = new Product({
            title,
            shortDescription,
            price,
            discount,
            stockQuantity,
            images,
            brand,
            colors,
            materials,
            listingCategory,
            description
        });

        console.log(product);

        // console.log('This is Product', product);
        // Save Product document to the database
        // await product.save();
        await product.save()

        // Send success response
        res.status(201).json({ message: 'Product data saved successfully' });
    } catch (err) {
        console.error('Error saving Product data:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = addProduct;
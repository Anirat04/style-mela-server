const express = require('express');
const applyMiddleware = require('./middlewares/applyMiddleware');
const connectDB = require('./db/connectDB');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

// Routers
const productRoutes = require("./routes/products")


// Add Middleware
applyMiddleware(app)

app.use(productRoutes)


app.get('/health', (req, res) => {
    res.send('Server is running')
})


// Error Handling Starts
app.all("*", (req, res, next) => {
    const error = new Error(`The  Requested URL is invalid: ${req.url}`)
    error.status = 404
    next(error)
})

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message
    })
})
// Error Handling Ends

const main = async () => {
    await connectDB()
    app.listen(port, (req, res) => {
        console.log(`Server is running on ${port}`);
    })
}

main()
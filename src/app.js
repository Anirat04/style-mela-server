const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;



app.get('/health', (req, res) => {
    res.send('Server is running')
})

app.listen(port, (req, res) => {
    console.log(`Server is running on ${port}`);
})
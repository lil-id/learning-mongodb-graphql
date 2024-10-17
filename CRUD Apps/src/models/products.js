const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName: String,
    price: String,
    stock: String,
});

const product = mongoose.model('Product', productSchema);

module.exports = product;
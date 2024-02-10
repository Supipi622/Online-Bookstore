
// models/book.js
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    description: String,
    price: Number,
    coverImage: String,
    stock: Number,
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;


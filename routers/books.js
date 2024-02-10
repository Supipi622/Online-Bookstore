// routers/books.js
const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// Route to add a new book
router.post('/', bookController.addBook);

// Route to get the list of books
router.get('/', bookController.getBooks);

// Route to get a single book by ID
router.get('/:id', bookController.getBookById);

// Route to update a book
router.put('/:id', bookController.updateBook);

// Route to delete a book
router.delete('/:id', bookController.deleteBook);

module.exports = router;
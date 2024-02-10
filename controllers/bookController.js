// controllers/bookController.js
const Book = require('../models/book');

// Route to add a new book
exports.addBook = async (req, res) => {
    try {
        const {
            title,
            author,
            description,
            price,
            coverImage,
            stock
        } = req.body;

        const newBook = new Book({
            title,
            author,
            description,
            price,
            coverImage,
            stock,
        });

        await newBook.save();
        res.status(201).json({ message: 'Book added successfully' });
    } catch (error) {
        console.error(error);

        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Route to get a single book by ID
exports.getBookById = async (req, res) => {
    const { id } = req.params;
    try {
        const book = await Book.findById(id);
        if (!book) {
            return res.status(404).json({ error: 'Book not found' });
        }
        res.json(book);
    } catch (error) {
        console.error('Error fetching book:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Route to get the list of books
exports.getBooks = async (req, res) => {
    try {
        const books = await Book.find();
        console.log(books)
        res.json(books);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
    
};

// Route to update a book
exports.updateBook = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedBook = await Book.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedBook) {
            return res.status(404).json({ error: 'Book not found' });
        }
        res.json(updatedBook);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Route to delete a book
exports.deleteBook = async (req, res) => {
    const { id } = req.params;
    try {
        await Book.findByIdAndDelete(id);
        res.status(204).send(); // No content response
    } catch (error) {
        console.error('Error deleting book:', error);
        res.status(500).json({ error: 'Server error' });
    }
};

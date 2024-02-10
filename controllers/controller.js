
// const Book = require('../Server/models/Book');

// // Get all books
// const getBooks = async (req, res) => {
//   try {
//     const books = await Book.find();
//     res.json(books);
//   } catch (error) {
//     console.error('Error fetching books:', error);
//     res.status(500).json({ message: 'Server error' });
//   }
// };

// // Add a new book
// const addBook = async (req, res) => {
//   const { title, author, description, price, coverImage, stock } = req.body;
//   try {
//     const newBook = new Book({ title, author, description, price, coverImage, stock });
//     await newBook.save();
//     res.status(201).json(newBook);
//   } catch (error) {
//     console.error('Error adding book:', error);
//     res.status(500).json({ message: 'Server error' });
//   }
// };

// // Delete a book
// const deleteBook = async (req, res) => {
//   const { id } = req.params;
//   try {
//     await Book.findByIdAndDelete(id);
//     res.status(204).send(); // No content response
//   } catch (error) {
//     console.error('Error deleting book:', error);
//     res.status(500).json({ message: 'Server error' });
//   }
// };

// module.exports = { getBooks, addBook, deleteBook };

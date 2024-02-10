import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './EditBook.css';


const EditBook = ({ book, history }) => {
  
  const [formData, setFormData] = useState({
    title: book.title,
    author: book.author,
    description: book.description,
    price: book.price,
    coverImage: book.coverImage,
    stock: book.stock
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your logic to update the book goes here
    console.log('Book updated:', formData);
    // Redirect back to book details page
    history.push(`/book-details/${book.id}`);
  };

  return (
    <div className="edit-book-container">
      <h2>Edit Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Author:</label>
          <input type="text" name="author" value={formData.author} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea name="description" value={formData.description} onChange={handleChange}></textarea>
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input type="number" name="price" value={formData.price} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Cover Image URL:</label>
          <input type="text" name="coverImage" value={formData.coverImage} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Stock:</label>
          <input type="number" name="stock" value={formData.stock} onChange={handleChange} />
        </div>
        <button type="submit">Update Book</button>
        {/* Link to navigate back to the book details page */}
        <Link to={`/book-details/${book.id}`}>Cancel</Link>
      </form>
    </div>
  );
};

export default EditBook;

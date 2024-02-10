import React, { useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom'; // Import useHistory
import './EditBook.css';
import axios from 'axios';
import config from '../config.json';

const EditBook = () => {
  const { bookId } = useParams();
  const history = useHistory(); // Initialize useHistory here

  const [formData, setFormData] = useState({
    title: '',
    author: '',
    description: '',
    price: '',
    coverImage: '',
    stock: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${config.backEnd_server_url}/api/books/${bookId}`, formData);
      // Redirect back to book details page
      history.push(`/bookDetails/${bookId}`);
    } catch (error) {
      console.error('Error updating book:', error);
    }
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
        <Link to={`/bookDetails/${bookId}`}>Cancel</Link>
      </form>
    </div>
  );
};

export default EditBook;

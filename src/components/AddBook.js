import React, { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import "./AddBook.css"; // Import the CSS file
import axios from 'axios';
import config from '../config.json'

const AddBook = () => {
  const [bookDetails, setBookDetails] = useState({
    title: "",
    author: "",
    description: "",
    price: "",
    coverImage: "",
    stock: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookDetails({ ...bookDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send POST request to backend to add the new book
      await axios.post((`${config.backEnd_server_url}/api/books`), bookDetails);
      // Reset form fields
      setBookDetails({
        title: "",
        author: "",
        description: "",
        price: "",
        coverImage: "",
        stock: "",
      });
      // Optionally, show a success message or redirect the user
    } catch (error) {
      console.error('Error adding book:', error);
      // Handle error, show error message to user
    }
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Add New Book
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          name="title"
          label="Title"
          variant="outlined"
          fullWidth
          value={bookDetails.title}
          onChange={handleChange}
          required
        />
        <TextField
          name="author"
          label="Author"
          variant="outlined"
          fullWidth
          value={bookDetails.author}
          onChange={handleChange}
          required
        />
        <TextField
          name="description"
          label="Description"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          value={bookDetails.description}
          onChange={handleChange}
          required
        />
        <TextField
          name="price"
          label="Price"
          variant="outlined"
          fullWidth
          type="number"
          value={bookDetails.price}
          onChange={handleChange}
          required
        />
        <TextField
          name="coverImage"
          label="Cover Image URL"
          variant="outlined"
          fullWidth
          value={bookDetails.coverImage}
          onChange={handleChange}
          required
        />
        <TextField
          name="stock"
          label="Stock"
          variant="outlined"
          fullWidth
          type="number"
          value={bookDetails.stock}
          onChange={handleChange}
          required
        />
        <Button type="submit" variant="contained" color="primary" onClick={handleSubmit}>
          Add Book
        </Button>
      </form>
    </div>
  );
};

export default AddBook;


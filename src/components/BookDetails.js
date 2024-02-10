import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate} from "react-router-dom";
import "./BookDetails.css";
import config from '../config.json';
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const BookDetails = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(
          `${config.backEnd_server_url}/api/books/${bookId}`
        );
        setBook(response.data);
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    };

    if (bookId) {
      fetchBookDetails();
    }
  }, [bookId]);

  const handleDelete = async () => {
    try {
      await axios.delete(`${config.backEnd_server_url}/api/books/${bookId}`);
      navigate('/'); // Redirect to homepage after deletion
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  const handleClick = () => {
    navigate(`/editbook/${bookId}`); // Redirect to edit book page
  };

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div className="book-details-container">
      <div className="book-image-container">
        <img src={book.coverImage} alt={book.title} className="book-image" />
      </div>

      <div className="book-info">
        <h1 className="book-title">{book.title}</h1>
        <h2 className="book-author">{book.author}</h2>
        <p className="book-description">{book.description}</p>
        <p className="book-price">Price: ${book.price}</p>
        <p className="book-stock">Available Stock: {book.stock}</p>
        <div>
          <button onClick={handleDelete} className="delete-button">
            <DeleteIcon />
            Delete
          </button>
          <button onClick={handleClick} className="edit-button">
            <EditIcon />
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;

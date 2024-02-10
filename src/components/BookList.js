import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Booklist.css";
import config from '../config.json';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(`${config.backEnd_server_url}/api/books`);
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  const handleDetailsClick = (bookId) => {
    navigate(`/bookDetails/${bookId}`); // Pass bookId as part of the URL
  };

  return (
    <>
      <div className="services-container">
        <div className="text-container">
          <h1 className="best-books">Books List</h1>
        </div>

        <div className="grid-container">
          {books.map((book) => (
            <div key={book._id} className="service-card" data-aos="zoom-in">
              <div className="service-img-container">
                <img src={book.coverImage} alt="" className="service-img" />
              </div>

              <div className="service-details">              
                <h1 className="service-title">{book.title}</h1>
                <h2 className="service-author">{book.author}</h2>

                <button onClick={() => handleDetailsClick(book._id)} className="order-btn">Move Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BookList;

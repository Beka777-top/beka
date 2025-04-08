import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function BookGallery() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("https://67873274c4a42c916105d2fe.mockapi.io/api/onlineduken/books")
      .then((response) => setBooks(response.data))
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

  return (
    <div className="book-gallery">
      {books.map((book) => (
        <div className="book-card" key={book.id}>
          <img src={book.image} alt={book.title} />
          <h3>{book.title}</h3>
          <Link to={`/book/${book.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}
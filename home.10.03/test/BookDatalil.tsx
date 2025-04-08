import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios
      .get(`https://67873274c4a42c916105d2fe.mockapi.io/api/onlineduken/books/${id}`)
      .then((response) => setBook(response.data))
      .catch((error) => console.error("Error fetching book details:", error));
  }, [id]);

  if (!book) return <p>Loading...</p>;

  return (
    <div className="book-detail">
      <img src={book.image} alt={book.title} />
      <h2>{book.title}</h2>
      <p>{book.description}</p>
      <p>
        <strong>Author:</strong> {book.author}
      </p>
    </div>
  );
}
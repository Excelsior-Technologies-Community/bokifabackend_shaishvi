import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";

const Book = () => {
  const { id } = useParams();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const res = await API.get(`/books/category/${id}`);
      console.log(res.data);
      setBooks(res.data.books);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="my-5 ">
      <h1 className="text-center text-2xl font-bold">Category Books</h1>

      {books.map((book) => (
        <div key={book._id} className="max-w-6xl mx-auto space-y-3">
          <h2>{book.title}</h2>

          <img
            src={`http://localhost:5000${book.image}`}
            alt={book.title}
            width="150"
          />

          <p>{book.description}</p>
          <p>₹{book.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Book;
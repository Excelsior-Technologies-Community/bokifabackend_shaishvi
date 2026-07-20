import React from "react";
import { Link } from "react-router-dom";
import API from "../services/api";

const BookTable = ({ books, setBooks }) => {
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this book?",
    );

    if (!confirmDelete) return;

    try {
      await API.delete(`/books/${id}`);

      setBooks((prevBooks) => prevBooks.filter((book) => book._id !== id));

      alert("Book deleted successfully");
    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message || "Delete failed");
    }
  };

  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow">
      <table className="min-w-full">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="p-3">Image</th>
            <th className="p-3">Title</th>
            <th className="p-3">Author</th>
            <th className="p-3">Price</th>
            <th className="p-3">Stock</th>
            <th className="p-3">Category</th>
            <th className="p-3">Action</th>
          </tr>
        </thead>

        <tbody>
          {books.length === 0 ? (
            <tr>
              <td colSpan="7" className="text-center p-5">
                No Books Found
              </td>
            </tr>
          ) : (
            books.map((book) => (
              <tr key={book._id} className="border-b text-center">
                <td className="p-3">
                  <img
                    src={`http://localhost:5000${book.image}`}
                    alt={book.title}
                    className="w-16 h-20 object-cover mx-auto rounded"
                  />
                </td>

                <td>{book.title}</td>

                <td>{book.author}</td>

                <td>₹ {book.price}</td>

                <td>{book.stock}</td>

                <td>{book.category?.name}</td>

                <td className="space-x-2 flex  p-4 justify-center items-center">
                  <Link
                    to={`/books/edit/${book._id}`}
                    className="bg-green-600 text-white px-2 py-2 rounded hover:bg-green-700"
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() => handleDelete(book._id)}
                    className="bg-red-600 text-white px-2 py-2 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BookTable;

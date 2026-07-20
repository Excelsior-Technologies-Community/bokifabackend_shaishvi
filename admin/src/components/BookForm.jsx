import React from "react";

const BookForm = () => {
  return (
    <form className="space-y-4">

      <input
        type="text"
        placeholder="Book Name"
        className="w-full border p-3 rounded"
      />

      <input
        type="text"
        placeholder="Author"
        className="w-full border p-3 rounded"
      />

      <input
        type="number"
        placeholder="Price"
        className="w-full border p-3 rounded"
      />

      <button
        className="bg-blue-600 text-white px-6 py-3 rounded"
      >
        Save Book
      </button>

    </form>
  );
};

export default BookForm;    
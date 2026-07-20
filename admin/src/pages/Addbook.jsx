import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

const Addbook = () => {
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);

  const [book, setBook] = useState({
    title: "",
    author: "",
    price: "",
    description: "",
    stock: "",
    category: "",
  });

  const [image, setImage] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await API.get("/categories");

      console.log(res.data);

      setCategories(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("title", book.title);
    formData.append("author", book.author);
    formData.append("price", book.price);
    formData.append("description", book.description);
    formData.append("stock", book.stock);
    formData.append("category", book.category);

    if (image) {
      formData.append("image", image);
    }

    try {
      const response = await API.post("/books", formData);

      alert(response.data.message);

      setBook({
        title: "",
        author: "",
        price: "",
        description: "",
        stock: "",
        category: "",
      });

      setImage(null);

      navigate("/books");
    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">
      <h1 className="text-3xl font-bold mb-8">Add New Book</h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Title */}
        <input
          type="text"
          name="title"
          placeholder="Book Title"
          value={book.title}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
          required
        />

        {/* Author */}
        <input
          type="text"
          name="author"
          placeholder="Author Name"
          value={book.author}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
          required
        />

        {/* Price */}
        <input
          type="number"
          name="price"
          placeholder="Book Price"
          value={book.price}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
          required
        />

        {/* Stock */}
        <input
          type="number"
          name="stock"
          placeholder="Available Stock"
          value={book.stock}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        />

        {/* Category */}
        <select
          name="category"
          value={book.category}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        >
          <option value="">Select Category</option>

          {categories.map((category) => (
            <option key={category._id} value={category._id}>
              {category.name}
            </option>
          ))}
        </select>

        {/* Description */}
        <textarea
          rows="5"
          name="description"
          placeholder="Book Description"
          value={book.description}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        />

        {/* Image */}
        <input
          type="file"
          accept="image/*"
          onChange={handleImage}
          className="w-full border rounded-lg p-3"
        />

        {/* Preview */}
        {image && (
          <img
            src={URL.createObjectURL(image)}
            alt="Preview"
            className="w-40 h-52 object-cover rounded-lg border"
          />
        )}

        {/* Button */}
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default Addbook;

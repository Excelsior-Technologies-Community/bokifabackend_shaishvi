import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

const Addcategory = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/categories", { name });

      alert(res.data.message);

      setName("");

      navigate("/categories");
    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow">
      <h1 className="text-3xl font-bold mb-6">
        Add Category
      </h1>

      <form onSubmit={handleSubmit} className="space-y-5">

        <input
          type="text"
          placeholder="Enter Category Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border rounded-lg p-3"
          required
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Add Category
        </button>

      </form>
    </div>
  );
};

export default Addcategory;
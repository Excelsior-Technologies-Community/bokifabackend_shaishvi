import React from "react";
import { Link } from "react-router-dom";
import API from "../services/api";

const CategoryTable = ({ categories, setCategories }) => {

  const handleDelete = async (id) => {

    const confirmDelete = window.confirm(
      "Are you sure?"
    );

    if (!confirmDelete) return;

    try {

      await API.delete(`/categories/${id}`);

      setCategories((prev) =>
        prev.filter((cat) => cat._id !== id)
      );

      alert("Category Deleted");

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="overflow-x-auto bg-white shadow rounded-lg">

      <table className="min-w-full">

        <thead className="bg-slate-800 text-white">

          <tr>
            <th className="p-3">Category</th>
            <th className="p-3">Actions</th>
          </tr>

        </thead>

        <tbody>

          {categories.length === 0 ? (

            <tr>
              <td colSpan="2" className="text-center p-5">
                No Categories Found
              </td>
            </tr>

          ) : (

            categories.map((category) => (

              <tr
                key={category._id}
                className="border-b text-center"
              >

                <td className="p-3">
                  {category.name}
                </td>

                <td className="space-x-3">

                  <Link
                    to={`/categories/edit/${category._id}`}
                    className="bg-green-600 text-white px-4 py-2 rounded"
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() => handleDelete(category._id)}
                    className="bg-red-600 text-white px-4 py-2 rounded"
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

export default CategoryTable;
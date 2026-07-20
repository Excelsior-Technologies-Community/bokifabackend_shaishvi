import React from "react";

const CategoryForm = () => {
  return (
    <form>

      <input
        type="text"
        placeholder="Category Name"
        className="border w-full p-3 rounded"
      />

      <button
        className="mt-4 bg-blue-600 text-white px-6 py-3 rounded"
      >
        Save Category
      </button>

    </form>
  );
};

export default CategoryForm;
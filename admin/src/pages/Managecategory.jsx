import React, { useState, useEffect } from "react";
import API from "../services/api";
import CategoryTable from "../components/CategoryTable";

const Managecategory = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await API.get("/categories");
      setCategories(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Manage Categories</h1>
      <CategoryTable categories={categories} setCategories={setCategories} />
    </>
  );
};
export default Managecategory;

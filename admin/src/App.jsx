import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AdminLayout from "./Layouts/AdminLayout";
import Managebook from "./pages/Managebook";
import Addbook from "./pages/Addbook";
import Editbook from "./pages/Editbook";
import Managecategory from "./pages/Managecategory";
import Addcategory from "./pages/Addcategory";
import Editcategory from "./pages/Editcategory";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/books" element={<Managebook />} />
          <Route path="/books/add" element={<Addbook />} />
          <Route path="/books/edit/:id" element={<Editbook />} />
          <Route path="/categories" element={<Managecategory />} />
          <Route path="/categories/add" element={<Addcategory />} />
          <Route path="/categories/edit/:id" element={<Editcategory />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

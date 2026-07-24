import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-slate-900 text-white fixed left-0 top-0">
      <div className="text-2xl font-bold p-6 border-b border-slate-700">
        Admin Panel
      </div>

      <nav className="flex flex-col mt-5">
        <NavLink to="/dashboard" className="px-6 py-3 hover:bg-slate-800">
          Dashboard
        </NavLink>

        <NavLink to="/books" className="px-6 py-3 hover:bg-slate-800">
          Manage Books
        </NavLink>

        <NavLink to="/books/add" className="px-6 py-3 hover:bg-slate-800">
          Add Book
        </NavLink>

        <NavLink to="/categories" className="px-6 py-3 hover:bg-slate-800">
          Manage Category
        </NavLink>

        <NavLink to="/categories/add" className="px-6 py-3 hover:bg-slate-800">
          Add Category
        </NavLink>
        <NavLink to="/users" className="px-6 py-3 hover:bg-slate-800">
          Users
        </NavLink>
        <NavLink to="/orders" className="px-6 py-3 hover:bg-slate-800">
          Orders
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;

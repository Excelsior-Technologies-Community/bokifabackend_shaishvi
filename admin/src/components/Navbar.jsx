import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const handlelogout = () => {
    localStorage.removeItem("bearerToken");
    localStorage.removeItem("user");
  };

  return (
    <>
      <div className="flex justify-between items-center mb-6 bg-white shadow rounded-lg p-4">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="flex items-center gap-3 justify-between">
          <div className="flex items-center gap-1">
            <div className="w-10 h-10 rounded-full bg-blue-400 text-white flex items-center justify-center font-bold text-lg">
              {user?.firstName?.charAt(0).toUpperCase()}
            </div>

            <h3 className="font-semibold">
              {user?.firstName} {user?.lastName}
            </h3>
          </div>
          <div className=" border-2  px-3 py-1 rounded-full w-8 h-8 flex items-center justify-center text-white hover:bg-b;ue-700 hover:text-white">
            <Link to="/" onClick={handlelogout}>
              <span className="text-2xl">↩️</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

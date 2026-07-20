import React from "react";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="h-16 bg-white shadow flex justify-between items-center px-8">
      <h2 className="text-xl font-semibold">
        Dashboard
      </h2>

      <div>
        <span className="font-medium">
          {user?.name || "Admin"}
        </span>
      </div>
    </div>
  );
};

export default Navbar;
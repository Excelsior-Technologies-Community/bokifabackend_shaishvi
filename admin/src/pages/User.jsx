import React, { use } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import API from "../services/api";

const User = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await API.get("/auth/users");
      console.log("API Response:", res.data);
      setUsers(res.data.user);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  return (
    <>
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Users Management</h1>

          <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg">
            Total Users: {users.length}
          </div>
        </div>

        <input
          type="text"
          placeholder="Search users..."
          className="w-full border rounded-lg px-4 py-2 mb-5"
        />

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Role</th>
                <th className="p-3 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr key={user._id} className="border-b hover:bg-gray-50">
                  <td className="p-3">
                    {user.firstName} {user.lastName}
                  </td>

                  <td className="p-3">{user.email}</td>

                  <td className="p-3">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                      {user.role}
                    </span>
                  </td>

                  <td className="p-3 text-center">
                    <button className="text-blue-600 mr-4">Edit</button>

                    <button className="text-red-600">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default User;

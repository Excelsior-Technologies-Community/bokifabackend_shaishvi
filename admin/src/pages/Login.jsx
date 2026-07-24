import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login({}) {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [forgotPassword, setForgotPassword] = useState(false);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    console.log("Submit button clicked! sending to backend...", credentials);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login", // POST API Call
        credentials,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      console.log("Backend response received:", response.data);
      
      if (response.data.user.role !== "admin") {
        alert("Access denied! Please login with admin credentials");
        return;
      }
      localStorage.setItem("bearerToken", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      navigate("/dashboard");
    } catch (error) {
      console.error("Axios Error Details:", error.response || error);
      alert(
        error.response?.data?.message || "Access denied! Invalid credentials",
      );
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-r from-slate-900 via-blue-900 to-indigo-700 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        {forgotPassword ? (
          <>
            <h2 className="text-3xl font-bold text-center mb-2">
              Forgot Password
            </h2>
            <p className="text-gray-500 text-center mb-6">
              Enter your email to reset your password.
            </p>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg transition"
              >
                Reset Password
              </button>
            </form>
            <button
              onClick={() => setForgotPassword(false)}
              className="mt-5 text-blue-700 font-medium hover:underline"
            >
              ← Back to Login
            </button>
          </>
        ) : (
          <>
            <h2 className="text-3xl font-bold text-center mb-2">
              Welcome Back
            </h2>
            <p className="text-gray-500 text-center mb-6">
              Login to your account
            </p>

            <form onSubmit={handleLoginSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  name="email"
                  value={credentials.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Password
                </label>
                <input
                  name="password"
                  value={credentials.password}
                  onChange={handleChange}
                  type="password"
                  placeholder="Enter your password"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setForgotPassword(true)}
                  className="text-blue-700 hover:underline text-sm"
                >
                  Forgot Password?
                </button>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg transition"
              >
                Login
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;

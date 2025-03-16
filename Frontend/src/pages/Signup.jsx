import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user"); // Default role: User
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // ✅ Function to validate email format
  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  // ✅ Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Basic validation
    if (!name || !email || !password) {
      toast.error("All fields are required!", { position: "top-right" });
      return;
    }

    if (!isValidEmail(email)) {
      toast.error("Invalid email format!", { position: "top-right" });
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:1000/api/auth/register",
        {
          name,
          email,
          password,
          isAdmin: role === "admin", // ✅ Set role as admin if selected
        }
      );

      if (response.data.success) {
        toast.success("User registered successfully!", {
          position: "top-right",
        });
        setTimeout(() => navigate("/Login"), 2000);
      } else {
        toast.error(response.data.message || "Registration failed!", {
          position: "top-right",
        });
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Failed to register. Try again!";
      toast.error(errorMessage, { position: "top-right" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen 
    bg-gradient-to-r from-blue-500 bg-green-400 shadow-xl text-white">
      <ToastContainer />
      <div className="bg-gradient-to-r from-teal-500 bg-[#284cb0] shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Signup</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block font-medium">
              Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter Name"
              required
              className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-medium">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter Email"
              required
              className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
          </div>

          <div>
            <label htmlFor="password" className="block font-medium">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="**"
              required
              className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
          </div>

          {/* ✅ Role Selection */}
          <div>
            <label htmlFor="role" className="block font-medium">
              Role
            </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full text-white py-3 rounded-md transition duration-300 ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-yellow-500 hover:bg-yellow-500"
            }`}
          >
            {loading ? "Signing up..." : "Signup"}
          </button>
        </form>

        <p className="text-center text-yellow-500 mt-4">
          Already have an account?{" "}
          <Link to="/Login" className="text-white hover:underline text-lg">
            Login
          </Link>
        </p>
        <hr className="bg-gray-300 mt-5" />
      </div>
    </div>
  );
}

export default Signup;
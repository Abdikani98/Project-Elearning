
// import Header from "../components/Header";
// import axios from "axios";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// function Login() {
//   const [Username, setUserName] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = (event) => {
//     event.preventDefault();

//     axios
//       .post("http://localhost:1000/Create/Login", {
//         userName: Username,
//         Password: password,
//       })
//       .then((response) => {
//         if (response) {
//           toast.success("Login Successful", {
//             position: "top-center",
//             autoClose: 3000,
//             hideProgressBar: false,
//           });
//           setTimeout(() => navigate("/Dashboard"), 3000); // Delay navigation until toast disappears
//         } else {
//           toast.error("Username or password incorrect", {
//             position: "top-center",
//             autoClose: 3000,
//             hideProgressBar: false,
//           });
//         }
//       }).catch((error) => {
//         toast.error("Login failed. Please try again.", {
//           position: "top-center",
//           autoClose: 3000,
//           hideProgressBar: false,
//         });
//         console.log(error);
//       });
//   };

//   return ( <>
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-green-400 p-4">
//       <div className="bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-2xl w-full max-w-sm transform transition duration-500 hover:scale-105">
//         <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-800 dark:text-white">Login</h2>
        
//         <input
//           value={Username}
//           onChange={(event) => setUserName(event.target.value)}
//           type="text"
//           placeholder="Username"
//           className="bg-gray-100 p-3 mb-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 transition duration-300"
//         />
        
//         <input
//           value={password}
//           onChange={(event) => setPassword(event.target.value)}
//           type="password"
//           placeholder="Password"
//           className="bg-gray-100 p-3 mb-6 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-500 transition duration-300"
//         />

//         <button
//           onClick={handleLogin}
//           className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg w-full transition duration-300 shadow-lg"
//         >
//           Submit
//         </button>
//       </div>
//     </div>
//     <ToastContainer />
//   </>
//   );
// }

// export default Login;





import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../components/ContextProvide";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS
// import imge from "../images/p-1-png";  // Uncomment if needed

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:1000/api/auth/login",
        { email, password }
      );

      if (response.data.success) {
        toast.success("Login successful!", { position: "top-right" });
        login(response.data.user);
        localStorage.setItem("token", response.data.token);
        setTimeout(() => navigate("/dashboard"), 2000); // Redirect after success
      }
    } catch (error) {
      toast.error("Invalid email or password. Try again!", {
        position: "top-right",
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen
     bg-gradient-to-r from-blue-500 bg-green-400 shadow-xl">
      
      <ToastContainer /> {/* ✅ Toast container for notifications */}
      <div className="bg-gradient-to-r from-teal-500 bg-[#2850bd] shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-white mb-6">
          Login
        </h2>

        <form className="space-y-4 " onSubmit={handleSubmit}>
          <div className="relative">
            <label htmlFor="email" className="block text-white font-medium">
              Email
            </label>
            <i className="fa-solid fa-envelope absolute text-xl text-gray-400 top-[50px] transform -translate-y-1/2 left-3 mt-1"></i>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter Email"
              required
              className="w-full mt-1 py-3 p-4 px-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="relative">
            <label
              htmlFor="password"
              className="block text-white font-medium"
            >
              Password
            </label>
            <i className="fa-solid fa-unlock absolute text-gray-400 top-[50px] transform -translate-y-1/2 left-3"></i>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="**"
              required
              className="w-full mt-1 p-3 px-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-3 rounded-md
             hover:bg-yellow-500 transition duration-300 "
          >
            Login
          </button>
        </form>

        <p className="text-center text-white mt-4">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-yellow-500 hover:underline text-lg"
          >
            Register
          </Link>
        </p>
        <hr className="bg-gray-300 mt-5" />
      </div>
    </div>
  );
}

export default Login;

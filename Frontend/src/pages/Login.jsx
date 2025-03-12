
import Header from "../components/Header";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';


function Login() {
  const [Username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:1000/Create/Login", {
        userName: Username,
        Password: password,
      })
      .then((response) => {
        if (response) {
          // alert("Login successfully");
          toast("login Success", {
            position: "top-center",
            
            autoClose: 3000,
            hideProgressBar: false,
        })
          navigate("/Dashboard");
        } else {
          alert("Username or password incorrect");
        }
      }).catch((error) => console.log(error));
  };

  return ( <>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-green-400 p-4">
      <div className="bg-white  dark:bg-gray-800 p-10 rounded-2xl shadow-2xl w-full max-w-sm transform transition duration-500 hover:scale-20">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-800 dark:text-white">Login</h2>
        
        <input
          value={Username}
          onChange={(event) => setUserName(event.target.value)}
          type="text"
          placeholder="Username"
          className="bg-gray-100 p-3 mb-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 transition duration-300"
        />
        
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          type="password"
          placeholder="Password"
          className="bg-gray-100 p-3 mb-6 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-500 transition duration-300"
        />

        <button
          onClick={handleLogin}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg w-full transition duration-300 shadow-lg"
        >
          Submit
        </button>
      </div>
    </div>
    <ToastContainer />
  </>

  );
}

export default Login;

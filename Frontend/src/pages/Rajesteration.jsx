
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

function Registration() {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Phone, setPhone] = useState('');
  const [Adress, setAdress] = useState('');
  const [Date, setDate] = useState('');
  const [userName, setuserName] = useState('');
  const [Password, setPassword] = useState('');

  const handleRegister = (event) => {
    event.preventDefault();
    
    axios.post("http://localhost:1000/Create/Registration", {
      Name,
      Email,
      Phone,
      Adress,
      Date,
      userName,
      Password,
    })
    .then(() => {
      toast("Data has been Saved", {
            position: "top-center",
                      
            autoClose: 3000,
             hideProgressBar: false
       })
    }).catch((error) => console.log(error));
  };

  return (<>
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-r from-green-400 to-blue-500 text-black dark:text-white">
      <Header />
      <div className="flex items-center justify-center pt-20 mb-16">
        <div className="bg-white dark:bg-gray-800 px-8 py-6 rounded-2xl shadow-2xl w-[500px] transform transition duration-500 hover:scale-105">
          <h2 className="text-4xl font-bold my-4 text-center text-gray-800 dark:text-white">Registration</h2>
          <form onSubmit={handleRegister}>
            <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" className="bg-gray-100 dark:bg-gray-700 p-3 mb-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-500 dark:placeholder-gray-300" required />
            <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" className="bg-gray-100 dark:bg-gray-700 p-3 mb-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-500 dark:placeholder-gray-300" required />
            <input onChange={(e) => setPhone(e.target.value)} type="text" placeholder="Phone" className="bg-gray-100 dark:bg-gray-700 p-3 mb-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-500 dark:placeholder-gray-300" required />
            <input onChange={(e) => setAdress(e.target.value)} type="text" placeholder="Address" className="bg-gray-100 dark:bg-gray-700 p-3 mb-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-500 dark:placeholder-gray-300" required />
            <input onChange={(e) => setDate(e.target.value)} type="date" className="bg-gray-100 dark:bg-gray-700 p-3 mb-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400" required />
            <input onChange={(e) => setuserName(e.target.value)} type="text" placeholder="Username" className="bg-gray-100 dark:bg-gray-700 p-3 mb-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-500 dark:placeholder-gray-300" required />
            <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" className="bg-gray-100 dark:bg-gray-700 p-3 mb-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-500 dark:placeholder-gray-300" required />
            <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg w-full transition duration-300 shadow-lg">Submit</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
    <ToastContainer />
  </>

  );
}

export default Registration;



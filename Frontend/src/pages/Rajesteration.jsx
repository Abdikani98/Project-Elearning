import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import axios from "axios";
import { toast, Toaster } from 'react-hot-toast';

function Rajesteration() {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Phone, setPhone] = useState('');
  const [Date, setDate] = useState('');
  const [Adress, setAdress] = useState('');
  const [userName, setuserName] = useState('');
  const [Password, setPassword] = useState('');

  const handleRegister = (event) => {
    event.preventDefault();
    
    axios.post("http://localhost:1000/creatRejester", {
      Name,
      Email,
      Phone,
      Date,
      Adress,
      userName,
      Password,
    })
    .then(() => {
      toast.success("Data has been saved");
    })
    .catch((error) => console.log(error));
  };

  return (
    <div className=" dark:bg-gray-900 text-black dark:text-primryColor">
      <Header />
      <Toaster />
      <div className="flex items-center justify-center pt-28 mb-24">
        <div className="bg-primryColor px-8 py-6 rounded-lg shadow-2xl w-[500px]">
          <h2 className="text-4xl font-bold my-4 text-center text-white">Registration</h2>
          <form onSubmit={handleRegister}>
            <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" className="bg-white p-3 mb-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-500" required />
            <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" className="bg-white p-3 mb-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-500" required />
            <input onChange={(e) => setPhone(e.target.value)} type="text" placeholder="Phone" className="bg-white p-3 mb-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-500" required />
            <input onChange={(e) => setAdress(e.target.value)} type="text" placeholder="Address" className="bg-white p-3 mb-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-500" required />
            <input onChange={(e) => setDate(e.target.value)} type="date" className="bg-white p-3 mb-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-500" required />
            <input onChange={(e) => setuserName(e.target.value)} type="text" placeholder="Username" className="bg-white p-3 mb-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-500" required />
            <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" className="bg-white p-3 mb-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-500" required />
            <button type="submit" className="bg-white hover:bg-green-300 text-primryColor font-bold py-3 px-6 rounded-lg w-full transition duration-300 shadow-lg">Submit</button>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Rajesteration;

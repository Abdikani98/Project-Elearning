import Header from "../components/Header";
import axios from "axios"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function login(){

    const [Username, setUserName] = useState("")
   const [password, setPassword] = useState("")

   const navigate = useNavigate()

   const handleLogin = (event)=>{
   
    event.preventDefault()

    axios.post("http://localhost:1000/Create/Login", {
      "userName": Username,
      "Password":password
    }).then((response)=>{
      if(response){
        alert("login successfully")
        navigate("/Dashboard")
      }
      else{
        alert("username or passwerd incorrect")
      }
    })
   }
    return (<div>
    {/* <Header/> */}
        <div className="fixed inset-0  flex items-center justify-center">
      <div className="bg-primryColor  p-10 rounded-lg shadow-2xl w-full max-w-sm relative">
      
        <h2 className="text-4xl font-bold mb-8 text-center text-white">Login</h2>
        
        <input value={Username} onChange={(event)=> setUserName(event.target.value)} type="text" placeholder="Username" className="bg-white p-3 mb-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-500 transition duration-300"/>
        
        <input value={password} onChange={(event)=> setPassword(event.target.value)} type="password" placeholder="Password" className="bg-white p-3 mb-6 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder-gray-500 transition duration-300"/>
          <button onClick={handleLogin} className="bg-white  hover:bg-green-300 hover:text-white text-primryColor font-bold py-3 px-6 rounded-lg w-full transition duration-300 shadow-lg">Submit</button>
      </div>
    </div>
    </div>
  );
}

export default login
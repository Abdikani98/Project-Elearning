import {Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Rajesteration from "./pages/Rajesteration"
import AllStudent from "./pages/AllStudent"
import Dashboard from "./pages/Dashboard"
import Message from "./pages/Message"
import Contact from "./pages/Contect"
import About from "./pages/About"
import Course from "./pages/Course"
import Blog from "./pages/Blog"
import Lecture from "./pages/Lecture"
import Signup from "./pages/Signup"





function App(){
    return (
        <Routes>
            <Route path="/"element={<Home/>}/>
            <Route path="/Contact"element={<Contact/>}/>
            <Route path="/About"element={<About/>}/>
            <Route path="/"element={<About/>}/>
            <Route path="/Course"element={<Course/>}/>
            <Route path="/Blog"element={<Blog/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Rajesteration" element={<Rajesteration/>}/>
            <Route path="/AllStudent" element={<AllStudent/>}/>
            <Route path="/Dashboard" element={<Dashboard/>}/>
            <Route path="/Message" element={<Message/>}/>
            <Route path="/Lecture" element={<Lecture/>}/>
            <Route path="/register" element={<Signup/>}/>
            
            
            




        </Routes>
    )
}

export default App

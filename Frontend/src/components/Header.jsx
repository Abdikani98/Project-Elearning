import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Header() {
    const [open, setOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");
    const navigate = useNavigate();

    // Function toggle Dark Mode
    const toggleDarkMode = () => {
        if (darkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
        setDarkMode(!darkMode);
    };

    // Waxaa hubinaya theme-ka markii page-ka la furto
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    return (
        <div className="w-full">
            {/* Header Section */}
            <div className="bg-white dark:bg-gray-900 text-black dark:text-white w-full h-[60px] shadow-md flex items-center justify-between px-6 fixed top-0 left-0 right-0 z-50">
                {/* Logo */}
                <h1 className="text-red-600 dark:text-red-400 font-bold text-lg">Logo</h1>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    <div className="border-2 border-gray-200 dark:border-gray-700 rounded-lg px-3 py-1 flex items-center">
                        <i className="fa-solid fa-magnifying-glass text-gray-500"></i>
                        <input className="ml-2 bg-transparent text-black dark:text-white focus:outline-none" type="text" placeholder="Search..." />
                    </div>

                    <ul className="flex space-x-6 text-lg">
                        <li onClick={() => navigate('/')} className="hover:text-blue-700 cursor-pointer">Home</li>
                        <li onClick={() => navigate('/about')} className="cursor-pointer hover:text-blue-700">About</li>
                        <li onClick={() => navigate('/course')} className="cursor-pointer hover:text-blue-700">Course</li>
                        <li onClick={() => navigate('/contact')} className="cursor-pointer hover:text-blue-700">Contact</li>
                        <li onClick={() => navigate('/Blog')} className="cursor-pointer hover:text-blue-700">Blogs</li>

                    </ul>

                    <div className="flex items-center space-x-4">
                        <Link to="/Rajesteration">
                            <button className="bg-primryColor hover:bg-blue-700 text-white px-4 py-2 rounded-lg">Create Account</button>
                        </Link>
                        <Link to="/Login">
                            <i className="fa-solid fa-user text-primryColor text-2xl cursor-pointer"></i>
                        </Link>
                    </div>
                </div>

                {/* Dark Mode Toggle */}
                <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300 w-10 h-10 flex items-center justify-center">
                    <i className={`fa-solid ${darkMode ? "fa-sun text-yellow-400" : "fa-moon text-gray-800 dark:text-white"} text-2xl`}></i>
                </button>

                {/* Mobile Menu Icon */}
                <i onClick={() => setOpen(!open)} className="fa-solid fa-bars text-2xl md:hidden cursor-pointer"></i>
            </div>

            {/* Mobile Menu */}
            <div className={`fixed top-0 left-0 w-full h-screen bg-white dark:bg-gray-900 dark:text-white transition-transform duration-300 transform ${open ? "translate-x-0" : "-translate-x-full"} z-40 md:hidden`}>
                <div className="p-6 flex flex-col h-full">
                    {/* Close Icon */}
                    <i onClick={() => setOpen(false)} className="fa-solid fa-x text-3xl cursor-pointer self-end"></i>

                    <ul className="flex flex-col gap-6 text-xl mt-8">
                        <li onClick={() => { navigate('/'); setOpen(false); }} className="hover:text-blue-700 cursor-pointer">Home</li>
                        <li onClick={() => { navigate('/about'); setOpen(false); }} className="cursor-pointer hover:text-blue-700">About</li>
                        <li onClick={() => { navigate('/course'); setOpen(false); }} className="cursor-pointer hover:text-blue-700">Course</li>
                        <li onClick={() => { navigate('/contact'); setOpen(false); }} className="cursor-pointer hover:text-blue-700">Contact</li>
                        <li onClick={() => {navigate('/Blog'); setOpen(false); }} className="cursor-pointer hover:text-blue-700">Blogs</li>

                    </ul>

                    <div className="flex flex-col gap-4 mt-6">
                        <Link to="/Rajesteration">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white w-full rounded-lg py-2">Create Account</button>
                        </Link>
                        <Link to="/Login">
                            <button className="bg-gray-700 hover:bg-gray-800 text-white w-full rounded-lg py-2">Login</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;

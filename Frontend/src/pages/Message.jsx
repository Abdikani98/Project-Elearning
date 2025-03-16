import React, { useState, useEffect } from "react";
import Sidenav from "../components/SideNav";
import { Link } from "react-router-dom";
import axios from "axios";

function Message() {
    const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");
    const [messages, setMessages] = useState([]);

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

    // Fetch messages from backend
    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const response = await axios.get("http://localhost:1000/read/Content");
                setMessages(response.data);
            } catch (error) {
                console.error("Error fetching messages:", error);
            }
        };
        fetchMessages();
    }, []);

    // Delete message function
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:1000/delete/Content/${id}`);
            setMessages(messages.filter((msg) => msg._id !== id)); // Remove deleted message from state
        } catch (error) {
            console.error("Error deleting message:", error);
        }
    };

    return (
        <div className="dark:bg-gray-900 text-black h-screen dark:text-white">
            <Sidenav />
            <div className="flex">
                <button onClick={toggleDarkMode} className="p-2 ml-[90%] rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300 w-10 h-10 flex items-center justify-center">
                    <i className={`fa-solid ${darkMode ? "fa-sun text-yellow-400" : "fa-moon text-gray-800 dark:text-white"} text-2xl`}></i>
                </button>
                <Link to="/">
                    <i className="fa-solid fa-user text-primryColor text-2xl ml-[90%] cursor-pointer"></i>
                </Link>
            </div>

            <div className="items-center ml-32 pt-32">
                <h1 className="text-center text-4xl font-semibold text-primryColor mb-12 dark:text-white">
                    Comments
                </h1>

                <div className="flex justify-center gap-20 flex-wrap">
                    {messages.length > 0 ? (
                        messages.map((msg) => (
                            <div key={msg._id} className="bg-white w-[600px] shadow-xl rounded-3xl p-8 space-y-6 transform transition duration-300 hover:scale-105">
                                <h1 className="text-2xl text-blue-700 font-bold">{msg.Name}</h1>
                                <p className="text-lg text-gray-700">{msg.Email}</p>
                                <hr className="border-2 border-gray-300" />
                                <p className="text-2xl text-center dark:text-gray-800 font-bold">{msg.Message}</p>
                                <p className="text-gray-600 line-clamp-3 overflow-hidden text-ellipsis"> </p>
                                <div className="flex justify-end gap-4">
                                    <button 
                                        onClick={() => handleDelete(msg._id)}
                                        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
                                    > Delete</button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500">No messages found</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Message;
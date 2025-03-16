import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";  // ✅ Xusuusnow inaad stylesheet ka Toastify import gareyso!

function Contact() {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Message: ""
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post("http://localhost:1000/Create/Content", formData);
      toast.success("Message sent successfully!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
      });
      setFormData({ Name: "", Email: "", Message: "" });
    } catch (error) {
      toast.error("Failed to send message. Please try again.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
      });
    }

    setLoading(false);
  };

  return (
    <div>
      <Header />
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-500 to-green-400 p-6 dark:bg-gray-900 text-black dark:text-white">
        <div className="bg-white mt-16 dark:bg-gray-800 p-10 rounded-2xl shadow-2xl max-w-4xl w-full grid md:grid-cols-2 gap-8 transform transition duration-500 hover:scale-105 relative">
          {/* Left Side - Contact Form */}
          <div>
            <h2 className="text-green-600 text-2xl font-bold text-center mb-4">CONTACT US</h2>
            <p className="text-gray-600 dark:text-white mb-4 text-center">We'd love to hear from you!</p> 
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="Name"
                placeholder="Your Name"
                value={formData.Name}
                onChange={handleChange}
                className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                required
              />
              <input
                type="email"
                name="Email"
                placeholder="Email Address"
                value={formData.Email}
                onChange={handleChange}
                className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm"
                required
              />
              <textarea
                name="Message"
                placeholder="Your Message"
                rows="4"
                value={formData.Message}
                onChange={handleChange}
                className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-lg"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Right Side - Contact Info */}
          <div className="text-gray-700 dark:text-white space-y-4 text-center">
          <h3 className="text-2xl font-extrabold text-blue-600 dark:text-blue-400 mb-2">LevelUp Academy</h3>
    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">B 37/3 Ground Floor Double<br />Story, Ramesh Nagar, Near Raja Garden<br />Chowk, Delhi: 110015</p>
    <p className="text-gray-800 dark:text-gray-200 mt-2"><strong>Phone:</strong> <span className="text-green-600 dark:text-green-400">+252619635315</span></p>
    <p className="text-gray-800 dark:text-gray-200 mt-1"><strong>Email:</strong> <span className="text-blue-500 dark:text-blue-300">abdikanishaarib@gmail.com</span></p>
            {/* Social Media Icons */}
            <div className="flex justify-center space-x-4 text-2xl">
              <a href="#" className="text-gray-600 hover:text-blue-500"><i className="fab fa-youtube"></i></a>
              <a href="#" className="text-gray-600 hover:text-blue-500"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-gray-600 hover:text-blue-500"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-gray-600 hover:text-blue-500"><i className="fab fa-twitter"></i></a>
            </div>
            {/* Embedded Google Map */}
            <iframe
              className="w-full h-48 border rounded-lg shadow-sm"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31104.034623580306!2d77.1203751!3d28.6520248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04d8b85b6a5d%3A0xceb35e3f6f8f77eb!2sRamesh%20Nagar%2C%20New%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sng!4v1649123456789!5m2!1sen!2sng"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
      {/* Toast Notification Container */}
      <ToastContainer />
    </div>
  );
}

export default Contact;

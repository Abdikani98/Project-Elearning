// import React from "react";
// import Header from "../components/Header";
// import Footer from "../components/Footer";

// function Contact(){
//   return ( <div className="">
//      <Header/>
//     <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4 mt-10 dark:bg-gray-900 text-black dark:text-white">
//       <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl w-full grid md:grid-cols-2 gap-6">
//         {/* Left Side - Contact Form */}
//         <div>
//           <h2 className="text-green-600 text-xl font-semibold text-center mb-4">CONTACT US</h2>
//           <p className="text-gray-700 mb-4">Leave us a message</p>
//           <form className="space-y-4">
//             <input
//               type="text"
//               placeholder="Name"
//               className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//             />
//             <input
//               type="email"
//               placeholder="Email Address"
//               className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primryColor"
//             />
//             <textarea
//               placeholder="Your Message"
//               rows="4"
//               className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primryColor"
//             ></textarea>
//             <button
//               type="submit"
//               className="w-full bg-primryColor text-white py-3 rounded-md hover:bg-prring-primryColor transition"
//             >
//               Send
//             </button>
//           </form>
//         </div>
        
//         {/* Right Side - Contact Info */}
//         <div className="text-gray-700 space-y-4">
//           <h3 className="text-lg font-semibold">Weekend UX</h3>
//           <p>B 37/3 Ground Floor Double<br/>Story, Ramesh Nagar, Near Raja Garden<br/>Chowk, Delhi: 110015</p>
//           <p><strong>Phone:</strong> +91 9599272754</p>
//           <p><strong>Email:</strong> hello@info.com.ng</p>
          
//           {/* Social Media Icons */}
//           <div className="flex space-x-4 text-xl">
//             <a href="#" className="text-gray-600 hover:text-primryColor"><i className="fab fa-youtube"></i></a>
//             <a href="#" className="text-gray-600 hover:text-primryColor"><i className="fab fa-facebook"></i></a>
//             <a href="#" className="text-gray-600 hover:text-primryColor"><i className="fab fa-instagram"></i></a>
//             <a href="#" className="text-gray-600 hover:text-primryColor"><i className="fab fa-twitter"></i></a>
//           </div>
          
//           {/* Embedded Google Map */}
//           <iframe
//             className="w-full h-40 border rounded-md"
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31104.034623580306!2d77.1203751!3d28.6520248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04d8b85b6a5d%3A0xceb35e3f6f8f77eb!2sRamesh%20Nagar%2C%20New%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sng!4v1649123456789!5m2!1sen!2sng"
//             allowFullScreen=""
//             loading="lazy"
//           ></iframe>
//         </div>
//       </div>
//     </div>
//     <Footer/>
//     </div>
//   );
// };

// export default Contact;



import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Contact() {
  return (
    <div>
      <Header />
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-500 to-green-400 p-6 dark:bg-gray-900 text-black dark:text-white">
        <div className="bg-white mt-16 dark:bg-gray-800 p-10 rounded-2xl shadow-2xl max-w-4xl w-full grid md:grid-cols-2 gap-8 transform transition duration-500 hover:scale-105">
          {/* Left Side - Contact Form */}
          <div>
            <h2 className="text-green-600 text-2xl font-bold text-center mb-4">CONTACT US</h2>
            <p className="text-gray-600 dark:text-white mb-4 text-center">We'd love to hear from you!</p> 
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
          
          {/* Right Side - Contact Info */}
          <div className="text-gray-700 dark:text-white space-y-4 text-center">
            <h3 className="text-lg font-bold text-gray-800">Weekend UX</h3>
            <p>B 37/3 Ground Floor Double<br />Story, Ramesh Nagar, Near Raja Garden<br />Chowk, Delhi: 110015</p>
            <p><strong>Phone:</strong> +91 9599272754</p>
            <p><strong>Email:</strong> hello@info.com.ng</p>
            
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
    </div>
  );
}

export default Contact;

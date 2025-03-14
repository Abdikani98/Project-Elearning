// import React from "react";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import { NavLink } from "react-router-dom";

// const blogPosts = [
//   {
//     title: "Understanding React Hooks",
//     description: "An in-depth guide to React Hooks and how to use them effectively.",
//     image: "https://i.pinimg.com/474x/28/24/0c/28240c893edc222573590a70b91735e8.jpg",
//   },
//   {
//     title: "The Future of Web Development",
//     description: "Trends and technologies shaping the future of web development.",
//     image: "https://i.pinimg.com/474x/cb/3c/ef/cb3cefbcba842dc7a34c0dfafcf38858.jpg",
//   },
//   {
//     title: "SEO Strategies for 2025",
//     description: "Boost your website ranking with these SEO techniques.",
//     image: "https://i.pinimg.com/474x/5e/07/c8/5e07c8d32d8ffd53efb1ba6225120746.jpg",
//   },
//   {
//     title: "Mastering UI/UX Design",
//     description: "Tips and best practices for designing user-friendly interfaces.",
//     image: "https://i.pinimg.com/474x/9d/67/28/9d6728c5006f290836bc4fe2e679649b.jpg",
//   }
// ];

// function Blog() {
//   return (
//     <div>
//       <Header />
//       <div className="min-h-screen bg-gray-100 p-6 py-24 dark:bg-gray-900 text-black dark:text-primryColor">
//         <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-lg">
//           <h1 className="text-3xl font-bold text-center text-primryColor mb-6">Latest Blog Posts</h1>
//           <div className="space-y-6">
//             {blogPosts.map((post, index) => (
//               <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-md flex flex-col md:flex-row gap-4">
//                 <img
//                   src={post.image}
//                   alt={post.title}
//                   className="w-full md:w-1/3 h-40 object-cover rounded-lg"
//                 />
//                 <div className="flex-1">
//                   <h3 className="text-xl font-semibold">{post.title}</h3>
//                   <p className="text-gray-600">{post.description}</p>
//                   <NavLink to="/Blogs"><button className="mt-3 bg-primryColor text-white py-2 px-4 rounded-lg">
//                     Read More
//                   </button></NavLink>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default Blog;

import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const blogPosts = [
  {
    title: "Understanding React Hooks",
    description: "An in-depth guide to React Hooks and how to use them effectively.",
    image: "https://i.pinimg.com/474x/28/24/0c/28240c893edc222573590a70b91735e8.jpg",
    fullText: "React Hooks are functions that let you use state and other React features without writing a class. They were introduced in React 16.8 to simplify state management in function components. Some commonly used hooks include useState, useEffect, and useContext. Hooks provide a powerful way to encapsulate logic and make components more reusable and easier to maintain."
  },
  {
    title: "The Future of Web Development",
    description: "Trends and technologies shaping the future of web development.",
    image: "https://i.pinimg.com/474x/cb/3c/ef/cb3cefbcba842dc7a34c0dfafcf38858.jpg",
    fullText: "Web development is constantly evolving, with new technologies and frameworks emerging every year. The future of web development will focus on progressive web apps, AI-driven user experiences, and enhanced performance optimizations. Technologies such as WebAssembly, serverless computing, and the rise of JavaScript frameworks will continue to shape how we build and interact with websites."
  },
  {
    title: "SEO Strategies for 2025",
    description: "Boost your website ranking with these SEO techniques.",
    image: "https://i.pinimg.com/474x/5e/07/c8/5e07c8d32d8ffd53efb1ba6225120746.jpg",
    fullText: "SEO in 2025 will focus on user experience, voice search optimization, and AI-powered search algorithms. Search engines like Google are constantly updating their ranking criteria, making it essential for businesses to focus on high-quality content, fast-loading websites, and mobile-first indexing. Structured data and keyword intent will play a crucial role in ensuring top rankings."
  },
  {
    title: "Mastering UI/UX Design",
    description: "Tips and best practices for designing user-friendly interfaces.",
    image: "https://i.pinimg.com/474x/9d/67/28/9d6728c5006f290836bc4fe2e679649b.jpg",
    fullText: "UI/UX design is the foundation of a great user experience. To create user-friendly interfaces, designers must focus on accessibility, simplicity, and intuitive navigation. Key principles include consistency, clear typography, and effective use of whitespace. With the rise of mobile-first design, optimizing for touch interactions and responsive layouts is more important than ever."
  }
];

function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gray-100 p-6 py-24 dark:bg-gray-900 text-black dark:text-primryColor">
        <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-center text-primryColor mb-6">Latest Blog Posts</h1>
          <div className="space-y-6">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-md flex flex-col md:flex-row gap-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full md:w-1/3 h-40 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">{post.title}</h3>
                  <p className="text-gray-600">{post.description}</p>
                  <button 
                    className="mt-3 bg-primryColor text-white py-2 px-4 rounded-lg"
                    onClick={() => setSelectedPost(post)}
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
      
      {/* Modal */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg text-center">
            <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-60 object-cover rounded-lg mb-4" />
            <h2 className="text-2xl font-bold mb-2">{selectedPost.title}</h2>
            <p className="text-gray-600 mb-4">{selectedPost.fullText}</p>
            <button 
              className="mt-3 bg-red-500 text-white py-2 px-4 rounded-lg"
              onClick={() => setSelectedPost(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Blog;

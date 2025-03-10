import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const blogPosts = [
  {
    title: "Understanding React Hooks",
    description: "An in-depth guide to React Hooks and how to use them effectively.",
    image: "https://i.pinimg.com/474x/28/24/0c/28240c893edc222573590a70b91735e8.jpg",
  },
  {
    title: "The Future of Web Development",
    description: "Trends and technologies shaping the future of web development.",
    image: "https://i.pinimg.com/474x/cb/3c/ef/cb3cefbcba842dc7a34c0dfafcf38858.jpg",
  },
  {
    title: "SEO Strategies for 2025",
    description: "Boost your website ranking with these SEO techniques.",
    image: "https://i.pinimg.com/474x/5e/07/c8/5e07c8d32d8ffd53efb1ba6225120746.jpg",
  },
  {
    title: "Mastering UI/UX Design",
    description: "Tips and best practices for designing user-friendly interfaces.",
    image: "https://i.pinimg.com/474x/9d/67/28/9d6728c5006f290836bc4fe2e679649b.jpg",
  }
];

function Blog() {
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
                  <button className="mt-3 bg-primryColor text-white py-2 px-4 rounded-lg">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Blog;
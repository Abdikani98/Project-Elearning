import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const courses = [
  {
    title: "Web Development",
    description: "Learn how to build modern web applications.",
    image: "https://i.pinimg.com/474x/79/c6/2d/79c62d94154fb332afb84191a996e66f.jpg",
  },
  {
    title: "Graphic Design",
    description: "Master the art of visual communication.",
    image: "https://i.pinimg.com/736x/13/79/a4/1379a4552b92db679575a47d322bd052.jpg",
  },
  {
    title: "Digital Marketing",
    description: "Explore marketing strategies in the digital world.",
    image: "https://i.pinimg.com/474x/eb/75/b1/eb75b12bf1160d6d6c27fdd9d6231e5b.jpg",
  },
  {
    title: "Data Science",
    description: "Analyze and interpret complex data.",
    image: "https://i.pinimg.com/736x/4a/37/92/4a37927d51ed5e5f31387f5f245af808.jpg",
  },
  {
    title: "Photography",
    description: "Learn the skills to capture stunning images.",
    image: "https://i.pinimg.com/474x/0a/26/bd/0a26bd369ce6f4e842f6ade2eb3d80cc.jpg",
  },
  {
    title: "Business Management",
    description: "Develop leadership and management skills.",
    image: "https://i.pinimg.com/474x/43/82/f0/4382f0d4365df059a7f6b900d188be7b.jpg",
  },
];

const Course = () => {
  return (
    <div className=" ">
      <Header />
      <div className="min-h-screen bg-gray-100 p-6 mt-10 dark:bg-gray-900 text-black dark:text-primryColor">
        <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-center text-primryColor mb-6">Our Courses</h1>
          <div className="grid md:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-md">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-40 object-cover rounded-lg"
                />
                <h3 className="text-lg font-semibold mt-3">{course.title}</h3>
                <p className="text-gray-600">{course.description}</p>
               <Link to="/Rajesteration"><button className="mt-3 bg-primryColor text-white py-2 px-4 rounded-lg hover:bg-primryColor">
                  Learn More
                </button></Link> 
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Course;
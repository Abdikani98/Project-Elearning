import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function About(){
  return ( <div>
       <Header/>
    <div className="bg-gray-100 min-h-screen py-20  dark:bg-gray-900 text-black dark:text-primryColor">
      {/* Header Section */}
      <div className="container mx-auto px-6 py-12 text-center">
        <h1 className="text-4xl font-bold text-primryColor">About LevelUp Academy</h1>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          LevelUp Academy is an innovative e-learning platform founded by
          <span className="font-semibold"> Abdiqani</span> and
          <span className="font-semibold"> Ahmed</span>. Our goal is to
          provide high-quality, flexible, and industry-relevant courses for
          learners worldwide.
        </p>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-900">Quality Courses</h2>
          <p className="text-gray-600 mt-2">
            Our courses are designed by industry experts to ensure you get
            real-world skills that matter.
          </p>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-900">Flexible Learning</h2>
          <p className="text-gray-600 mt-2">
            Learn at your own pace from anywhere in the world with 24/7 access
            to our platform.
          </p>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-900">Practical Training</h2>
          <p className="text-gray-600 mt-2">
            Apply what you learn through hands-on projects and interactive
            exercises.
          </p>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-900">Certified Courses</h2>
          <p className="text-gray-600 mt-2">
            Earn industry-recognized certificates that enhance your career
            opportunities.
          </p>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-primryColor text-white text-center py-12">
        <h2 className="text-2xl font-bold">Join LevelUp Academy Today!</h2>
        <p className="mt-2">Unlock new skills and take your career to the next level.</p>
        <Link to="/Rajesteration"><button className="mt-4 bg-white text-secdaryColor px-6 py-2 rounded-full font-semibold shadow-lg">
          Get Started
        </button></Link>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default About
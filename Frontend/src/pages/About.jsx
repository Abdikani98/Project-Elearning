import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Benefits from "../components/ourbinifits";
import yourImage from "../images/circle.png"

function About(){
  return ( <div>
       <Header/>
       <div className=" dark:bg-gray-900 text-black dark:text-white">

       <div className="max-w-6xl mx-auto px-6 py-12">
      {/* About Us Section */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
      <div className=" bg-no-repeat sm:h-[290px] h-[400px] ml-4 mb-24 sm:mt-12" style={{backgroundImage: `url(${yourImage})`}}>
        <div>
          
          <h2 className="text-6xl  font-bold  text-green-600">About Us</h2>
          <h3 className="text-xl md:text-2xl  mt-2">
            <span className="text-yellow-500 font-semibold text-5xl"> LevelUp Academy</span> Providing The Best Opportunities To The Students Around The Globe.
          </h3>
          <p className="text-gray-600 text-2xl mt-4">
            LevelUp Academy is a UI/UX Design Academy in Mogdishu involved in User Experience and User Interface Training and Consulting...
          </p>
          <button className="mt-6 bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition">
            Join Us
          </button>
        </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div
            className=" bg-[url(https://websitedemos.net/online-coding-course-02/wp-content/uploads/sites/713/2020/10/online-programming-course-02.jpg)]   h-40 md:h-56 bg-cover bg-center rounded-lg shadow-md"
            
          ></div>
          <div
            className=" bg-[url(https://websitedemos.net/online-coding-course-02/wp-content/uploads/sites/713/2020/10/online-programming-course-featured-video.jpg)]     h-40 md:h-56 bg-cover bg-center rounded-lg shadow-md"
           
          ></div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-16 grid md:grid-cols-2 gap-8 items-center">
        <div
          className="bg-[url(https://www.lewagon.com/assets/v4/home/desktop-sm-2x-22eff44fda77ebe36084cdbdb496db773a8d6c0db98f25c38eae0997990e1b69.webp)]     h-60 md:h-80 bg-cover bg-center rounded-lg shadow-md"
         
        ></div>
        <div>
          <h2 className="text-green-600 text-4xl font-bold mb-8">Features</h2>
          <h3 className="text-3xl font-bold ">
            We are always working to provide you best of the features in all aspects.
          </h3>
          <p className="text-gray-600 mt-4">
            AT LevelUp Academy the chief determination is to clear the minds of our students about their goals...
          </p>
          <button className="mt-6 bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition">
            Learn More
          </button>
        </div>
      </div> 
    </div>
       
       

   

      {/* Call to Action Section */}
      <div className="bg-primryColor text-white text-center py-12  dark:bg-gray-900 dark:text-white">
        <h2 className="text-2xl font-bold">Join LevelUp Academy Today!</h2>
        <p className="mt-2">Unlock new skills and take your career to the next level.</p>
        <Link to="/Rajesteration"><button className="mt-4 bg-white text-secdaryColor px-6 py-2 rounded-full font-semibold shadow-lg">
          Get Started
        </button></Link>
      </div>
  <Benefits/>

    
    <Footer/>
    </div>


    </div>
  );
};

export default About
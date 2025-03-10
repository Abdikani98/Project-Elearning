import { useNavigate } from "react-router-dom";

function Footer(){

  const Navigate = useNavigate();

    return (
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-lg font-semibold">LevelUp Academy</h3>
            <p className="mt-2 text-gray-400">
              Transforming education with flexible and high-quality learning
              solutions.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-2 text-gray-400 space-y-2">
              <li onClick={() => Navigate("/")} className="cursor-pointer hover:text-white">Home</li>
              <li onClick={() => Navigate("/About")} className="cursor-pointer hover:text-white">About Us</li>
              <li onClick={() => Navigate("/course")} className="cursor-pointer hover:text-white">Courses</li>
              <li onClick={() => Navigate("/contact")} className="cursor-pointer hover:text-white">Contact</li>
              <li onClick={() => Navigate("/Blog")} className="cursor-pointer hover:text-white">Blogs</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="mt-2 flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-white">GitHub</a>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-6">© 2025 LevelUp Academy. All Rights Reserved.</div>
      </footer>
    );
  };
  
  
  export default Footer;
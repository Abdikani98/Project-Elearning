import { NavLink } from "react-router-dom"

function Sidenav(){

    
  

    return <div>
        <div className="h-screen sm:fixed bg-gray-700 shadow-sm shadow-black text-white  sm:w-[20%] w-[40%] ">
            <div className="pt-4  sm:pl-24 pl-4 ">
             <img className="sm:w-14 w-8 rounded-full sm:mr-8" src=""/>
             <i class="fa-solid fa-user-tie text-8xl"></i>
            <h1 className="pl-3 font-semibold">Admin</h1>
            </div>
            
            {/* <h1 className="font-light font-Playwrite sm:text-4xl sm:py-4 mt-0 ml-3 text-white sm:px-4">E-learning</h1> */}
            <ul className="sm:text-xl font-Playwrite">
            <NavLink to="/Dashboard"><li className="sm:ml-16 pt-6"><i class="fa-solid fa-house sm:pr-2 "></i>DASHBOARD</li></NavLink>
            <NavLink to="/AllStudent"><li className="sm:ml-16 pt-6"><i class="fa-regular fa-clipboard sm:pr-2 "></i>AllStudents</li></NavLink>
            <NavLink to="/Message"><li className="sm:ml-16 pt-6"><i class="fa-regular fa-message sm:pr-2"></i>MESSAGE</li></NavLink>
            <NavLink to="/Lecture"><li className="sm:ml-16 pt-6"><i class="fa-regular fa-message sm:pr-2"></i>Lecture</li></NavLink>
            <NavLink to="/"><li className="sm:ml-16 pt-6"><i class="fa-solid fa-right-from-bracket sm:pr-2"></i>Logout</li></NavLink>

            </ul>

        </div>

    </div>
}
export default Sidenav
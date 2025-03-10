import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import yourImage from "../images/circle.png"
import sawir from "../images/creative.png"
import image from "../images/image gril.png"
import images from "../images/image.png"

function Home(){
    return <div className=" dark:bg-gray-900 text-black dark:text-white">
        <Header/>
        <div className="sm:flex grid sm:justify-center sm:ml-24 " >
            <div className="sm:w-[670px] sm:mt-20 mt-32">
            <div className=" bg-no-repeat sm:h-[290px] h-[300px] ml-4 mb-24 sm:mt-12" style={{backgroundImage: `url(${yourImage})`}}>
            <h1 className="font-bold font-roboto text-2xl text-primryColor sm:mt-4  sm:ml-12 ">Welcome to [LevelUp Academy]</h1>
            <p className=" sm:ml-12 sm:mt-3 text-gray-500">Empower your learning journey with our flexible, interactive online courses. 
                <br></br>Learn at your own pace, from anywhere, with expert-led content designed to help you succeed. Start today and unlock new skills for a brighter future!</p>
            
            <Link to="/Rajesteration"><button className="bg-primryColor  ml-12 text-white p-3 text-xl rounded-xl mt-10">Get started</button></Link>
            </div>
            </div>
            
            <div className=" sm:w-[600px] w-[700px] sm:mt-28 ml-14  sm:ml-[240px] bg-no-repeat flex " style={{backgroundImage: `url(${yourImage})`}}>
                
                <div className="sm:absolute sm:right-[100px] sm:top-4">
                <img className="mt-0 absolute sm:top-[375px] top-[800px] right-10 w-64" src={yourImage}/>
                <img className="sm:w-[500px] w-[500px] h-[500px] sm:h-[500px] ml-0 sm:ml-6  " src={images} alt="" />
                </div>
            </div>

        <div className="flex gap-3 w-50 bg-white shadow-xl p-2 border-2 border-primryColor rounded-lg absolute sm:top-[198px] top-[400px] right-[426px]">
               <i class="fa-solid fa-video  bg-primryColor p-2 rounded-xl text-white text-2xl"></i>
        <div>
            <h1 className="font-bold text-xl">2k+</h1>
            <p className="text-gray-500">video courses</p>
        </div>
        </div>

        <div className="w-24 h-30 bg-white shadow-xl text-center p-2 border-2 border-primryColor rounded-lg absolute sm:top-[100px] right-[126px]">
        <i class="fa-solid fa-laptop bg-primryColor p-2 rounded-xl text-white text-2xl"></i>
            <h1 className="font-bold text-xl">25k+</h1>
            <p className="text-gray-500">Online courses</p>
        </div>

        <div className="flex gap-3 bg-white shadow-xl p-2 border-2 border-primryColor rounded-lg absolute sm:top-[322px] right-[160px]">
        <i class="fa-solid fa-laptop bg-primryColor p-2 rounded-xl text-white text-2xl"></i>
        <div>
            <p className="text-gray-500">Tutors</p>
            <h1 className="font-bold text-xl">250k+</h1>
        </div>
        </div>
            
        </div>


        <div className="sm:flex grid gap-4 sm:mt-0 mt-40">
            <div className="flex gap-4 text-2xl ml-20 ">
            <i class="fa-solid fa-head-side-cough text-primryColor mt-1"></i>
            <p className="text-primryColor">public speaking</p>
            </div>

            <div className="flex gap-4 text-2xl ml-20 ">
                {/* <img className="w-8" src={sawir} alt="" /> */}
                <i class="fa-solid fa-lightbulb text-primryColor w-8"></i>
            <p className="text-primryColor">Creative thinking</p>
            </div>
        </div>

       
              
                <p className="text-primryColor text-center text-xl mt-8">our service</p>
                <h1 className="text-center text-2xl">Fostering a Playful & engaging learning <br></br>environment</h1>
        <div className="sm:flex grid gap-4 justify-center mt-8">
            <div className="bg-primryColor w-64 h-48 rounded-xl shadow-lg ">
            <p className="flex gap-2 m-3 justify-center text-white"><i class="fa-solid fa-laptop-file text-2xl"></i>
                <h1>Introduction Desing</h1></p>
            </div>

            <div className="bg-primryColor w-64 h-48 rounded-xl shadow-lg ">
            <p className="flex gap-2 m-3 justify-center text-white"><i class="fa-solid fa-laptop-file text-2xl"></i>
                <h1>Introduction Desing</h1></p>
            </div>

            <div className="bg-primryColor w-64 h-48 rounded-xl shadow-lg ">
            <p className="flex gap-2 m-3 justify-center text-white"><i class="fa-solid fa-laptop-file text-2xl"></i>
                <h1>Introduction Desing</h1></p>
            </div>
        </div>
        <Footer/>
    </div>
}

export default Home
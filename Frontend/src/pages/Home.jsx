import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import yourImage from "../images/circle.png"
import sawir from "../images/creative.png"
import image from "../images/image gril.png"
import images from "../images/image.png"

const services = [
    {
        title: "Interaction Design",
        description: "Lessons on design that cover the most recent developments.",
        icon: "\ud83d\udcca",
        bgColor: "bg-green-200",
    },
    {
        title: "UX Design Course",
        description: "Classes in development that cover the most recent advancements in web.",
        icon: "\ud83d\udcbb",
        bgColor: "bg-blue-200",
    },
    {
        title: "User Interface Design",
        description: "User Interface Design courses that cover the most recent trends.",
        icon: "\ud83d\udcca",
        bgColor: "bg-pink-200",
    },
    {
        title: "User Interface Design",
        description: "User Interface Design courses that cover the most recent trends.",
        icon: "\ud83d\udcca",
        bgColor: "bg-pink-200",
    },
];

const tutors = [
  

    {
        name: "MR: Ahmed Ali Abdi",
        role: "connection B/W Front-End And Back-End",
        description: "Former frontend dev for Linear, Coinbase, and React.",
        image: "https://ahmedshafi1.github.io/BootStraP-project/assets/img/team/ahmed.JPG",
    },
    {
        name: "MR: AbdiQani Mohamed Nur",
        role: "connection B/W Front-End And Back-End",
        description: "Former Backend dev for Linear, Coinbase, and MonoBD.",
        image: "https://avatars.githubusercontent.com/u/189589993?v=4",
    },
];



function Home() {
    return <div className=" dark:bg-gray-900 text-black dark:text-white">
        <Header />
        <div className="sm:flex grid sm:justify-center sm:ml-24 " >
            <div className="sm:w-[670px] sm:mt-20 mt-32">
                <div className=" bg-no-repeat sm:h-[290px] h-[300px] ml-4 mb-24 sm:mt-12" style={{ backgroundImage: `url(${yourImage})` }}>
                    <h1 className="font-bold font-roboto sm:text-5xl text-2xl text-primryColor sm:mt-4  sm:ml-12 ">Welcome to <br /><span className="text-yellow-500 font-semibold text-5xl"> LevelUp Academy</span></h1>
                    <p className=" sm:ml-12 sm:mt-3 text-gray-500 w-[500px] text-2xl ">Empower your learning journey with our flexible, interactive online courses.
                        <br></br>Learn at your own pace, from anywhere, with expert-led content designed to help you succeed. Start today and unlock new skills for a brighter future!</p>

                    <Link to="/Rajesteration"><button className="bg-primryColor  ml-12 text-white p-3 text-xl rounded-xl mt-10">Get started</button></Link>
                </div>
            </div>

            <div className=" sm:w-[600px] w-[700px] sm:mt-28 ml-14  sm:ml-[240px] bg-no-repeat flex " style={{ backgroundImage: `url(${yourImage})` }}>

                <div className="sm:absolute sm:right-[100px] sm:top-4">
                    <img className="mt-0 absolute sm:top-[375px] top-[800px] right-10 w-64" src={yourImage} />
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

         {/* services /> */}

         <div className="py-16 px-4 md:px-16 text-center">
      <h3 className="text-green-500 font-semibold text-3xl">Our Services</h3>
      <h2 className="text-3xl font-bold dark:bg-gray-900 text-gray-400 dark:text-white  mt-2">
        Fostering a playful & engaging learning environment
      </h2>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6  dark:bg-gray-900 text-black dark:text-black ">
        {services.map((service, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-md ${index === 0 ? "bg-white text-balck" : "bg-white"} border border-gray-200`}
          >
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-full text-xl ${service.bgColor}`}
            >
              {service.icon}
            </div>
            <h4 className="mt-4 text-xl font-semibold">{service.title}</h4>
            <p className="mt-2 text-gray-600">{service.description}</p>
            <a
              href="#"
              className={`mt-4 inline-block text-sm font-medium ${index === 0 ? "text-white" : "text-green-500"}`}
            >
              Learn More &rarr;
            </a>
          </div>
        ))}
      </div>
    </div>

       

         {/* team mates/> */}

        <div className="py-10 px-4 md:px-16 text-center bg-white  dark:bg-gray-900 text-black dark:text-white">
            <h3 className="text-green-500 font-semibold text-4xl">Tutors</h3>
            <h2 className="text-3xl font-bold text-gray-400 mt-2">Meet the Heroes</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                LevelUp Academy, instructors from all over the world instruct millions of students.
                We offer the knowledge and abilities.
            </p>
            <div className="mt-10 grid w-full    grid-cols-1  md:grid-cols-2 gap-8  dark:bg-gray-900 text-black dark:text-black">
                {tutors.map((tutor, index) => (
                    <div key={index} className="p-6 rounded-lg shadow-md bg-gray-50">
                        <img
                            src={tutor.image}
                            alt={tutor.name}
                            className="w-20 h-20 rounded-full mx-auto"
                        />
                        <h4 className="mt-4 text-xl font-semibold">{tutor.name}</h4>
                        <p className="text-green-500 text-sm font-medium">{tutor.role}</p>
                        <p className="mt-2 text-gray-600 text-sm">{tutor.description}</p>
                        <div className="mt-4 flex justify-center space-x-4 text-gray-500">
                            <i className="fab fa-facebook"></i>
                            <i className="fab fa-linkedin"></i>
                            <i className="fab fa-github"></i>
                        </div>
                    </div>
                ))}
            </div>
        </div>




        <Footer />
    </div>

}

export default Home
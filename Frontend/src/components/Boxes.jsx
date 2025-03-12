function Boxes() {
    return <div className="pt-20 flex gap-20 ml-[25%]">
        <div className="bg-blue-600 w-60 h-40 rounded-lg">
            <h1 className="text-5xl pt-5 text-center text-white">0</h1>
            <h1 className="text-5xl pt-5 text-center font-semibold text-white"><i  class="fa-solid fa-user-tie pr-2"></i>Teachers</h1>
        </div>
        <div className="bg-orange-600 w-60 h-40 rounded-lg">
            <h1 className="text-5xl pt-5 text-center text-white">0</h1>
            <h1 className="text-5xl pt-5 text-center text-white"><i  class="fa-solid fa-user pr-2"></i>Students</h1>
        </div>
        <div className="bg-green-600 w-60 h-40 rounded-lg">
            <h1 className="text-5xl pt-5 text-center text-white">0</h1>
            <h1 className="text-5xl pt-5 text-center text-white"><i class="fa-regular fa-circle-user pr-2"></i>Male</h1>
        </div>

       
    </div>
}

export default Boxes
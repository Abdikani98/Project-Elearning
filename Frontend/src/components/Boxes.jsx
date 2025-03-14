import axios from "axios"
import { useEffect, useState } from "react"

function Boxes() {

    const [getAllRegisters, setGetAllRegister] = useState([])

    const handAllRegisters = () => {
        axios.get("http://localhost:1000/total/Register").then((res) => {
            setGetAllRegister(res.data.total)
        }).catch(error => console.log (error))
    }

    useEffect(()=> {
        handAllRegisters()
    }, [])


    return <div className="pt-20 flex gap-20 ml-[25%]">
        <div className="bg-blue-600 w-60 h-40 rounded-lg">
            <h1 className="text-5xl pt-5 text-center text-white">{getAllRegisters > 0 ? getAllRegisters : 0}</h1>
            <h1 className="text-5xl pt-5 text-center font-semibold text-white"><i  class="fa-solid fa-user-tie "></i>Students</h1>
        </div>
        <div className="bg-orange-600 w-60 h-40 rounded-lg">
            <h1 className="text-5xl pt-5 text-center text-white">0</h1>
            <h1 className="text-5xl pt-5 text-center text-white"><i  class="fa-solid fa-user pr-2"></i>Male</h1>
        </div>
        <div className="bg-green-600 w-60 h-40 rounded-lg">
            <h1 className="text-5xl pt-5 text-center text-white">0</h1>
            <h1 className="text-5xl pt-5 text-center text-white"><i class="fa-regular fa-circle-user pr-2"></i>Female</h1>
        </div>

       
    </div>
}

export default Boxes
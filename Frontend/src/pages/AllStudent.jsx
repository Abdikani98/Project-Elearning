import Sidenav from "../components/SideNav"
import { useEffect, useState } from "react"

import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import AllStudentData from "../components/AllStudent/AllStudentData"

function AllStudent(){

    const [getAllStudent, setGetAllStudent] = useState([])

    const handleReadAllStudent = () => {
        axios.get("http://localhost:1000/read/Registration").then((res) => {
            setGetAllStudent(res.data)
        }).catch(error => console.log(error))
    }

    const handleDelete = (id) => {
        axios.delete(`http://localhost:1000/delete/Register/${id}`).then(() => {
            toast("Delete Success", {
                position: "top-center",
                
                autoClose: 3000,
                hideProgressBar: false,
            })
            handleReadAllStudent()
        }).catch((error) => console.log(error))
    }

    useEffect(() => {
        handleReadAllStudent()
    }, [])
    return <div>
       <Sidenav/>

       <div className="pl-[21%]">
        <div>

       <form>
                <input className="w-52 border-2 border-green-400 outline-none h-10 rounded-lg pl-2 ml-4 mt-5 text-2xl" type="Search" placeholder="Search Student" />
            </form>
        </div>

        <table className="mt-10  shadow-sm shadow-black">
            <thead>
                <tr className="bg-green-600 text-white">
                    <th className="px-4 py-3 text-xl">Name</th>
                    <th className="px-4 py-3 text-xl">Email</th>
                    <th className="px-4 py-3 text-xl">Phone</th>
                    <th className="px-4 py-3 text-xl">Adress</th>
                    <th className="px-4 py-3 text-xl">Date</th>
                    <th className="px-4 py-3 text-xl">userName</th>
                    <th className="px-4 py-3 text-xl">Password</th>
                    <th className="px-4 py-3 text-xl">Data</th>
                    <th className="px-4 py-3 text-xl">Actions</th>
                </tr>
            </thead>

            {
                getAllStudent.map((data) => {
                    return <AllStudentData remove={() => handleDelete(data._id)} Name={data.Name} Email={data.Email} Phone={data.Phone} Adress={data.Adress}  Date={data.Date} userName={data.userName} Password={data.Password}  Data={new Date(data.createdAt).toDateString() } />
                })
            }
            
            
        </table>
       


       </div>
       <ToastContainer />
       
    </div>

}

export default AllStudent
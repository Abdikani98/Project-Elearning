
function StudentData(props) {
    return <tbody>
        <tr>
            <td className="text-xl text-center border-b-2 border-l-2 py-1 border-green-200">{props.Name}</td>
            <td className="text-xl text-center border-b-2 border-l-2 py-1 border-green-200">{props.Email}</td>
            <td className="text-xl text-center border-b-2 border-l-2 py-1 border-green-200">{props.Phone}</td>
            <td className="text-xl text-center border-b-2 border-l-2 py-1 border-green-200">{props.Adress}</td>
            <td className="text-xl text-center border-b-2 border-l-2 py-1 border-green-200">{props.Date}</td>
            <td className="text-xl text-center border-b-2 border-l-2 py-1 border-green-200">{props.userName}</td>
            <td className="text-xl text-center border-b-2 border-l-2 py-1 border-green-200">{props.Password}</td>
            <td className="text-xl text-center border-b-2 border-l-2 py-1 border-green-200">{props.Data}</td>
            <td className="text-xl px-5 border-b-2 border-l-2 border-r-2 py-2 border-green-200">
                <div>
                    
                    <i onClick={props.remove}  className="fa-solid fa-trash text-red-500 ml-5 text-3xl"></i>
                </div>
            </td>
        </tr>
    </tbody>
}

export default StudentData
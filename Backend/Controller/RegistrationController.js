const RegistratioModel = require("../model/RegistrationModel")

// create data

const createRegistration = async(req, res)=>{
    const RegisterData = RegistratioModel(req.body)
    const saveRegister = await RegisterData.save()
    if(saveRegister){
        res.send(saveRegister)
    }
}

  // read data
   const readRegister = async(req,res)=>{
    const readData = await RegistratioModel.find()
    if(readData){
        res.send(readData)
    }
}

  // delete
   const deleteRegister = async(req, res)=>{
    const deleteData = await RegistratioModel.deleteOne({_id: req.params.id})
    if(deleteData){
        res.send("Delete Successfully")
    }
}

// display all student
const TotalStudent = async (req, res) =>{
    const total = await RegistratioModel.find().countDocuments()
    if(total){
        res.send({total})
    }
}


//student  search
const searchStudent= async (req,res) =>{
    const searchData =await RegistratioModel.find({

        $or:[ 
   
            { Name: {$regex: req.params.key} },

        ]
    })

    if (searchData){
        res.send(searchData)
    }
}





module.exports = {createRegistration, readRegister, deleteRegister, TotalStudent, searchStudent}


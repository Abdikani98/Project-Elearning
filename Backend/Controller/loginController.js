const LoginModel = require("../model/loginModel")


// create data

const createLogin = async(req, res)=>{
    const loginData = LoginModel(req.body)
    const saveLogin = await loginData.save()
    if(saveLogin){
        res.send(saveLogin)
    }
}

   // read data
   const readLogin = async(req,res)=>{
    const readData = await LoginModel.find()
    if(readData){
        res.send(readData)
    }
}

   // delete
   const deleteLogin = async(req, res)=>{
    const deleteData = await LoginModel.deleteOne({_id: req.params.id})
    if(deleteData){
        res.send("Delete Successfully")
    }
}

module.exports = {createLogin, readLogin, deleteLogin}
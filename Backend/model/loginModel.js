const  mongoose=require("mongoose")

const LoginSchema = mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    }
})

module.exports  = mongoose.model("Login", LoginSchema)
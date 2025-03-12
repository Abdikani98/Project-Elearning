const  mongoose=require("mongoose")

const RegistrationSchema = mongoose.Schema({
    Name:{
        type: String,
        required: true
    },
    Email:{
        type: String,
        required: true
    },
    Phone:{
        type: Number,
        required: true
    },
    Adress:{
        type: String,
        required: true
    },
    Date:{
        type: Date,
        required: true
    },
    userName:{
        type: String,
        required: true
    },
    Password:{
        type: String,
        required: true
    }
},

{timestamps: true}

)

module.exports  = mongoose.model("Registration", RegistrationSchema)
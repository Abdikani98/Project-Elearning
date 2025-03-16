const  mongoose  = require("mongoose");

const DocumentSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    discription: {
        type: String,
        required: true
    },
    document: {
        type: String,
        required: true
    }
},
{timestamps: true} 
)

module.exports = mongoose.model("document", DocumentSchema)
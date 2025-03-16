const multer = require("multer")

const uploadFile = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, "document")
    },
    filename: (req, file, cb) =>{
        cb(null, file.originalname)
    }
})

const saveFile = multer({
    storage: uploadFile
})

module.exports = saveFile
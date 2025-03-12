const ContentModel = require("../model/ContentModel")


// create data

const createContent = async(req, res)=>{
    const contentData = ContentModel(req.body)
    const saveContent = await contentData.save()
    if(saveContent){
        res.send(saveContent)
    }
}

   // read data
   const readContent = async(req,res)=>{
    const readData = await ContentModel.find()
    if(readData){
        res.send(readData)
    }
}

   // delete
   const deleteContent = async(req, res)=>{
    const deleteData = await ContentModel.deleteOne({_id: req.params.id})
    if(deleteData){
        res.send("Delete Successfully")
    }
}

module.exports = {createContent, readContent, deleteContent}
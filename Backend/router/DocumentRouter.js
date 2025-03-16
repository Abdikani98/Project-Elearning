const express = require("express")
const documentController = require("../controller/DocumentController")
const uploadFile = require("../middleware/UploadFile")

const routes = express.Router()

routes.post("/create/document",  documentController.createData)
routes.get("/read/document", documentController.readDocument)

module.exports = routes
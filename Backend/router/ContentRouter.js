const express = require("express")
const  ContentController = require("../Controller/ContentController")

const routes = express.Router()

routes.post("/Create/Content", ContentController.createContent)
routes.get("/read/Content", ContentController.readContent)
routes.delete("/delete/Content/:id", ContentController.deleteContent)

module.exports = routes
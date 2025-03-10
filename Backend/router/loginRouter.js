const express = require("express")
const LoginController = require("../Controller/loginController")

const routes = express.Router()

routes.post("/Create/Login", LoginController.createLogin)
routes.get("/read/Login", LoginController.readLogin)
routes.delete("/delete/Login/:id", LoginController.deleteLogin)

module.exports = routes
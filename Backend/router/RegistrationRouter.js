const express = require("express")
const RegistrationController = require("../Controller/RegistrationController")

const routes = express.Router()

routes.post("/Create/Registration", RegistrationController.createRegistration)
routes.get("/read/Registration", RegistrationController.readRegister)
routes.delete("/delete/Register/:id", RegistrationController.deleteRegister)

routes.get("/search/student/:key", RegistrationController.searchStudent)

routes.get("/total/Register", RegistrationController.TotalStudent)
 


module.exports = routes
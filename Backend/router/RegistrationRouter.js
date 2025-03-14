const express = require("express")
const RegistrationController = require("../Controller/RegistrationController")

const routes = express.Router()

routes.post("/Create/Registration", RegistrationController.createRegistration)
routes.get("/read/Registration", RegistrationController.readRegister)
routes.delete("/delete/Register/:id", RegistrationController.deleteRegister)
<<<<<<< HEAD
routes.get("/search/student/:key", RegistrationController.searchStudent)
=======
routes.get("/total/Register", RegistrationController.TotalStudent)
>>>>>>> 28be836de57060f9c8c743f644d23aedbb05db4f


module.exports = routes
const express =require("express")
const mongoose =require("mongoose")
const cors = require("cors")
require ("dotenv").config()
const LoginRoutes = require("./router/loginRouter")
const RegistrationRoutes = require("./router/RegistrationRouter")
const ContentRoutes = require("./router/ContentRouter")
const documentRoutes = require("./router/DocumentRouter")


const App = express()
App.use(express.json())
App.use(cors())

mongoose.connect(process.env.MongoDB_Url).then(()=>{
    console.log("database has been connected")
}).catch((error)=>{
    console.log(error)
})


App.use(LoginRoutes)
App.use(RegistrationRoutes)
App.use(ContentRoutes)
App.use(documentRoutes)


App.listen(process.env.port, ()=>{
    console.log(`Database hass been  successfully on port ${process.env.port}`)
})
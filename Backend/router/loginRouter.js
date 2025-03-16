// const express = require("express")
// const LoginController = require("../Controller/loginController")

// const routes = express.Router()

// routes.post("/Create/Login", LoginController.createLogin)
// // routes.get("/read/Login", LoginController.readLogin)
// routes.delete("/delete/Login/:id", LoginController.deleteLogin)

// module.exports = routes

const express = require("express");
const userControllers = require("../Controller/loginController");
const { isAuthenticated, isAdmin } = require("../middleware/authMiddlewar"); // ✅ Import middleware

const Router = express.Router();

// ✅ Public Routes (Registration & Login)
Router.post("/api/auth/register", userControllers.CreateUser);
Router.post("/api/auth/Login", userControllers.CreateLogin);

// ✅ Protected Routes (Only Authenticated Users)
Router.get("/users", userControllers.getUser);

// ✅ Admin-Only Routes
Router.delete("/users/:id", isAuthenticated, isAdmin, userControllers.deleteUser);
Router.put("/users/:id", isAuthenticated, isAdmin, userControllers.updateUser);


// display user
// this is i will comback
// Router.get("/api/total/users", isAuthenticated, userControllers.TotalUsers);
Router.get("/api/total/users", userControllers.TotalUsers);


module.exports = Router;
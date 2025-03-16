// const LoginModel = require("../model/loginModel")


// // create data

// const createLogin = async(req, res)=>{
//     const loginData = LoginModel(req.body)
//     const saveLogin = await loginData.save()
//     if(saveLogin){
//         res.send(saveLogin)
//     }
// }

//    // read data
//    const readLogin = async(req,res)=>{
//     const readData = await LoginModel.find()
//     if(readData){
//         res.send(readData)
//     }
// }

//    // delete
//    const deleteLogin = async(req, res)=>{
//     const deleteData = await LoginModel.deleteOne({_id: req.params.id})
//     if(deleteData){
//         res.send("Delete Successfully")
//     }
// }

// module.exports = {createLogin, readLogin, deleteLogin}




const LoginModel = require("../model/loginModel")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const loginModel = require("../model/loginModel");

// ✅ User Registration (Create User)
const CreateUser = async (req, res) => {
    try {
        const { name, email, password, isAdmin } = req.body; // Extract fields from request body

        // Check if user already exists
        const existingUser = await LoginModel.findOne({ email });
        if (existingUser) {
            return res.status(401).json({ success: false, message: "User already exists" });
        }

        // Hash the password
        const hashPassword = await bcrypt.hash(password, 10);

        // Create a new user with hashed password and optional admin status
        const newUser = new loginModel({
            name,
            email,
            password: hashPassword,
            // isAdmin: isAdmin || false, // Ensure default is false
        });

        // Save user to the database
        await newUser.save();

        return res.status(201).json({ success: true, message: "Account Created Successfully" });
    } catch (error) {
        console.log(error)
        return res.status(500).json({ success: false, message: "Error creating user", error });
    }
};

// ✅ User Login
const CreateLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        const user = await LoginModel.findOne({ email });
        if (!user) {
            return res.status(401).json({ success: false, message: "User does not exist" });
        }

        // Compare password with hashed password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ success: false, message: "Wrong credentials" });
        }

        // Generate JWT token
        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, "secretkeyofnoteap123@#", { expiresIn: "5h" });

        return res.status(200).json({
            success: true,
            token,
            user: { name: user.name, isAdmin: user.isAdmin },
            message: "Login successful"
        });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Error logging in", error });
    }
};

// ✅ Get All Users (Only Authenticated Users)
const getUser = async (req, res) => {
    try {
        const users = await LoginModel.find({}, "-password"); // Exclude password
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch users", error });
    }
};

// ✅ Delete User (Admin Only)
const deleteUser = async (req, res) => {
    try {
        if (!req.user.isAdmin) {
            return res.status(403).json({ message: "Access Denied: Admins only" });
        }

        const user = await LoginModel.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting user", error });
    }
};

// ✅ Update User (Admin Only)
const updateUser = async (req, res) => {
    try {
        if (!req.user.isAdmin) {
            return res.status(403).json({ message: "Access Denied: Admins only" });
        }

        const { name, email } = req.body;
        const updatedUser = await LoginModel.findByIdAndUpdate(
            req.params.id,
            { name, email },
            { new: true, runValidators: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User updated successfully", user: updatedUser });
    } catch (error) {
        res.status(500).json({ message: "Error updating user", error });
    }
};

// display users

// const TotalUsers= async(req,res)=>{
//     const total= await  User.find().countDocument()
//     if(total){
//         res.send({total})
//     }
// }

const TotalUsers = async (req, res) => {
  try {
    const total = await LoginModel.find().countDocuments(); 
    res.status(200).json({ success: true, total });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching total bookings", error: error.message });
  }
};


module.exports = { CreateUser, CreateLogin, getUser, deleteUser, updateUser , TotalUsers};
const express=require('express');
const app=express();
const connectTodatabase=require("./connection.js");
const createadmin=require("../routes/admin/createadmin");
const adminlogin=require("../routes/admin/adminlogin");
const createuser=require("../routes/user/createuser");
const userlogin=require("../routes/user/userlogin");
const uploadmutamers=require("../routes/admin/uploadmutamers")
const adminVerifyToken=require("../routes/admin/adminVerifyToken");
const cors = require("cors");

connectTodatabase(); // connecting to Database
const corsOptions = {
    origin: true,
    credentials: true,
  };
app.use(cors(corsOptions));
app.use(express.json());

const PORT=process.env.PORT || 5000;

//Routes for Admin
// app.use("/createadmin",createadmin);
app.use("/adminlogin",adminlogin);
app.use("/adminVerifyToken",adminVerifyToken);

// Routes for User
app.use("/createuser",createuser);
app.use("/userlogin",userlogin);
app.use("/uploadmutamers",uploadmutamers);

// Routes for Vouchers


// general route
app.get("/",(req,res)=>{
    res.send("server running");
})






app.listen(PORT,()=>{
    console.log("listening to PORT ",PORT);
})
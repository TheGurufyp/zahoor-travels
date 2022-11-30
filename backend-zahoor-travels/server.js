const express = require("express");
const app = express();
const connectTodatabase = require("./connection");
const createadmin = require("./routes/admin/createadmin");
const adminlogin = require("./routes/admin/adminlogin");
const createuser = require("./routes/user/createuser");
const userlogin = require("./routes/user/userlogin");
const uploadmutamers = require("./routes/admin/uploadmutamers");
const adminVerifyToken = require("./routes/admin/adminVerifyToken");
const cors = require("cors");
const VoucherRoute = require("./routes/admin/allVouchers");
const adminviewvoucher = require("./routes/admin/adminviewvoucher");
const getagents=require("./routes/admin/getagents")
const createagent=require("./routes/admin/createagent")
const deleteagent=require("./routes/admin/deleteagent")
const updateagent=require("./routes/admin/updateagent")
const adminlogout=require("./routes/admin/adminlogout")
const userlogout=require("./routes/user/userlogout")

connectTodatabase(); // connecting to Database
const corsOptions = {
  origin: true,
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());

const PORT = process.env.PORT || 5000;

//Routes for Admin
app.use("/createadmin", createadmin);
app.use("/adminlogin", adminlogin);
app.use("/adminVerifyToken", adminVerifyToken);
app.use("/getagents",getagents)
app.use("/createagent",createagent)
app.use("/deleteagent",deleteagent);
app.use("/updateagent",updateagent);
app.use("/adminlogout",adminlogout);

// Routes for User
app.use("/createuser", createuser);
app.use("/userlogin", userlogin);
app.use("/uploadmutamers", uploadmutamers);
app.use("/userlogout",userlogout);

// Routes for Vouchers
app.use(VoucherRoute);
app.use(adminviewvoucher);

// general route
app.get("/", (req, res) => {
  res.send("server running");
});

app.listen(PORT, () => {
  console.log("listening to PORT ", PORT);
});

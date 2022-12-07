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
const getagents = require("./routes/admin/getagents");
const createagent = require("./routes/admin/createagent");
const deleteagent = require("./routes/admin/deleteagent");
const updateagent = require("./routes/admin/updateagent");
const adminlogout = require("./routes/admin/adminlogout");
const userlogout = require("./routes/user/userlogout");
const saveVoucher = require("./routes/user/fetchuserdata");
const agentMautamar = require("./routes/user/getMautamers");
const getUserVoucher = require("../backend-zahoor-travels/routes/user/userVoucher");
const getpendingvouchers = require("./routes/admin/getpendingvouchers");
const appovevoucher = require("./routes/admin/approvevocuher");
const disapprovevoucher = require("./routes/admin/disapprovevoucher");
const indexVoucher = require("../backend-zahoor-travels/routes/user/indexVoucher");
const editVoucher = require("../backend-zahoor-travels/routes/user/userEditVoucher");
const userviewvoucher = require("./routes/user/userviewvoucher");
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
app.use("/getagents", getagents);
app.use("/createagent", createagent);
app.use("/deleteagent", deleteagent);
app.use("/updateagent", updateagent);
app.use("/adminlogout", adminlogout);
app.use("/getpendingvouchers", getpendingvouchers);
app.use("/appovevoucher", appovevoucher);
app.use("/disapprovevoucher", disapprovevoucher);

// Routes for User
app.use("/createuser", createuser);
app.use("/userlogin", userlogin);
app.use("/uploadmutamers", uploadmutamers);
app.use("/userlogout", userlogout);
app.use(userviewvoucher);

// Routes for Vouchers
app.use(VoucherRoute);
app.use(adminviewvoucher);
app.use(saveVoucher);
app.use(agentMautamar);
app.use(getUserVoucher);
app.use(indexVoucher);
app.use(editVoucher);

// general route
app.get("/", (req, res) => {
  res.send("server running");
});

app.listen(PORT, () => {
  console.log("listening to PORT ", PORT);
});

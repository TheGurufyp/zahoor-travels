const express = require('express')
const router = express.Router()
const Admin = require("../../database/Models/Admin");
const adminAlreadyExists = require("../../middleware/admin/adminAlreadyExists")
const bcrypt = require('bcrypt');
const authAdmin=require("../../middleware/admin/authAdmin")

router.post("/", authAdmin, async (req, res) => {

   if(req.success){
    res.send({success:true,payload:"Authentication successful"})
   }
   else{
    res.send({success:false,payload:"Authentication failed"})
   }


});










module.exports = router